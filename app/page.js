'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BentoDemo } from '@/components/BentoDemo'
import { AnimatedBeamMultipleOutputDemo } from '@/components/AnimatedBeam'
import { CronosDataFlow } from '@/components/CronosDataFlow'
import { WordByWordReveal, TextReveal, StaggeredTextReveal, StaggeredItem } from '@/components/ui/text-reveal'
import { ProcessSteps } from '@/components/ui/process-steps'
import { AnimatedDashboard } from '@/components/ui/animated-dashboard'
import { Globe } from '@/components/ui/globe'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { FeaturesShowcase } from '@/components/FeatuesShowcase'
import { Navbar } from '@/components/Navbar'
import { AnimatedSection, StaggeredContainer, StaggeredItem as AnimatedStaggeredItem, RevealText, AnimatedCard, FloatingElement } from '@/components/ui/scroll-animation'
import { Footer } from '@/components/Footer'
import { EnterpriseSecuritySection } from '@/components/EnterpriseSecuritySection'
import { Workflow } from '@/components/Workflow'

export default function LandingPage() {

  return (
    <main className="min-h-screen w-full">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate px-6 py-32 md:py-40 lg:py-40">
        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 size-[28rem] rounded-full bg-primary/15 blur-3xl animate-blob" />
          <div className="absolute top-20 -right-10 size-[22rem] rounded-full bg-emerald-400/10 blur-3xl animate-blob-fast animation-delay-2000" />
          <div className="absolute -bottom-24 left-1/3 size-[26rem] rounded-full bg-primary/10 blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start text-left gap-6">
            <WordByWordReveal 
              text="AI-Powered Progress Intelligence for the Physical World"
              className="text-4xl md:text-6xl font-bold tracking-tight"
              delay={0.3}
              staggerDelay={0.08}
            />
            <TextReveal delay={1.2} className="max-w-2xl text-lg text-muted-foreground">
              EonForge CRONOS brings visual cognition, real-world data fusion,
              and intelligent automation to any site, operation, or environment
              where progress must be tracked, validated, and executed.
            </TextReveal>
            <TextReveal delay={1.6} className="flex flex-wrap items-center gap-4">
              <Button asChild showArrow arrowType="up-right">
                <Link href="/register">See it in Action</Link>
              </Button>
              <Button asChild variant="outline" showArrow arrowType="up-right">
                <Link href="#product-intelligence">Book a Demo</Link>
              </Button>
            </TextReveal>
          </div>

          {/* Right: Command Center Dashboard Image */}
          <TextReveal delay={0.6} className="relative animate-float">
            {/* Glow effect background */}
            <div className="absolute -inset-8 -z-10 rounded-[32px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl opacity-60" />
            
            {/* Main image container */}
            <div className="relative group">
              {/* Image wrapper with perfect styling */}
              <div className="relative overflow-hidden rounded-2xl border border-border/20 shadow-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm md:-rotate-1 hover:rotate-0 transition-all duration-700 ease-out">
                {/* Premium border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 p-[1px]">
                  <div className="h-full w-full rounded-2xl bg-background/95 backdrop-blur-md" />
                </div>
                
                {/* Command Center Image */}
                <div className="relative z-10 p-2">
                  <Image
                    src="/command_center.png"
                    alt="CRONOS Command Center - Real-time surveillance intelligence and monitoring overview"
                    width={1600}
                    height={1200}
                    className="w-full h-auto rounded-xl object-cover object-center transition-all duration-500 group-hover:scale-[1.02]"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Premium shimmer effect */}
                <div className="absolute -left-2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Floating status indicator */}
              <div className="absolute -top-2 -right-2 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/30 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-medium text-white">Live</span>
                </div>
              </div>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Global Monitoring Section */}
      <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left: Content */}
            <AnimatedSection variant="fadeInLeft" delay={200} className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  Monitor Sites Across the World
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  CRONOS provides comprehensive site monitoring capabilities across multiple geographic zones. 
                  Whether your operations span continents or focus on specific regions, our platform ensures 
                  consistent oversight and intelligent analysis wherever your sites are located.
                </p>
              </div>
              
              <StaggeredContainer className="space-y-6">
                <AnimatedStaggeredItem className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multi-Zone Coverage</h3>
                    <p className="text-muted-foreground">
                      Deploy monitoring across North America, Europe, Asia-Pacific, and other key regions 
                      to ensure optimal performance and compliance with local regulations.
                    </p>
                  </div>
                </AnimatedStaggeredItem>
                
                <AnimatedStaggeredItem className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Real-Time Intelligence</h3>
                    <p className="text-muted-foreground">
                      Get instant insights from your global operations with AI-powered analysis 
                      that adapts to local conditions and requirements.
                    </p>
                  </div>
                </AnimatedStaggeredItem>
                
                <AnimatedStaggeredItem className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Zone-Specific Monitoring</h3>
                    <p className="text-muted-foreground">
                      Configure monitoring parameters specific to each geographic zone, 
                      accounting for local infrastructure, regulations, and operational needs.
                    </p>
                  </div>
                </AnimatedStaggeredItem>
              </StaggeredContainer>
            </AnimatedSection>
            
            {/* Right: Globe */}
            <section variant="scaleIn" delay={400} className="relative">
              <div className="relative h-[500px] w-full">
                <Globe className="w-full h-full" />
              </div>
            </section>
          </div>
        </div>
      </AnimatedSection>


      {/* Features Section */}
      <AnimatedSection variant="fadeInUp" className="py-32 md:py-40">
        <div className="w-full">
          <RevealText className="mb-4 text-center px-6 lg:px-12 xl:px-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Core Features
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-0.5">
              Discover the powerful capabilities that make CRONOS the ultimate site intelligence platform
            </p>
          </RevealText>
          <AnimatedSection variant="scaleIn" delay={300}>
            <FeaturesShowcase/>
          </AnimatedSection>
        </div>
      </AnimatedSection>


      {/* CRONOS in Action */}
      <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <RevealText className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              CRONOS in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience how CRONOS transforms site operations with real-time intelligence, seamless integrations, and intelligent scheduling.
            </p>
          </RevealText>
          <AnimatedSection variant="slideInUp" delay={300}>
            <BentoDemo />
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <Workflow />

      {/* Enterprise Security Section */}
      <EnterpriseSecuritySection />
    

      <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <CronosDataFlow />
        </div>
      </AnimatedSection>

      

      {/* How CRONOS Works */}
      <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <RevealText className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How CRONOS Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your site intelligence up and running in three simple steps
            </p>
          </RevealText>
          <AnimatedSection variant="slideInUp" delay={300}>
            <ProcessSteps />
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Animated Dashboard Hero */}
      <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection variant="scaleIn" delay={200}>
            <AnimatedDashboard />
          </AnimatedSection>
        </div>
      </AnimatedSection>

          
      {/* CTA Section */}
      <AnimatedSection variant="fadeInUp" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Interactive Grid Background */}
        <InteractiveGridPattern 
          className="absolute inset-0 opacity-30"
          width={60}
          height={60}
          squaresClassName="fill-primary/10 stroke-primary/20 hover:fill-primary/20"
        />
        <div className="relative mx-auto max-w-4xl text-center px-6">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to deploy CRONOS?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Request a personalized{' '}
              <span className="font-semibold text-foreground">live demo</span> of
              how <span className="font-semibold text-foreground">CRONOS</span>{' '}
              can transform your project, site, or operation — regardless of
              industry or size.
            </p>
          </RevealText>
          <AnimatedSection variant="fadeInUp" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact sales</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/register">Get started</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer/>
    </main>
  )
}
