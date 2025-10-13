import { AnimatedSection, StaggeredContainer, StaggeredItem as AnimatedStaggeredItem, RevealText, AnimatedCard, FloatingElement } from '@/components/ui/scroll-animation'
import { Globe } from '@/components/ui/globe'
export function GlobeMontioring() {
  return (
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
  );
}