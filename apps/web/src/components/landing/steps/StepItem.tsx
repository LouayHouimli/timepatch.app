import React from "react";
import type { StepItemProps } from "@/types/steps";

export const StepItem: React.FC<StepItemProps> = ({
  number,
  title,
  children,
}) => (
  <li className="flex items-start gap-5 group">
    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/10 group-hover:shadow-primary/20">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-white/50 transition-colors">
        {children}
      </p>
    </div>
  </li>
);
