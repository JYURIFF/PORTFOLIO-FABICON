import * as React from "react";
import { cn } from "../../lib/utils";

export function Button({ className, variant = "default", size = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-pink-500 text-white hover:bg-pink-600",
    outline: "border border-pink-500 text-pink-500 hover:bg-pink-50",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
