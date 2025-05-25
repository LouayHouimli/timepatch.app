"use client";

import React from "react";
import { HeroSection } from "@/components/landing/hero/HeroSection";
import { FeatureSection } from "@/components/landing/features/FeatureSection";
import { StepsSection } from "@/components/landing/steps/StepsSection";
import { CtaSection } from "@/components/landing/cta/CtaSection";
import { Footer } from "@/components/landing/footer/Footer";
import { motion } from "framer-motion";


const Landing = () => {


  return (
    <div className="relative min-h-screen bg-white dark:bg-black selection:bg-primary/10 dark:selection:bg-white/10 selection:text-primary dark:selection:text-white">

      <div className="pointer-events-none fixed inset-0 z-0">

        <div className="absolute top-0 h-[1000px] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
          <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.15),transparent_50%)]" />
        </div>


        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#ffffff0A_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0A_1px,transparent_1px)]" />
      </div>

      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <FeatureSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <StepsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <CtaSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;
