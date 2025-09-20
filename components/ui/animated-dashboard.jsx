"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AnimatedDashboard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const workflowCards = [
    {
      id: 1,
      title: "Build multi-step agents calling custom tools",
      description: "Create intelligent systems that monitor your construction site in real-time. Integrate any sensor, camera, drone feed, or data source as easily as drag-and-drop. Our AI agents continuously analyze visual data, track progress against schedules, and automatically generate actionable insights for your team."
    },
    {
      id: 2,
      title: "Chat with your own data",
      description: "Use voice commands, mobile apps, or our embedded chat interface to get accurate insights from your site data, create tasks, and complete workflows. Ask questions in natural language and get instant responses based on real-time site conditions, historical data, and predictive analytics and many other things."
    },
    {
      id: 3,
      title: "Self-host everything – including AI models",
      description: "Protect your construction data by deploying on-premises or in your private cloud. Maintain complete control over your site intelligence with enterprise-grade security, custom AI models, and full data sovereignty. Scale from single sites to enterprise-wide deployments and many other things and more ." 
    }
  ];

  const WorkflowCard = ({ card, index }) => (
    <div
      className="w-full h-full"
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Card className={cn(
        "relative overflow-hidden backdrop-blur-xl bg-background/80 border-border/50 shadow-lg transition-all duration-300 h-full flex flex-col",
        hoveredCard === card.id && "shadow-xl bg-background/90"
      )}>
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-400/10"
          animate={{
            opacity: hoveredCard === card.id ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative p-8 flex flex-col h-full text-center">
          <h3 className="text-xl font-semibold leading-tight mb-4">{card.title}</h3>
          <p className="text-neutral-400 leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-emerald-400/20 opacity-0 pointer-events-none"
          animate={{
            opacity: hoveredCard === card.id ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </div>
  );

  const ConnectionLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Animated connection lines connecting the cards */}
      <motion.path
        d="M 300 200 Q 500 150 700 250"
        stroke="url(#connectionGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.path
        d="M 200 350 Q 400 300 600 400"
        stroke="url(#connectionGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.path
        d="M 400 180 Q 450 300 500 420"
        stroke="url(#connectionGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </svg>
  );

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl">
      
      {/* Connection lines */}
      <ConnectionLines />
      
      {/* Floating particles - Fixed positions to avoid hydration errors */}
      {[
        { left: '10%', top: '20%' },
        { left: '25%', top: '60%' },
        { left: '40%', top: '15%' },
        { left: '60%', top: '75%' },
        { left: '75%', top: '30%' },
        { left: '85%', top: '50%' },
        { left: '15%', top: '80%' },
        { left: '90%', top: '10%' }
      ].map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          animate={{
            x: [0, 50, 100, 75, 0],
            y: [0, -25, 25, -15, 0],
            opacity: [0, 1, 0.5, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: position.left,
            top: position.top,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative h-full">
        {/* Header */}
        <div className="relative pt-8 pb-6 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            The fast way to actually
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
            get AI working in your construction site
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="relative pb-8 px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto auto-rows-fr">
            {workflowCards.map((card, index) => (
              <WorkflowCard
                key={card.id}
                card={card}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
