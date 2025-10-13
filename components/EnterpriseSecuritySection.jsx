'use client'
import { Button } from '@/components/ui/button'
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/ui/scroll-animation'
import { Shield, Handshake, TrendingUp } from 'lucide-react'

export function EnterpriseSecuritySection() {
  return (
    <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left: Content */}
          <AnimatedSection variant="fadeInLeft" delay={200} className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Enterprise-level security, keep your data private.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-2">
              Enterprise-grade infrastructure you can count on, built for uptime and 
              scale. Get direct, dedicated support from our team whenever you need it.
            </p>
        
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" showArrow arrowType="up-right">
                  GET EARLY ACCESS
              </Button>
              <Button variant="outline" size="lg" showArrow arrowType="up-right" >
                BOOK A DEMO
              </Button>
              <p className="text-sm text-muted-foreground mb-1">
                *Get started in minutes*
              </p>
            </div>
            

            <StaggeredContainer className="space-y-6">
              <StaggeredItem className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Robust & Reliable</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade infrastructure you can count on, built for uptime and 
                    scale.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Seamless Support</h3>
                  <p className="text-muted-foreground">
                    Get direct, dedicated Slack support from our team whenever you need it.
                  </p>
                </div>
              </StaggeredItem>

              <StaggeredItem className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Scalable Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Easily handle growing workloads with infrastructure designed to scale 
                    effortlessly.
                  </p>
                </div>
              </StaggeredItem>
            </StaggeredContainer>
          </AnimatedSection>

          {/* Right: Security Badges */}
          <section className="relative h-[500px] w-full">
            {/* Grid Pattern Background - Left Side */}
            <div className="absolute left-0 top-1/8 -translate-y-1/4 w-180 h-160 opacity-20 -z-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '16px 16px'
              }} />
            </div>
            <div className="flex flex-col gap-6 max-w-xs mx-auto lg:mx-0 lg:ml-auto lg:mr-0">
              <div className="flex gap-6">
                {/* SOC II Type 2 Badge */}
                <div className="group flex-1">
                  <div className="relative p-6 rounded-2xl border-2 border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:border-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ring-1 ring-border/20 hover:ring-primary/30">
                    {/* Corner Dots */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-border rounded-full"></div>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 flex items-center justify-center p-1">
                        <img 
                          src="/soc2.jpeg" 
                          alt="SOC II Type 2 Certified" 
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-wide">SOC II TYPE 2</div>
                        <div className="text-xs text-muted-foreground font-medium">CERTIFIED</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ISO 27001 Badge */}
                <div className="group flex-1">
                  <div className="relative p-6 rounded-2xl border-2 border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:border-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ring-1 ring-border/20 hover:ring-primary/30">
                    {/* Corner Dots */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-border rounded-full"></div>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 flex items-center justify-center p-1">
                        <img 
                          src="/iso.png" 
                          alt="ISO 27001 Certified" 
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-wide">ISO 27001</div>
                        <div className="text-xs text-muted-foreground font-medium">CERTIFIED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GDPR Compliant Badge - Below ISO */}
              <div className="flex justify-end">
                <div className="group w-1/2">
                  <div className="relative p-6 rounded-2xl border-2 border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:border-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ring-1 ring-border/20 hover:ring-primary/30">
                    {/* Corner Dots */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute top-2 right-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-border rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-border rounded-full"></div>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 flex items-center justify-center p-1">
                        <img 
                          src="/gdpr.png" 
                          alt="GDPR Compliant" 
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-wide">GDPR</div>
                        <div className="text-xs text-muted-foreground font-medium">COMPLIANT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AnimatedSection>
  )
}
