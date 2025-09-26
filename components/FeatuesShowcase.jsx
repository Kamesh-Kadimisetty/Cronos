import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedSection, StaggeredContainer, StaggeredItem, AnimatedCard } from '@/components/ui/scroll-animation'

// Features Showcase Component
export function FeaturesShowcase() {
    const [activeFeature, setActiveFeature] = useState(0)
  
    const features = [
      {
        id: 'live-surveillance',
        title: 'Live Surveillance',
        icon: '📹',
        description: 'Real-time monitoring system with multi-camera feeds',
        details: {
          overview: 'Comprehensive real-time monitoring system that allows users to view and manage multiple camera feeds simultaneously.',
          keyFeatures: [
            'Multi-Layout Support: Custom surveillance layouts with different camera arrangements',
            'Grid Views: 2x2 and 3x3 grid layouts for optimal viewing',
            'Real-time Streaming: Live RTSP stream integration with processed video feeds',
            'Camera Status Monitoring: Real-time status indicators (Online/Offline/Disabled)',
            'Fullscreen Mode: Immersive monitoring experience',
            'Zone-based Organization: Cameras grouped by zones for better organization'
          ],
          benefits: 'Monitor your entire site infrastructure from a single dashboard with intelligent layout management and real-time status updates.'
        }
      },
      {
        id: 'sites',
        title: 'Sites',
        icon: '🏢',
        description: 'Hierarchical site management and organization',
        details: {
          overview: 'A hierarchical site management system that organizes security infrastructure into a structured hierarchy: Organization → Sites → Subprojects → Zones → Cameras.',
          keyFeatures: [
            'Site Creation & Management: Complete CRUD operations for security sites',
            'Site Types: Manufacturing, Office, Retail, Warehouse, and more',
            'Security Levels: Configurable levels (Low, Medium, High, Critical)',
            'Project Management: Integrated project manager assignment and budget tracking',
            'Location Management: Geographic location tracking and organization',
            'Hierarchical Navigation: Collapsible sidebar with breadcrumb navigation'
          ],
          benefits: 'Organize complex site infrastructures with clear hierarchies, making it easy to manage large-scale deployments across multiple locations.'
        }
      },
      {
        id: 'threat-detection',
        title: 'Threat Detection',
        icon: '🚨',
        description: 'AI-powered threat detection and alerts',
        details: {
          overview: 'Advanced AI-powered threat detection system that analyzes camera feeds in real-time to identify potential security incidents and suspicious behavior.',
          keyFeatures: [
            'AI-Powered Analytics: Intelligent threat detection using computer vision',
            'Real-time Alerts: Instant notifications for security incidents',
            'Pattern Recognition: Advanced algorithms to identify suspicious behavior',
            'Integration with Live Surveillance: Seamless connection with camera feeds',
            'Security Analytics Dashboard: Comprehensive threat analysis and reporting',
            'Customizable Alert Rules: Configure detection sensitivity and alert criteria'
          ],
          benefits: 'Proactively identify and respond to security threats with AI-powered analysis that never sleeps, reducing response times and improving overall security.'
        }
      },
      {
        id: 'camera-network',
        title: 'Camera Network',
        icon: '📷',
        description: 'Complete camera infrastructure management',
        details: {
          overview: 'Comprehensive camera infrastructure management system that handles all aspects of camera deployment, monitoring, and maintenance across your entire network.',
          keyFeatures: [
            'Complete Camera Lifecycle: Add, edit, delete, and monitor cameras',
            'Network Configuration: RTSP URL setup with authentication support',
            'Hardware Tracking: Manufacturer, model, serial numbers, and MAC addresses',
            'Camera Types: Fixed, PTZ, Dome, Bullet, and specialized cameras',
            'Status Monitoring: Real-time online/offline status tracking',
            'Advanced Search: Filter by name, model, location, IP address, and status'
          ],
          benefits: 'Manage your entire camera infrastructure from a centralized platform with detailed hardware tracking, network configuration, and health monitoring.'
        }
      }
    ]
  
    return (
      <div className="w-full">
        {/* Feature Tabs */}
        <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => (
            <StaggeredItem key={feature.id}>
              <button
                onClick={() => setActiveFeature(index)}
                className={`relative p-4 rounded-xl border transition-all duration-300 text-left w-full ${
                  activeFeature === index
                    ? 'bg-primary/10 border-primary/30 shadow-lg scale-105'
                    : 'bg-card/50 border-border/50 hover:bg-card/80 hover:border-border/80'
                }`}
              >
              <div className="flex flex-col items-center text-center gap-2">
                <div>
                  <h2 className={`font-semibold text-2xl md:text-sm ${
                    activeFeature === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {feature.title}
                  </h2>
                </div>
              </div>
                {activeFeature === index && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                )}
              </button>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
  
        {/* Feature Content */}
        <AnimatedSection variant="fadeInUp" delay={300} className="relative">
          <AnimatedCard className="p-8 md:p-12 bg-gradient-to-br from-background/70 to-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-0 ring-1 ring-border/50 shadow-xl" hoverScale={1.01}>
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{features[activeFeature].icon}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>
  
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {features[activeFeature].details.overview}
                  </p>
                </div>
  
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Features</h4>
                  <ul className="space-y-3">
                    {features[activeFeature].details.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              {/* Right: Benefits */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Benefits</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {features[activeFeature].details.benefits}
                  </p>
                </div>
  
                {/* Visual representation */}
                <div className="relative h-48 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {features[activeFeature].icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm font-medium">
                      {features[activeFeature].title} Dashboard
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Interactive preview coming soon
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Demo
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </AnimatedSection>
      </div>
    )
  }
  