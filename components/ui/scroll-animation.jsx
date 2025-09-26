'use client'

import { motion } from 'motion/react'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

// Animation variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const slideInUp = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: 25
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

// Main animated section wrapper
export function AnimatedSection({ 
  children, 
  className,
  variant = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    rootMargin,
    delay,
    triggerOnce: true
  })

  const variants = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    slideInUp
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[variant]}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation wrapper for lists/grids
export function StaggeredContainer({ 
  children, 
  className,
  delay = 0,
  threshold = 0.1,
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    delay,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Individual staggered item
export function StaggeredItem({ 
  children, 
  className,
  ...props 
}) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Parallax scroll effect
export function ParallaxSection({ 
  children, 
  className,
  speed = 0.5,
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0,
    rootMargin: '0px',
    triggerOnce: false
  })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        transform: isVisible ? `translateY(${window.scrollY * speed}px)` : 'translateY(0px)'
      }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Reveal animation for text
export function RevealText({ 
  children, 
  className,
  delay = 0,
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    delay,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.25, 0.25, 0.75],
        delay: delay / 1000 
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Card hover and scroll animations
export function AnimatedCard({ 
  children, 
  className,
  hoverScale = 1.02,
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0 
      } : { 
        opacity: 0, 
        y: 40, 
        rotateX: 15 
      }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.2 }
      }}
      transition={{ 
        duration: 0.7,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Floating animation for hero elements
export function FloatingElement({ 
  children, 
  className,
  floatIntensity = 10,
  duration = 6,
  ...props 
}) {
  return (
    <motion.div
      animate={{
        y: [-floatIntensity, floatIntensity, -floatIntensity],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
