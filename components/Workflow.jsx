"use client";

import React, { useRef, useEffect, useState } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Workflow() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title and description on scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from(descRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-6 py-32 md:py-40 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            How it works
          </h2>
          <p 
            ref={descRef}
            className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            CRONOS fuses inputs from cameras, sensors, documents, and mobile devices to generate live site intelligence and route actions to the right people.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="flex justify-center">
          <ProcessSteps />
        </div>
      </div>
    </div>
  );
}

// Component for individual workflow boxes with GSAP animations
const WorkflowBox = React.forwardRef(function WorkflowBox(
  { className, children, label, icon, bullet, isLogo = false, delay = 0 }, 
  ref
) {
  const boxRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(boxRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: delay,
        ease: 'back.out(1.7)',
      });

      // Floating animation
      gsap.to(boxRef.current, {
        y: '-=8',
        duration: 2 + Math.random() * 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay,
      });

      // Pulse animation for glow effect
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.6,
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, boxRef);

    return () => ctx.revert();
  }, [delay]);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={(node) => {
        boxRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-background to-background/95 backdrop-blur-sm border ring-1 ring-border/50 shadow-lg cursor-pointer ${className}`}
    >
      {/* Glow effect */}
      <div
        ref={glowRef}
        className={`absolute inset-0 rounded-xl opacity-0 blur-xl ${
          bullet === "green" ? "bg-emerald-500/20" :
          bullet === "blue" ? "bg-primary/20" :
          bullet === "pink" ? "bg-pink-500/20" :
          isLogo ? "bg-primary/20" :
          "bg-muted-foreground/10"
        }`}
      />

      {/* Status indicator dot with pulse */}
      {bullet && (
        <div className="absolute top-3 left-3">
          <div className="relative">
            <div 
              className={`w-2 h-2 rounded-full ${
                bullet === "green" ? "bg-emerald-500" :
                bullet === "blue" ? "bg-primary" :
                bullet === "pink" ? "bg-pink-500" :
                "bg-muted-foreground"
              }`}
            />
            <div 
              className={`absolute inset-0 w-2 h-2 rounded-full animate-ping ${
                bullet === "green" ? "bg-emerald-500" :
                bullet === "blue" ? "bg-primary" :
                bullet === "pink" ? "bg-pink-500" :
                "bg-muted-foreground"
              }`}
            />
          </div>
        </div>
      )}
      
      {/* Database icon for Application */}
      {icon === "database" && (
        <div className="absolute top-3 right-3">
          <div className="w-5 h-4 bg-muted-foreground rounded-sm">
            <div className="w-full h-1 bg-muted mt-1"></div>
            <div className="w-full h-1 bg-muted mt-1"></div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="flex items-center justify-center text-center px-3 py-2 relative z-10">
        {isLogo ? (
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            CRONOS
          </span>
        ) : (
          <span className={`font-medium ${bullet ? 'text-muted-foreground text-sm' : 'text-foreground text-base'}`}>
            {label}
          </span>
        )}
      </div>
      
      {children}
    </div>
  );
});

WorkflowBox.displayName = "WorkflowBox";

// Particle component for data flow visualization
function DataParticle({ delay = 0, color = "hsl(var(--primary))" }) {
  const particleRef = useRef(null);

  useEffect(() => {
    if (!particleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(particleRef.current, {
        opacity: 0.8,
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay,
      });
    }, particleRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={particleRef}
      className="absolute w-1 h-1 rounded-full opacity-40"
      style={{ backgroundColor: color }}
    />
  );
}

function ProcessSteps() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs for each component
  const stripeRef = useRef(null);
  const schematicRef = useRef(null);
  const applicationRef = useRef(null);
  const componentsRef = useRef(null);
  const plansRef = useRef(null);
  const meteringRef = useRef(null);
  const featureFlagsRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Container entrance
      gsap.from(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Add subtle rotation animation to container
      gsap.to(containerRef.current, {
        rotateY: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformPerspective: 1000,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isVisible]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-[500px] bg-gradient-to-br from-background/50 via-background/30 to-primary/5 backdrop-blur border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
      ref={containerRef}
      style={{ perspective: '1000px' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Scattered data particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          <DataParticle delay={i * 0.1} />
        </div>
      ))}

      {/* Main workflow components */}
      
      {/* Left: Cameras & Sensors */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
        <WorkflowBox
          ref={stripeRef}
          label="Cameras & Sensors"
          className="w-36 h-20"
          delay={0.2}
        />
      </div>

      {/* Center: CRONOS Logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <WorkflowBox
          ref={schematicRef}
          isLogo={true}
          className="w-40 h-24"
          delay={0.4}
        />
      </div>

      {/* Right: Application */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <WorkflowBox
          ref={applicationRef}
          label="Application"
          icon="database"
          className="w-36 h-20"
          delay={0.6}
        />
      </div>

      {/* Top Right: Live Surveillance */}
      <div className="absolute right-1/3 top-16">
        <WorkflowBox
          ref={componentsRef}
          label="Live Surveillance"
          bullet="pink"
          className="w-36 h-16"
          delay={0.8}
        />
      </div>

      {/* Top Right: AI Monitoring */}
      <div className="absolute right-20 top-24">
        <WorkflowBox
          ref={plansRef}
          label="AI Monitoring"
          bullet="green"
          className="w-36 h-14"
          delay={1.0}
        />
      </div>

      {/* Bottom Right: Sites & Zones */}
      <div className="absolute right-20 bottom-24">
        <WorkflowBox
          ref={meteringRef}
          label="Sites & Zones"
          bullet="blue"
          className="w-36 h-14"
          delay={1.2}
        />
      </div>

      {/* Bottom Right: AI Agents */}
      <div className="absolute right-1/3 bottom-16">
        <WorkflowBox
          ref={featureFlagsRef}
          label="AI Agents"
          bullet="gray"
          className="w-36 h-16"
          delay={1.4}
        />
      </div>

      {/* Animated Beams */}
      
      {/* PHASE 1: Input to CRONOS */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={stripeRef}
        toRef={schematicRef}
        duration={2.5}
        delay={1.6}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--primary) / 0.8)"
      />

      {/* PHASE 2: CRONOS to outputs */}
      
      {/* CRONOS to Application */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={applicationRef}
        duration={2.8}
        delay={3.2}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--primary) / 0.8)"
      />

      {/* CRONOS to Live Surveillance */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={componentsRef}
        duration={2.8}
        delay={3.2}
        gradientStartColor="#EC4899"
        gradientStopColor="#F472B6"
        startXOffset={10}
        startYOffset={-18}
        endXOffset={-18}
        endYOffset={0}
      />

      {/* CRONOS to AI Monitoring */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={plansRef}
        duration={2.8}
        delay={3.2}
        gradientStartColor="#10B981"
        gradientStopColor="#34D399"
        startXOffset={14}
        startYOffset={-10}
        endXOffset={-14}
        endYOffset={0}
      />

      {/* CRONOS to Sites & Zones */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={meteringRef}
        duration={2.8}
        delay={3.2}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--primary) / 0.6)"
        startXOffset={14}
        startYOffset={10}
        endXOffset={-14}
        endYOffset={0}
      />

      {/* CRONOS to AI Agents */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={featureFlagsRef}
        duration={2.8}
        delay={3.2}
        gradientStartColor="hsl(var(--muted-foreground))"
        gradientStopColor="hsl(var(--muted-foreground) / 0.6)"
        startXOffset={10}
        startYOffset={18}
        endXOffset={-18}
        endYOffset={0}
      />
    </div>
  );
}