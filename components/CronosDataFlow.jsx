"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { 
  Camera, 
  Database, 
  Brain, 
  Shield, 
  Smartphone,
  MonitorSpeaker,
  Cpu
} from "lucide-react";

const Circle = React.forwardRef(function Circle(
  { className, children, size = "default" }, 
  ref
) {
  const sizeClasses = {
    default: "size-12",
    large: "size-16",
    small: "size-10"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 bg-background p-3 shadow-lg ring-1 ring-border/20",
        sizeClasses[size],
        className,
      )}
    >
      <div className="flex items-center justify-center [&>svg]:w-full [&>svg]:h-full text-foreground">
        {children}
      </div>
    </div>
  );
});

Circle.displayName = "Circle";

export function CronosDataFlow({ className }) {
  const containerRef = useRef(null);
  
  // Input sources
  const cameraRef = useRef(null);
  const sensorsRef = useRef(null);
  const mobileRef = useRef(null);
  const documentsRef = useRef(null);
  
  // Central processing
  const cronosRef = useRef(null);
  
  // Output destinations
  const dashboardRef = useRef(null);
  const alertsRef = useRef(null);
  const analyticsRef = useRef(null);

  return (
    <div className="w-full py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          How CRONOS Works
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          CRONOS fuses inputs from cameras, sensors, documents, and mobile devices to generate 
          live site intelligence and route actions to the right people.
        </p>
      </div>

      {/* Animated Flow Diagram */}
      <div
        className={cn(
          "relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border/50 shadow-xl",
          className,
        )}
        ref={containerRef}
      >
        {/* Input Sources (Left Side) */}
        <div className="absolute left-8 md:left-16 flex flex-col justify-center gap-8">
          <Circle ref={cameraRef} className="bg-blue-500/10 border-blue-500/30">
            <Camera className="w-6 h-6 text-blue-600" />
          </Circle>
          <Circle ref={sensorsRef} className="bg-purple-500/10 border-purple-500/30">
            <Cpu className="w-6 h-6 text-purple-600" />
          </Circle>
          <Circle ref={mobileRef} className="bg-green-500/10 border-green-500/30">
            <Smartphone className="w-6 h-6 text-green-600" />
          </Circle>
          <Circle ref={documentsRef} className="bg-orange-500/10 border-orange-500/30">
            <Database className="w-6 h-6 text-orange-600" />
          </Circle>
        </div>

        {/* Central CRONOS Hub */}
        <div className="flex items-center justify-center">
          <Circle 
            ref={cronosRef} 
            size="large" 
            className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 shadow-2xl"
          >
            <div className="flex items-center justify-center">
              <Brain className="w-8 h-8 text-emerald-600" />
            </div>
          </Circle>
        </div>

        {/* Output Destinations (Right Side) */}
        <div className="absolute right-8 md:right-16 flex flex-col justify-center gap-8">
          <Circle ref={dashboardRef} className="bg-indigo-500/10 border-indigo-500/30">
            <MonitorSpeaker className="w-6 h-6 text-indigo-600" />
          </Circle>
          <Circle ref={alertsRef} className="bg-red-500/10 border-red-500/30">
            <Shield className="w-6 h-6 text-red-600" />
          </Circle>
          <Circle ref={analyticsRef} className="bg-yellow-500/10 border-yellow-500/30">
            <Database className="w-6 h-6 text-yellow-600" />
          </Circle>
        </div>

        {/* Input Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={cameraRef}
          toRef={cronosRef}
          duration={3}
          className="stroke-blue-500/60"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={sensorsRef}
          toRef={cronosRef}
          duration={3.5}
          className="stroke-purple-500/60"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={mobileRef}
          toRef={cronosRef}
          duration={2.5}
          className="stroke-green-500/60"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={documentsRef}
          toRef={cronosRef}
          duration={4}
          className="stroke-orange-500/60"
        />

        {/* Output Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={cronosRef}
          toRef={dashboardRef}
          duration={3}
          className="stroke-indigo-500/60"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={cronosRef}
          toRef={alertsRef}
          duration={3.5}
          className="stroke-red-500/60"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={cronosRef}
          toRef={analyticsRef}
          duration={2.8}
          className="stroke-yellow-500/60"
        />

        {/* Labels */}
        <div className="absolute left-4 top-4 text-xs font-medium text-muted-foreground">
          Data Sources
        </div>
        <div className="absolute right-4 top-4 text-xs font-medium text-muted-foreground">
          Intelligence Output
        </div>
        
        {/* CRONOS Label */}
        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-12 text-sm font-semibold text-emerald-600">
          CRONOS AI
        </div>
      </div>

      {/* Feature Cards Below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
            <Camera className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Multi-Source Input</h3>
          <p className="text-sm text-muted-foreground">
            Cameras, sensors, documents, and mobile data streams converge into a unified intelligence platform.
          </p>
        </div>
        
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
            <Brain className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="font-semibold mb-2">AI Processing</h3>
          <p className="text-sm text-muted-foreground">
            Advanced AI analyzes patterns, detects anomalies, and generates actionable insights in real-time.
          </p>
        </div>
        
        <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
            <Shield className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold mb-2">Intelligent Actions</h3>
          <p className="text-sm text-muted-foreground">
            Automated alerts, dashboard updates, and analytics reports delivered to the right people at the right time.
          </p>
        </div>
      </div>
    </div>
  );
}
