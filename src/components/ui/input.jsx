import * as React from "react";
import { cn } from "../../lib/utils";

export const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-pink-300 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

