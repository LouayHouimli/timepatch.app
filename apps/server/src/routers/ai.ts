import { publicProcedure, router } from "../lib/trpc";
import { google, createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { z } from "zod";

const schema = z.object({
  prompt: z.string().min(1).max(1000),
});

export const aiRouter = router({
  test: publicProcedure.input(schema).mutation(async ({ input, ctx }) => {
    try {
      const google = createGoogleGenerativeAI({
        apiKey: ctx.env.GOOGLE_API_KEY,
      });

      const systemPrompt = `
          You are an AI productivity assistant that optimizes users' days based on their description, mood, and energy level.
          
          Analyze the user's day description carefully to identify:
          1. Key tasks and activities they need to complete
          2. Potential challenges or stressors they might face
          3. Their personal and professional priorities
          4. Available time slots in their schedule
          
          Then, create a comprehensive plan that includes:
          
          1. A personalized schedule with specific time slots for:
             - Deep focus work sessions (45-90 minutes)
             - Strategic breaks (15-30 minutes)
             - Meetings and collaborative activities
             - Personal time and self-care
          
          2. Task prioritization recommendations that:
             - Identify the most important and urgent tasks
             - Explain why each task matters
             - Match tasks to the user's energy levels throughout the day
             - Break down complex tasks into manageable steps
          
          3. Energy management tips tailored to their current mood and energy level:
             - For low energy: quick, achievable tasks and energy-boosting activities
             - For medium energy: balanced mix of challenging and routine work
             - For high energy: tackle the most difficult or creative tasks
             - Include specific strategies for managing stress and maintaining focus
          
          4. Quick wins they can accomplish today:
             - Fast, high-impact actions that create momentum
             - Small improvements to their workspace or workflow
             - Simple tasks that can be completed in under 10 minutes
          
          5. A motivational summary that:
             - Acknowledges their current state
             - Offers encouragement aligned with their mood
             - Highlights the main benefits of following your recommendations
          
          Always ensure your recommendations are practical, actionable, and considerate of their current state.
        `;

      const userPrompt = `
          Day description: ${input.prompt}
          Current mood: great
          Energy level: high
          
          Please optimize my day and provide detailed recommendations in JSON format with exactly this structure:
          {
            "schedule": [
              { "time": "8:00 AM", "activity": "Morning routine", "type": "other" },
              { "time": "9:00 AM", "activity": "Deep work: [specific task]", "type": "focus" },
              { "time": "10:30 AM", "activity": "Short break: [specific activity]", "type": "break" }
            ],
            "taskPriorities": [
              { "task": "Complete project proposal", "reason": "Due tomorrow and requires focused attention" },
              { "task": "Review team updates", "reason": "Keeps you informed and unblocks others' work" }
            ],
            "energyTips": [
              "Start with a 5-minute breathing exercise to center your attention",
              "Schedule your most challenging tasks during your peak energy hours (10am-12pm)",
              "Take a short walk outside after lunch to refresh your mind"
            ],
            "quickWins": [
              "Clear your email inbox",
              "Organize your digital workspace",
              "Send that follow-up message you've been postponing"
            ],
            "summary": "Today, focus on balancing your important deadlines with your current energy levels. By tackling the project proposal first and taking strategic breaks, you'll maintain productivity while honoring your need for balance."
          }
          
          IMPORTANT: Your response MUST be valid JSON exactly matching this structure. Do not include any text before or after the JSON. Do not include markdown formatting like \`\`\` around the JSON.
        `;

      const { text } = await generateText({
        model: google("gemini-1.5-pro-latest"),
        system: systemPrompt,
        prompt: userPrompt,
      });

      let response;
      try {
        const cleanedText = text
          .replace(/`/g, "")
          .replace(/```json/g, "")
          .replace(/```/g, "");
        const jsonStart = cleanedText.indexOf("{");
        const jsonEnd = cleanedText.lastIndexOf("}");

        if (jsonStart !== -1 && jsonEnd !== -1) {
          const jsonText = cleanedText.substring(jsonStart, jsonEnd + 1);
          response = JSON.parse(jsonText);
        } else {
          throw new Error("No JSON object found in response");
        }
      } catch (error) {
        const defaultResponse = {
          schedule: [
            {
              time: "9:00 AM",
              activity: "Deep work on highest priority task",
              type: "focus",
            },
            {
              time: "10:30 AM",
              activity: "Quick refresh break",
              type: "break",
            },
            {
              time: "11:00 AM",
              activity: "Continue focused work",
              type: "focus",
            },
            {
              time: "12:30 PM",
              activity: "Lunch and short walk",
              type: "break",
            },
            {
              time: "1:30 PM",
              activity: "Team collaboration or meetings",
              type: "other",
            },
            {
              time: "3:00 PM",
              activity: "Administrative tasks",
              type: "focus",
            },
            {
              time: "4:30 PM",
              activity: "Day review and tomorrow planning",
              type: "focus",
            },
          ],
          taskPriorities: [
            {
              task: "Review your priorities",
              reason: "To get organized and focused",
            },
            {
              task: "Complete one important task",
              reason: "To make meaningful progress",
            },
            {
              task: "Prepare for upcoming deadlines",
              reason: "To reduce future stress",
            },
          ],
          energyTips: [
            "Take short 5-minute breaks every hour",
            "Hydrate regularly throughout the day",
            "Match task difficulty to your energy levels",
            "Use the Pomodoro technique (25 min work, 5 min break)",
          ],
          quickWins: [
            "Clear your inbox",
            "Organize your workspace",
            "Send one important email",
            "Update your to-do list",
          ],
          summary:
            "Focus on essential tasks based on your energy level. Start with your most important work during your peak energy time, take regular breaks, and celebrate small accomplishments.",
        };
        response = defaultResponse;
      }

      return response;
    } catch (error) {
      console.error("AI generation error:", error);
      return `Error generating response: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
    }
  }),
});
