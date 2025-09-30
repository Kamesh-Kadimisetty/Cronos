import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/Navbar'

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />

      {/* Content */}
      <section className="px-6 py-22 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a dummy contact page. Get in touch with our team to learn more about CRONOS.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border rounded-lg bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    rows={2}
                    className="w-full p-3 border rounded-lg bg-background"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4">
              <Card className="p-6 ">
                <h3 className="font-semibold">📧 Email</h3>
                <p className="text-muted-foreground">contact@cronos.ai</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold">📞 Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </Card>
              
              {/* <Card className="p-6">
                <h3 className="font-semibold mb-1">🏢 Office</h3>
                <p className="text-muted-foreground">
                  123 Tech Street<br/>
                  San Francisco, CA 94105<br/>
                  United States
                </p>
              </Card> */}
              
              <Card className="p-6">
                <h3 className="font-semibold">⏰ Business Hours</h3>
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