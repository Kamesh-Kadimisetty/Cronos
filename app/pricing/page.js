import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/Navbar'

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />

      {/* Content */}
      <section className="px-6 py-32 md:py-10">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Pricing
          </h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            This is a dummy pricing page. Choose the plan that fits your site intelligence needs.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {[
              {
                name: 'Starter',
                price: '$99',
                period: '/month',
                features: ['Up to 10 cameras', 'Basic surveillance', 'Email alerts', 'Standard support']
              },
              {
                name: 'Professional',
                price: '$299',
                period: '/month',
                features: ['Up to 50 cameras', 'AI threat detection', 'Real-time alerts', 'Priority support', 'Advanced analytics'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: ['Unlimited cameras', 'Full AI suite', 'Custom integrations', '24/7 support', 'On-premise deployment']
              }
            ].map((plan) => (
              <Card key={plan.name} className={`p-8 text-left relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
