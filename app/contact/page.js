import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ContactPage() {
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
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a dummy contact page. Get in touch with our team to learn more about CRONOS.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border rounded-lg bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border rounded-lg bg-background"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">📧 Email</h3>
                <p className="text-muted-foreground">contact@cronos.ai</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">📞 Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">🏢 Office</h3>
                <p className="text-muted-foreground">
                  123 Tech Street<br/>
                  San Francisco, CA 94105<br/>
                  United States
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">⏰ Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br/>
                  Saturday - Sunday: Closed
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}