"use client";

import React, { useRef } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';

export function Workflow() {
  return (
    <div className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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

// Component for individual workflow boxes
const WorkflowBox = React.forwardRef(function WorkflowBox(
  { className, children, label, icon, bullet, isLogo = false }, 
  ref
) {
  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-background to-background/95 backdrop-blur-sm border ring-1 ring-border/50 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
    >
      {/* Status indicator dot */}
      {bullet && (
        <div className="absolute top-3 left-3">
          <div 
            className={`w-2 h-2 rounded-full ${
              bullet === "green" ? "bg-emerald-500" :
              bullet === "blue" ? "bg-primary" :
              bullet === "pink" ? "bg-pink-500" :
              "bg-muted-foreground"
            }`}
          />
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
      <div className="flex items-center justify-center text-center px-3 py-2">
        {isLogo ? (
          <span className="text-2xl  text-foreground">CRONOS</span>
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

function ProcessSteps() {
  const containerRef = useRef(null);
  
  // Refs for each component
  const stripeRef = useRef(null);
  const schematicRef = useRef(null);
  const applicationRef = useRef(null);
  const componentsRef = useRef(null);
  const plansRef = useRef(null);
  const meteringRef = useRef(null);
  const featureFlagsRef = useRef(null);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-[400px] bg-gradient-to-br from-background/50 to-background/30 backdrop-blur border border-border/50 rounded-2xl shadow-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Main workflow components positioned like in your image */}
      
      {/* Left: Stripe */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
        <WorkflowBox
          ref={stripeRef}
          label="Cameras & Sensors"
          className="w-32 h-16"
        />
      </div>

      {/* Center: Schematic */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <WorkflowBox
          ref={schematicRef}
          isLogo={true}
          className="w-32 h-20"
        />
      </div>

      {/* Right: Application */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <WorkflowBox
          ref={applicationRef}
            label="Application"
          className="w-32 h-16"
        />
      </div>

      {/* Top Right: Components */}
      <div className="absolute right-1/3 top-16">
        <WorkflowBox
          ref={componentsRef}
          label="Live Surveillance"
          bullet="pink"
          className="w-32 h-14"
        />
      </div>

      {/* Top Right: Plans & Entitlements */}
      <div className="absolute right-24 top-24">
        <WorkflowBox
          ref={plansRef}
          label="Ai Monitoring"
          bullet="green"
          className="w-36 h-12"
        />
      </div>

      {/* Bottom Right: Metering & Pricing */}
      <div className="absolute right-24 bottom-24">
        <WorkflowBox
          ref={meteringRef}
          label="Sites & Zones"
          bullet="blue"
          className="w-36 h-12"
        />
      </div>

      {/* Bottom Right: Feature Flags */}
      <div className="absolute right-1/3 bottom-16">
        <WorkflowBox
          ref={featureFlagsRef}
          label="Ai Agents"
          bullet="gray"
          className="w-32 h-14"
        />
      </div>

      {/* Animated Beams - Straight line light tracks */}
      
      {/* PHASE 1: Stripe to Schematic (happens first) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={stripeRef}
        toRef={schematicRef}
        duration={2.5}
        delay={0}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--primary) / 0.8)"
      />

      {/* PHASE 2: Schematic to all others (happens simultaneously after Phase 1) */}
      
      {/* Schematic to Application */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={applicationRef}
        duration={2.8}
        delay={2.8}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--primary) / 0.8)"
      />

      {/* Schematic to Components */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={componentsRef}
        duration={2.8}
        delay={2.8}
        gradientStartColor="#EC4899"
        gradientStopColor="#F472B6"
        startXOffset={8}
        startYOffset={-15}
        endXOffset={-16}
        endYOffset={0}
      />

      {/* Schematic to Plans & Entitlements */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={plansRef}
        duration={2.8}
        delay={2.8}
        gradientStartColor="#10B981"
        gradientStopColor="#34D399"
        startXOffset={12}
        startYOffset={-8}
        endXOffset={-12}
        endYOffset={0}
      />

      {/* Schematic to Metering & Pricing */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={meteringRef}
        duration={2.8}
        delay={2.8}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--primary) / 0.6)"
        startXOffset={12}
        startYOffset={8}
        endXOffset={-12}
        endYOffset={0}
      />

      {/* Schematic to Feature Flags */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={schematicRef}
        toRef={featureFlagsRef}
        duration={2.8}
        delay={2.8}
        gradientStartColor="hsl(var(--muted-foreground))"
        gradientStopColor="hsl(var(--muted-foreground) / 0.6)"
        startXOffset={8}
        startYOffset={15}
        endXOffset={-16}
        endYOffset={0}
      />
    </div>
  );
}