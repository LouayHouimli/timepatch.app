"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  ChevronRight,
  LogIn,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Method", href: "#method" },
  { name: "For Teams", href: "#teams" },
  { name: "Pricing", href: "#pricing" },
  { name: "Customers", href: "#customers" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 20;
      if (shouldBeScrolled !== scrolled) {
        setScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div
        className={`mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "mt-2 transform-gpu" : "mt-0"
        }`}
      >
        <div
          className={`relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
            scrolled
              ? "rounded-2xl bg-white/80 dark:bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.03)] backdrop-blur-xl scale-[0.97]"
              : "rounded-none scale-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:via-transparent dark:to-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <nav className="relative px-3 sm:px-4">
            <div className="relative flex h-14 items-center justify-between">
              <Link
                href="/"
                className="group flex items-center gap-2 transition-all duration-300 hover:opacity-70"
              >
                <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-900/10 via-gray-900/5 to-gray-900/0 dark:from-white/20 dark:via-white/10 dark:to-white/0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10" />
                  <Clock className="h-5 w-5 text-gray-900 dark:text-white relative z-10" />
                </div>
                <span className="text-lg font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
                  TimePatch
                </span>
              </Link>

              <div className="hidden md:flex md:items-center md:gap-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-1.5 text-sm text-gray-600 dark:text-white/50 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {item.name}
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex md:items-center md:gap-x-4">
                <div className="relative h-9 w-9 flex items-center justify-center">
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="relative rounded-xl bg-gradient-to-tr from-gray-900/10 via-gray-900/5 to-gray-900/0 dark:from-white/20 dark:via-white/10 dark:to-white/0 p-2 text-gray-600 dark:text-white/50 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <div className="relative h-5 w-5">
                      <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                    </div>
                    <span className="sr-only">Toggle theme</span>
                  </button>
                </div>

                <Link
                  href="/login"
                  className="group flex items-center gap-1.5 text-sm text-gray-600 dark:text-white/50 transition-all duration-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Sign in
                  <LogIn className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>

                <Link href="/signup">
                  <Button className="group relative h-9 overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-white/90 px-4 text-sm font-medium text-white dark:text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20">
                    <span className="relative z-10 flex items-center gap-2">
                      Get started
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 text-gray-600 dark:text-white/50"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-600 dark:text-white/50"
                >
                  <span className="sr-only">Toggle menu</span>
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 top-[57px] bg-white/80 dark:bg-black/80 backdrop-blur-xl z-[-1] md:hidden"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="md:hidden"
                  >
                    <div className="py-4">
                      <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base text-gray-600 dark:text-white/50 px-3"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <div className="h-px bg-gray-200/50 dark:bg-white/10 mx-3" />
                        <Link
                          href="/login"
                          onClick={() => setIsOpen(false)}
                          className="text-base text-gray-600 dark:text-white/50 px-3"
                        >
                          Sign in
                        </Link>
                        <div className="px-3">
                          <Link
                            href="/signup"
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-white dark:text-gray-900 bg-gray-900 dark:bg-white px-4 py-2 rounded-lg block text-center"
                          >
                            Get started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
