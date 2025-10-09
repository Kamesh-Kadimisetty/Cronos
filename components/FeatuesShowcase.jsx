import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection, StaggeredContainer, StaggeredItem, AnimatedCard } from '@/components/ui/scroll-animation'
import {
  Video,
  MapPin,
  ScanEye,
  Binoculars,
  Bot
} from "lucide-react";
// Features Showcase Component
export function FeaturesShowcase() {
    const [activeFeature, setActiveFeature] = useState(0)
  
    const features = [
      {
        id: 'live-surveillance',
        title: 'Live Surveillance',
        icon: Binoculars,
        image: '/live_surveiliance.png',
        description: 'Multi-camera monitoring with intelligent layouts',
        details: {
          overview: 'Real-time monitoring system for simultaneous multi-camera feed management with intelligent layout optimization.',
          keyFeatures: [
            'Custom surveillance layouts with flexible camera arrangements',
            'Optimized 2x2 and 3x3 grid views for enhanced visibility',
            'Live RTSP streaming with AI-processed video feeds',
            'Immersive fullscreen monitoring experience',
            'Zone-based camera organization for streamlined operations'
          ]
        }
      },
      {
        id: 'sites',
        title: 'Sites',
        icon: MapPin,
        image: '/sites.png',
        description: 'Smart site organization with security hierarchy',
        details: {
          overview: 'Structured site management system organizing security infrastructure: Organization → Sites → Zones → Cameras.',
          keyFeatures: [
            'Complete site lifecycle management with CRUD operations',
            'Multi-industry support: Manufacturing, Office, Retail, Warehouse',
            'Configurable security levels from Low to Critical',
            'Integrated project management with budget tracking',
            'Geographic location mapping and organization tools'
          ]
        }
      },
      {
        id: 'ai-monitoring',
        title: 'AI Monitoring',
        icon: ScanEye,
        image: '/ai_monitoring.png',
        description: 'Intelligent threat detection with real-time alerts',
        details: {
          overview: 'AI-powered monitoring system analyzing camera feeds in real-time to identify security incidents and suspicious behavior.',
          keyFeatures: [
            'Computer vision-based intelligent threat detection',
            'Instant security incident notifications and alerts',
            'Seamless integration with live surveillance feeds',
            'Comprehensive threat analysis and reporting dashboard',
            'Customizable detection sensitivity and alert criteria'
          ]
        }
      },
      {
        id: 'ai-agents',
        title: 'AI Agents',
        icon: Bot,
        image: '/camera_network.png',
        description: 'End-to-end AI agent deployment and management',
        details: {
          overview: 'Comprehensive AI agent management system handling deployment, monitoring, and maintenance across your entire network.',
          keyFeatures: [
            'Full AI agent lifecycle management and monitoring',
            'Network configuration with secure authentication support',
            'Support for Fixed, PTZ, Dome, Bullet, and specialized agents',
            'Complete hardware tracking with manufacturer details',
            'Real-time online/offline status monitoring and alerts',
            'Advanced filtering by name, model, location, and status'
          ]
        }
      }
    ]
  
    return (
      <div className="mx-auto max-w-6xl px-6">
        {/* Feature Tabs - Schematic Style */}
        <div className="relative mb-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/30 rounded-2xl border border-border/40 backdrop-blur-sm max-w-8xl mx-auto">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-emerald-500/10 border-emerald-500/30 shadow-lg scale-105'
                    : 'bg-card/50 border-border/50 hover:bg-card/80 hover:border-border/80'
                }`}
              >
                <div className={`w-5 h-5 ${activeFeature === index ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                  {React.createElement(feature.icon)}
                </div>
                <span className="whitespace-nowrap">{feature.title}</span>
                {activeFeature === index && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 -z-10" />
                )}
              </button>
            ))}
          </div>
        </div>
  
        {/* Feature Content - Enhanced Layout */}
        <AnimatedSection variant="fadeInUp" delay={300} className="relative">
          <AnimatedCard className="p-4 md:p-6 lg:p-8 bg-gradient-to-br rounded-xl from-background/70 to-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-0 ring-1 ring-border/50" hoverScale={1}>
            <div className="grid gap-8 lg:gap-16 xl:gap-10 lg:grid-cols-[1fr_1.5fr] items-start">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-6 h-6 text-emerald-600">
                      {React.createElement(features[activeFeature].icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {features[activeFeature].details.overview}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                  <ul className="space-y-3">
                    {features[activeFeature].details.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 mt-2" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button size="sm" className="flex-1 min-w-[120px]" showArrow arrowType="up-right">
                    Learn More
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 min-w-[120px]"  showArrow arrowType="up-right">
                    View Demo
                  </Button>
                </div>
              </div>

              {/* Right: Feature Image */}
              <div className="space-y-8">
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-muted/30 shadow-lg">
                  <div className="aspect-[6/5] relative">
                    <Image
                      src={features[activeFeature].image}
                      alt={`${features[activeFeature].title} Dashboard`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                  
                  {/* Image Overlay */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="text-sm font-medium text-foreground">
                      {features[activeFeature].title} Interface
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Real-time dashboard preview
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </AnimatedSection>
      </div>
    )
  }