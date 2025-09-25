'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BentoDemo } from '@/components/BentoDemo'
import { AnimatedBeamMultipleOutputDemo } from '@/components/AnimatedBeam'
import { WordByWordReveal, TextReveal, StaggeredTextReveal, StaggeredItem } from '@/components/ui/text-reveal'
import { ProcessSteps } from '@/components/ui/process-steps'
import { AnimatedDashboard } from '@/components/ui/animated-dashboard'
import { Globe } from '@/components/ui/globe'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { FeaturesShowcase } from '@/components/FeatuesShowcase'
import { useState } from 'react'

export default function LandingPage() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const productItems = [
    { title: 'Plan', description: 'Set the product direction with projects and initiatives' },
    { title: 'Build', description: 'Make progress with issue tracking and cycle planning' },
    { title: 'New: Product Intelligence', description: 'Auto-apply triage suggestions', badge: 'New' }
  ]

  const resourcesItems = [
    { title: 'Customer requests', description: 'Manage user feedback' },
    { title: 'Insights', description: 'Realtime analytics' },
    { title: 'Linear Asks', description: 'Workplace requests' },
    { title: 'Integrations', description: 'Collaborate across tools' },
    { title: 'Artificial intelligence', description: 'AI-powered workflows' }
  ]

  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 py-4 bg-transparent backdrop-blur-md border-b border-border/40">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/cronos_logo.png"
              alt="Cronos"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="font-semibold">CRONOS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/features" className="hover:text-foreground flex items-center gap-1">
                Features
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl p-4">
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground mb-3">Core Features</div>
                    {productItems.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="block p-3 rounded-md hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary flex items-center gap-2">
                              {item.title}
                              {item.badge && (
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/resources" className="hover:text-foreground">Resources</Link>              
            <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
            <Link href="/login" className="hover:text-foreground">
              Log in
            </Link>
            <Button asChild size="sm">
              <Link href="/register">Sign up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate px-6 py-32 md:py-40 lg:py-24">
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
              <Button asChild>
                <Link href="/register">See it in Action</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#product-intelligence">Request Deployment</Link>
              </Button>
            </TextReveal>
          </div>

          {/* Right: tilted preview panel (Linear-style) */}
          <TextReveal delay={0.6} className="relative animate-float">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
            <Card className="relative overflow-hidden rounded-2xl border-0 ring-1 ring-border/40 shadow-2xl bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:-rotate-2">
              {/* Top bar / breadcrumb */}
              <div className="flex items-center gap-2 px-4 md:px-6 h-12 border-b/50 border-border/40 bg-muted/30">
                <div className="size-2 rounded-full bg-primary" />
                <div className="text-xs text-muted-foreground">CRONOS</div>
                <span className="text-muted-foreground/40">›</span>
                <div className="text-xs">Site Overview</div>
                <div className="ml-auto flex items-center gap-2 text-muted-foreground/60">
                  <div className="size-1.5 rounded-full bg-muted" />
                  <div className="size-1.5 rounded-full bg-muted" />
                  <div className="size-1.5 rounded-full bg-muted" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="size-10 rounded-lg grid place-items-center bg-primary/10 text-primary mb-4">
                  <span className="text-lg">🛰️</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {/* <span className="rounded-md bg-primary/20 text-primary px-2 py-0.5 text-sm font-medium ring-1 ring-primary/30">
                    Real-world progress
                  </span> */}
                  <span className="text-lg md:text-xl font-semibold">
                    Real-world progress
                  </span>
                  <span className="ml-1 rounded-sm bg-emerald-500/20 px-1 text-[10px] leading-4 text-emerald-500">
                    AI
                  </span>
                </div>

                <p className="text-sm md:text-base text-muted-foreground max-w-md">
                  Track, validate, and automate site progress with visual
                  intelligence and real-time data fusion. CRONOS empowers teams
                  to see, understand, and drive execution across any physical
                  environment.
                </p>

                {/* Faux lines */}
                <div className="mt-6 space-y-2">
                  {[
                    'w-5/6 bg-primary/20',
                    'w-2/3 bg-muted/40',
                    'w-4/5 bg-muted/40',
                    'w-5/6 bg-muted/40',
                    'w-2/3 bg-muted/40',
                    'w-4/5 bg-muted/40',
                  ].map((cls, i) => (
                    <div key={i} className={`h-2 rounded ${cls}`} />
                  ))}
                </div>

                {/* Bottom blocks */}
                <div className="mt-6 grid grid-cols-5 gap-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded ${i < 2 ? 'bg-primary/20' : 'bg-muted/40'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
              {/* subtle shimmer */}
              <div className="pointer-events-none absolute -left-1 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            </Card>
          </TextReveal>
        </div>
      </section>

      {/* Global Monitoring Section */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left: Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  Monitor Sites Across the Globe
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  CRONOS provides comprehensive site monitoring capabilities across multiple geographic zones. 
                  Whether your operations span continents or focus on specific regions, our platform ensures 
                  consistent oversight and intelligent analysis wherever your sites are located.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
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
                </div>
                
                <div className="flex items-start gap-4">
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
                </div>
                
                <div className="flex items-start gap-4">
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
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild>
                  <Link href="/register">Start Global Monitoring</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#contact">View Coverage Map</Link>
                </Button>
              </div>
            </div>
            
            {/* Right: Globe */}
            <div className="relative">
              <div className="relative h-[500px] w-full">
                <Globe className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Logos */}
      {/* <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center text-xs uppercase tracking-wide text-muted-foreground mb-6">
            Trusted by modern operations teams
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
            {['Aurora', 'Helix', 'Nimbus', 'Quanta', 'Vector', 'Zenith'].map((name) => (
              <div key={name} className="flex items-center justify-center rounded-md border bg-card py-3 text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Core Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful capabilities that make CRONOS the ultimate site intelligence platform
            </p>
          </div>
          <FeaturesShowcase/>
        </div>
      </section>

      {/* CRONOS in Action */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              CRONOS in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience how CRONOS transforms site operations with real-time intelligence, seamless integrations, and intelligent scheduling.
            </p>
          </div>
          <BentoDemo />
        </div>
      </section>

      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Unified Data → CRONOS Intelligence → Action</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              CRONOS fuses inputs from photos, documents, sensors, ERP, and voice to generate live site insights and route actions to the right people.
            </p>
          </div>
          <AnimatedBeamMultipleOutputDemo className="mt-2" />
        </div>
      </section>
      
      {/* Ripple Section */}
      {/* <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-background/70 to-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 ring-1 ring-border/40 shadow-lg">
            <div className="z-10 text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Experience CRONOS
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch how intelligence ripples through your entire operation
              </p>
            </div>
            <Ripple />
          </div>
        </div>
      </section> */}
      
      {/* How CRONOS Works */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How CRONOS Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your site intelligence up and running in three simple steps
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Animated Dashboard Hero */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl">
          <AnimatedDashboard />
        </div>
      </section>
      
      {/* Why CRONOS? */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Why CRONOS?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Universal Intelligence',
                desc: 'Field intelligence for any scenario where the real world must be understood and driven forward with AI.',
              },
              {
                title: 'Zero Friction',
                desc: 'No forms to fill. Speak, upload photos, or send voice notes. CRONOS handles the rest with structured, auditable action.',
              },
              {
                title: 'Enterprise Ready',
                desc: 'Mobile‑first, offline‑friendly. Full control, encryption, and modular deployment.',
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border-0 ring-1 ring-border/50 bg-gradient-to-br from-background/70 to-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-6 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[radial-gradient(1200px_200px_at_0%_0%,hsl(var(--primary)/0.08),transparent)]" />
                <div className="relative flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/25 shadow-inner">
                    ◆
                  </div>
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact sales</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative px-6 py-32 md:py-40 overflow-hidden">
        {/* Interactive Grid Background */}
        <InteractiveGridPattern 
          className="absolute inset-0 h-full w-full opacity-30"
          width={60}
          height={60}
          squares={[20, 15]}
          squaresClassName="fill-primary/10 stroke-primary/20 hover:fill-primary/20"
        />
        <div className="relative mx-auto max-w-4xl text-center">
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact sales</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/cronos_logo.png"
                  alt="Cronos"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <span className="font-semibold">CRONOS</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#visual-ai" className="hover:text-foreground">
                    Visual AI
                  </Link>
                </li>
                <li>
                  <Link href="#data-fusion" className="hover:text-foreground">
                    Data Fusion
                  </Link>
                </li>
                <li>
                  <Link href="#llm-interface" className="hover:text-foreground">
                    LLM Interface
                  </Link>
                </li>
                <li>
                  <Link href="#alerts" className="hover:text-foreground">
                    Alerts
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#mobile" className="hover:text-foreground">
                    Mobile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#pricing" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#method" className="hover:text-foreground">
                    Method
                  </Link>
                </li>
                <li>
                  <Link href="#integrations" className="hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#changelog" className="hover:text-foreground">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#docs" className="hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-foreground">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#customers" className="hover:text-foreground">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#now" className="hover:text-foreground">
                    Now
                  </Link>
                </li>
                <li>
                  <Link href="#readme" className="hover:text-foreground">
                    README
                  </Link>
                </li>
                <li>
                  <Link href="#quality" className="hover:text-foreground">
                    Quality
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#developers" className="hover:text-foreground">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="#status" className="hover:text-foreground">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#startups" className="hover:text-foreground">
                    Startups
                  </Link>
                </li>
                <li>
                  <Link href="#vulnerability" className="hover:text-foreground">
                    Report vulnerability
                  </Link>
                </li>
                <li>
                  <Link href="#dpa" className="hover:text-foreground">
                    DPA
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="hover:text-foreground">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#twitter" className="hover:text-foreground">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link href="#github" className="hover:text-foreground">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#youtube" className="hover:text-foreground">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
