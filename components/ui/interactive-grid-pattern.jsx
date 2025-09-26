"use client";
import React, { useState, useEffect } from "react"

import { cn } from "@/lib/utils"

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  className,
  squaresClassName,
  ...props
}) {
  const [hoveredSquare, setHoveredSquare] = useState(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial dimensions
    updateDimensions()

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Make grid size responsive
  const getResponsiveSize = () => {
    if (dimensions.width <= 640) return { width: 30, height: 30 } // mobile
    if (dimensions.width <= 768) return { width: 40, height: 40 } // tablet
    return { width, height } // desktop
  }

  const responsiveSize = getResponsiveSize()
  const gridWidth = responsiveSize.width
  const gridHeight = responsiveSize.height

  // Calculate how many squares we need to fill the screen with extra padding
  const horizontal = Math.ceil(dimensions.width / gridWidth) + 4 // Extra padding for full coverage
  const vertical = Math.ceil(dimensions.height / gridHeight) + 4

  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{ 
        width: '100%', 
        height: '100%',
        minWidth: '100vw',
        minHeight: '100vh'
      }}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          x="0"
          y="0"
          width={gridWidth}
          height={gridHeight}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width={gridWidth}
            height={gridHeight}
            className={cn(
              "stroke-gray-400/30 transition-all duration-100 ease-in-out",
              squaresClassName
            )}
            fill="transparent"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      
      {/* Background pattern */}
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#grid-pattern)"
      />
      
      {/* Interactive squares overlay */}
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * gridWidth
        const y = Math.floor(index / horizontal) * gridHeight
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={gridWidth}
            height={gridHeight}
            className={cn(
              "transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              hoveredSquare === index ? "fill-primary/20" : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
