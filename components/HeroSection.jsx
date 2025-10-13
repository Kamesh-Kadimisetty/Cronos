import { WordByWordReveal, TextReveal, StaggeredTextReveal, StaggeredItem } from '@/components/ui/text-reveal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
export function HeroSection() {
  return (
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
  );
}