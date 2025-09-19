"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WordByWordReveal = ({ 
  text, 
  className,
  delay = 0,
  staggerDelay = 0.05,
  ...props 
}) => {
  const words = text.split(" ");
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20,
              filter: "blur(4px)"
            },
            visible: { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const TextReveal = ({ 
  children, 
  className,
  delay = 0,
  duration = 0.6,
  y = 20,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredTextReveal = ({ 
  children, 
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ 
  children, 
  className,
  y = 20,
  duration = 0.6,
  ...props 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, filter: "blur(4px)" },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
