"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Battery,
  Clock,
  Focus,
  Calendar,
  LineChart,
} from "lucide-react";

const features = [
  {
    title: "Smart Task Scheduling",
    description:
      "AI-powered scheduling that adapts to your energy levels and work patterns throughout the day.",
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    darkColor: "dark:from-blue-500/30 dark:via-blue-500/10 dark:to-transparent",
    icon: Brain,
  },
  {
    title: "Energy-Based Planning",
    description:
      "Match tasks to your energy levels. Schedule deep work when you're most focused, and lighter tasks for low-energy periods.",
    color: "from-purple-500/20 via-purple-500/5 to-transparent",
    darkColor:
      "dark:from-purple-500/30 dark:via-purple-500/10 dark:to-transparent",
    icon: Battery,
  },
  {
    title: "Flexible Time Blocks",
    description:
      "Dynamic time blocks that adjust to your actual work pace, not rigid time slots that create unnecessary pressure.",
    color: "from-orange-500/20 via-orange-500/5 to-transparent",
    darkColor:
      "dark:from-orange-500/30 dark:via-orange-500/10 dark:to-transparent",
    icon: Clock,
  },
  {
    title: "Focus Mode",
    description:
      "Minimize distractions with our focus mode. Block notifications and track your deep work sessions automatically.",
    color: "from-green-500/20 via-green-500/5 to-transparent",
    darkColor:
      "dark:from-green-500/30 dark:via-green-500/10 dark:to-transparent",
    icon: Focus,
  },
  {
    title: "Calendar Integration",
    description:
      "Seamlessly sync with your existing calendars. TimePatch works alongside your current tools, not against them.",
    color: "from-pink-500/20 via-pink-500/5 to-transparent",
    darkColor: "dark:from-pink-500/30 dark:via-pink-500/10 dark:to-transparent",
    icon: Calendar,
  },
  {
    title: "Progress Analytics",
    description:
      "Track your productivity patterns and get insights into when you do your best work. Adjust your schedule accordingly.",
    color: "from-yellow-500/20 via-yellow-500/5 to-transparent",
    darkColor:
      "dark:from-yellow-500/30 dark:via-yellow-500/10 dark:to-transparent",
    icon: LineChart,
  },
];

export const FeatureSection = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full tracking-wider">
              Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Built for the way you{" "}
            <span className="text-primary dark:text-primary/90">
              actually work
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-white/50"
          >
            A complete suite of tools designed to help you work with your
            natural rhythm, not against it.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/[0.07] transition-all"
                >
                  <div className="h-full p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/5 dark:bg-white/5">
                      <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white/90">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-white/50 group-hover:text-gray-700 dark:group-hover:text-white/60">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-gray-900 dark:text-white group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                    <div
                      className={`absolute right-0 top-0 -z-10 h-24 w-24 rounded-bl-[100px] bg-gradient-to-br ${feature.color} ${feature.darkColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
