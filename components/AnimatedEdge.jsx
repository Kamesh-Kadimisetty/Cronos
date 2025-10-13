'use client';

import React, { useEffect, useRef } from 'react';
import { getSmoothStepPath } from 'reactflow';
import gsap from 'gsap';

export default function AnimatedEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, data }) {
  const sparkRef = useRef(null);

  // Create a smooth curved line path
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  useEffect(() => {
    const spark = sparkRef.current;
    if (!spark) return;
    
    const length = spark.getTotalLength();
    const delay = data?.delay || 0;
    const duration = data?.duration || 1.5;
    const repeatDelay = data?.repeatDelay || 0;

    // Set initial state: small spark at the beginning, hidden
    gsap.set(spark, {
      strokeDasharray: `${length * 0.1} ${length}`, // Small spark (10% of line length)
      strokeDashoffset: length,
      opacity: 0,
    });

    // Create animation timeline
    const timeline = gsap.timeline({
      delay: delay,
      repeat: -1,
      repeatDelay: repeatDelay,
    });

    // Fade in, animate the spark, then fade out and reset
    timeline.to(spark, {
      opacity: 1,
      duration: 0.1,
    }).to(spark, {
      strokeDashoffset: 0,
      duration: duration,
      ease: 'none',
    }, '-=0.1').to(spark, {
      opacity: 0,
      duration: 0.1,
    }).set(spark, {
      strokeDashoffset: length,
    });

    return () => {
      timeline.kill();
    };
  }, [edgePath, data]);

  return (
    <g>
      {/* Full static line - always visible */}
      <path
        d={edgePath}
        style={{
          fill: 'none',
          stroke: 'hsl(var(--border))',
          strokeWidth: 2,
          opacity: 0.4,
          ...style,
        }}
      />

      {/* Animated spark traveling along the line */}
      <path
        ref={sparkRef}
        d={edgePath}
        style={{
          fill: 'none',
          stroke: 'hsl(var(--primary))',
          strokeWidth: 3,
          filter: 'drop-shadow(0 0 6px hsl(var(--primary)))',
          strokeLinecap: 'round',
          ...style,
        }}
      />
    </g>
  );
}
