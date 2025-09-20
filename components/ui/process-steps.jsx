"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Connect Your Site",
      description: "Link cameras, sensors, and data sources to CRONOS intelligence platform.",
      panel: (
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
          <div className="text-green-400 mb-2">$ cronos connect --site construction-alpha</div>
          <div className="text-gray-300 mb-1">✓ Camera feeds connected</div>
          <div className="text-gray-300 mb-1">✓ Sensor network active</div>
          <div className="text-gray-300 mb-1">✓ ERP integration established</div>
          <div className="text-green-400">✓ Site ready for monitoring</div>
        </div>
      )
    },
    {
      number: "2", 
      title: "Deploy AI Agents",
      description: "Launch intelligent monitoring with real-time analysis and automated insights.",
      panel: (
        <div className="bg-gray-900 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
            <span className="text-gray-300 text-sm">Visual Analysis Agent</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
            <span className="text-gray-300 text-sm">Safety Monitor Agent</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
            <span className="text-gray-300 text-sm">Progress Tracker Agent</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Deploy Agents
          </Button>
        </div>
      )
    },
    {
      number: "3",
      title: "Monitor & Act",
      description: "Receive real-time alerts and automated actions to keep your operation running smoothly.",
      panel: (
        <div className="bg-gray-900 rounded-lg p-4 space-y-2">
          <div className="bg-blue-500 text-white p-2 rounded text-sm">
            <div className="font-semibold">Live Dashboard</div>
            <div className="text-xs opacity-90">https://cronos.yoursite.com</div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-gray-300">
              <span>Foundation Progress</span>
              <span className="text-green-400">85% Complete</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Safety Compliance</span>
              <span className="text-green-400">100% Clear</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Material Status</span>
              <span className="text-yellow-400">Delivery Due</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="grid gap-8 lg:gap-12">
      {steps.map((step, index) => (
        <div key={step.number} className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className={cn("space-y-4", index % 2 === 1 && "lg:order-2")}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
          
          {/* Panel */}
          <div className={cn("", index % 2 === 1 && "lg:order-1")}>
            <Card className="p-6 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur border-border/50">
              {step.panel}
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
