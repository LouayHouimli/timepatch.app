import { protectedProcedure, publicProcedure, router } from "../lib/trpc";
import { aiRouter } from "./ai";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "TimePatch API is healthy";
  }),
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
  ai: aiRouter,
});
export type AppRouter = typeof appRouter;
