"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Sparkles, Brain } from "lucide-react";
import { motion } from "framer-motion";

const companies = [
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Prisma", logo: "/logos/prisma.svg" },
  { name: "Planetscale", logo: "/logos/planetscale.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Railway", logo: "/logos/railway.svg" },
  { name: "Netlify", logo: "/logos/netlify.svg" },
];

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[800px] flex-col items-center justify-center overflow-hidden py-20 sm:py-32 md:py-48">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
              Introducing TimePatch Beta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-medium tracking-tight text-gray-900 dark:text-white md:text-7xl"
          >
            Your day,{" "}
            <span className="text-primary dark:text-primary/90">
              intelligently
            </span>{" "}
            patched together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-white/50"
          >
            A smart micro-planner that adapts to your mood, energy, and
            schedule. Perfect for neurodivergent folks, creators, and remote
            workers who need flexible structure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <Button className="group h-12 bg-gray-900 dark:bg-white px-6 text-sm font-medium text-white dark:text-gray-900 transition-all hover:opacity-90">
              Get started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-12 border-gray-200 dark:border-white/10 px-6 text-sm font-medium text-gray-900 dark:text-white transition-all hover:bg-gray-100/50 dark:hover:bg-white/5"
            >
              See how it works
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-24 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0A_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0A_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent dark:from-primary/10 dark:via-primary/20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/5 dark:bg-white/5 backdrop-blur-sm">
                    <Target className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Daily Reset
                    </div>
                    <div className="text-sm text-gray-600 dark:text-white/50">
                      Set your mood & energy
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/5 dark:bg-white/5 backdrop-blur-sm">
                    <Sparkles className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Smart Planning
                    </div>
                    <div className="text-sm text-gray-600 dark:text-white/50">
                      AI adapts your schedule
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/5 dark:bg-white/5 backdrop-blur-sm">
                    <Brain className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Flow State
                    </div>
                    <div className="text-sm text-gray-600 dark:text-white/50">
                      Work at your best time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Companies section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-24 max-w-7xl px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center text-sm font-semibold text-gray-600 dark:text-white/50"
            >
              TRUSTED BY TEAMS AT
            </motion.p>
            <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group relative h-12 w-full"
                >
                  <div className="absolute -inset-x-4 -inset-y-2 hidden group-hover:block group-hover:bg-gray-50/50 dark:group-hover:bg-white/[0.02] group-hover:backdrop-blur-lg rounded-lg transition-all duration-300" />
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-white/50 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {company.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
