import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 py-4 bg-transparent backdrop-blur-md border-b border-border/40">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold">CRONOS</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Features
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is a dummy features page. Here you would showcase all the detailed features of CRONOS platform.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {[
              'Live Surveillance',
              'Site Management', 
              'Threat Detection',
              'Camera Network',
              'AI Analytics',
              'Real-time Alerts'
            ].map((feature) => (
              <div key={feature} className="p-6 rounded-xl border bg-card/50">
                <h3 className="font-semibold mb-2">{feature}</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed information about {feature.toLowerCase()} capabilities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
