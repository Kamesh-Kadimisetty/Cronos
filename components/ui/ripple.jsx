import React from "react";

import { cn } from "@/lib/utils";

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 180,
  mainCircleOpacity = 0.15,
  numCircles = 6,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:radial-gradient(circle,white_40%,transparent_70%)]",
        className
      )}
      {...props}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 60;
        const opacity = mainCircleOpacity - i * 0.02;
        const animationDelay = `${i * 0.8}s`;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-gradient-to-r from-primary/20 via-emerald-400/15 to-primary/20`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)"
              }
            } />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
