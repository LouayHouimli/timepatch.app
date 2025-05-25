"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Clock } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Method", href: "#method" },
    { name: "Pricing", href: "#pricing" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Download", href: "#download" },
  ],
  Resources: [
    { name: "Documentation", href: "#docs" },
    { name: "API", href: "#api" },
    { name: "Guides", href: "#guides" },
    { name: "Updates", href: "#updates" },
    { name: "Community", href: "#community" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Customers", href: "#customers" },
    { name: "Brand", href: "#brand" },
  ],
  Legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Cookies", href: "#cookies" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#twitter", icon: Twitter },
  { name: "GitHub", href: "#github", icon: Github },
  { name: "LinkedIn", href: "#linkedin", icon: Linkedin },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100/10 dark:border-white/10 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 xl:grid-cols-5">
          <div className="xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gray-900/5 dark:bg-white/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent dark:from-primary/10 dark:via-primary/20" />
                <Clock className="h-5 w-5 text-gray-900 dark:text-white relative z-10" />
              </div>
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                TimePatch
              </span>
            </div>
            <div className="mt-8 flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 dark:text-white/50 transition-colors hover:text-gray-900 dark:hover:text-white"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-4 xl:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {category}
                </h3>
                <ul role="list" className="mt-6 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 dark:text-white/50 transition-colors hover:text-gray-900 dark:hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100/10 dark:border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600 dark:text-white/50">
            &copy; {new Date().getFullYear()} TimePatch, Inc. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#privacy"
              className="text-xs text-gray-600 dark:text-white/50 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#terms"
              className="text-xs text-gray-600 dark:text-white/50 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="#cookies"
              className="text-xs text-gray-600 dark:text-white/50 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Cookies
            </Link>
            <Link
              href="#sitemap"
              className="text-xs text-gray-600 dark:text-white/50 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
