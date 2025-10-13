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
import { HeroSection } from '@/components/HeroSection'
import { GlobeMontioring } from '@/components/GlobeMontioring'
import { Flow } from '@/components/Flow'
export default function LandingPage() {

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      {/* <Flow /> */}
      {/* Hero */}
      <HeroSection />

      {/* Global Monitoring Section */}
      <GlobeMontioring />


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

      <Flow />

      {/* Enterprise Security Section */}
      <EnterpriseSecuritySection />
    
{/* 
      <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <CronosDataFlow />
        </div>
      </AnimatedSection> */}

      

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
