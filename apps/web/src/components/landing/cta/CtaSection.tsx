"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-4 w-4" />,
    label: "Active Users",
    value: "10K+",
  },
  {
    icon: <Star className="h-4 w-4" />,
    label: "5-Star Reviews",
    value: "1K+",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    label: "Tasks Completed",
    value: "1M+",
  },
];

export const CtaSection = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-light),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,var(--accent-dark),transparent_50%)] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Start managing time{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/60">
              the modern way
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-white/50"
          >
            Join thousands of teams using TimePatch to optimize their time and
            boost productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <Button className="group h-12 rounded-lg bg-primary px-8 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:scale-[1.02]">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-lg border-gray-200 dark:border-white/10 px-8 text-sm font-medium text-gray-900 dark:text-white transition-all hover:bg-gray-100 dark:hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-20 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-8 py-10 backdrop-blur-sm transition-colors hover:bg-white dark:hover:bg-white/[0.075]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary dark:text-white transition-colors group-hover:bg-primary/20">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-white/50">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 -z-10 h-16 w-16 rounded-bl-[100px] bg-primary/5 dark:bg-white/5 transition-colors group-hover:bg-primary/10 dark:group-hover:bg-white/10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative mx-auto mt-20 max-w-5xl rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-8 backdrop-blur-sm transition-colors hover:bg-white dark:hover:bg-white/[0.075] sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />

          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Ready to transform your workflow?
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-white/50">
                Start your 30-day free trial today.
              </p>
            </div>
            <Button className="group h-10 rounded-lg bg-primary px-6 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:scale-[1.02]">
              <span className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
