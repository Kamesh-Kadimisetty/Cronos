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
            <div className="grid grid-cols-2 gap-18 max-w-md mx-auto lg:mx-0">
              {/* SOC II Type 2 Badge */}
              <div className="group">
                <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">SOC II TYPE 2</div>
                      <div className="text-xs text-muted-foreground font-medium">CERTIFIED</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ISO 27001 Badge */}
              <div className="group">
                <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border-2 border-green-600 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">ISO 27001</div>
                      <div className="text-xs text-muted-foreground font-medium">CERTIFIED</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GDPR Compliant Badge */}
              <div className="group col-span-2">
                <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center relative">
                          {/* EU Stars */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-0.5 h-0.5 bg-purple-600 rounded-full"
                                style={{
                                  transform: `rotate(${i * 30}deg) translateY(-8px)`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">GDPR</div>
                      <div className="text-xs text-muted-foreground font-medium">COMPLIANT</div>
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
