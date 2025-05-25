"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Calendar, Zap, ArrowUpRight } from "lucide-react";

const steps = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Daily Brain Reset",
    description:
      "Start each day fresh by telling TimePatch how you're feeling. Your mood, energy level, and sleep quality help shape your perfect schedule.",
    image: "/steps/time-blocks.webp",
    color: "from-blue-500/20 to-blue-500/0",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Smart Time Patching",
    description:
      "AI intelligently fills your day with the right mix of tasks, breaks, and habits. Adapts to your natural rhythms and energy patterns.",
    image: "/steps/calendar.webp",
    color: "from-purple-500/20 to-purple-500/0",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Flexible Adaptation",
    description:
      "Drag, drop, and adjust your schedule as needed. TimePatch learns from your changes and gets better at suggesting the right balance.",
    image: "/steps/realtime.webp",
    color: "from-emerald-500/20 to-emerald-500/0",
  },
];

export const StepsSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-light),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,var(--accent-dark),transparent_50%)] opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-x-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-gray-400 dark:from-white/50 to-transparent" />
            <span className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Your Daily Flow
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-gray-400 dark:from-white/50 to-transparent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Designed for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/60">
              your natural rhythm
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-white/50"
          >
            No more rigid schedules. TimePatch adapts to how you actually work,
            creating a flexible structure that feels natural and energizing.
          </motion.p>
        </div>

        <motion.div style={{ scale }} className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-x-8 gap-y-16 lg:gap-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/[0.07] transition-all hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-8 lg:p-12">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white/90 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-white/50 group-hover:text-gray-700 dark:group-hover:text-white/60 transition-colors">
                      {step.description}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-3 group/link">
                      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover/link:text-gray-900 dark:group-hover/link:text-white/90 transition-colors">
                        Learn more
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gray-900 dark:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4] lg:w-1/2">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 dark:from-black/50 via-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-xl border border-gray-200/20 dark:border-white/20 bg-white/50 dark:bg-black/50 px-6 py-3 text-sm text-gray-900 dark:text-white/70 backdrop-blur-sm">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-0 -z-10 h-24 w-24 rounded-bl-[100px] bg-gradient-to-br from-gray-100 dark:from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
