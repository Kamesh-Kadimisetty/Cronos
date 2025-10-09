'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [expandedPlan, setExpandedPlan] = useState({})

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const togglePlanExpansion = (planId) => {
    setExpandedPlan(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }))
  }

  const faqs = [
    {
      question: "What is included in every plan?",
      answer: "• SDKs for all major platforms\n• 99.99% uptime SLA\n• SOC-2 Compliance\n• Local caching\n• Real-time monitoring"
    },
    {
      question: "What is a camera evaluation?",
      answer: "Camera evaluations occur when you check camera feeds for monitoring, AI analysis, or threat detection to determine security status and generate alerts."
    },
    {
      question: "What counts as a 'monitored site'?",
      answer: "Sites with active surveillance systems and monitoring services that are being tracked for security, compliance, or operational purposes.\n\nExamples:\n• Manufacturing facilities with security systems\n• Office buildings with access control\n• Retail locations with loss prevention\n• Warehouses with inventory monitoring"
    },
    {
      question: "What DOES NOT count as a 'monitored site'?",
      answer: "Examples:\n• Sites without active surveillance systems\n• Locations in setup or testing phase\n• Sites with surveillance but no active monitoring service\n• Temporary or event-based installations"
    },
    {
      question: "What if I have lots of small sites?",
      answer: "That's common in retail and distributed operations. CRONOS helps you maximize efficiency through centralized monitoring, automated alerts, and intelligent scaling. Your cost per site decreases as you grow — so we scale with you, not against you."
    },
    {
      question: "What happens when I exceed my plan limits?",
      answer: "Once you reach your limit, new sites cannot be added to monitoring. We'll notify you in advance and help you upgrade to accommodate your growth."
    },
    {
      question: "Do you charge per user?",
      answer: "Nope. Unlimited users across all plans."
    },
    {
      question: "Can I keep using advanced features in Growth?",
      answer: "Yes — but some will move to add-ons. You only pay for what you need. Most teams don't use everything right away."
    },
    {
      question: "Do I have to upgrade if I grow in camera volume?",
      answer: "No — only if you're monitoring more sites or using advanced AI features that add real value to your operations."
    }
  ]

  return (
    <main className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section  className="px-6 py-32 md:py-30">
        <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Start using CRONOS for free
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Or schedule a personalized demo to learn more
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" showArrow arrowType="up-right">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/register">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-30">
        <div className="mx-auto max-w-7xl">
          {/* Billing Toggle - Top Right */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Billed monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === 'yearly'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Billed yearly
              </button>
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Free Plan */}
            <Card className="relative p-8 bg-card border border-border flex flex-col h-full">
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Drop in billing with a few lines of code
                  </p>
                  <div className="text-3xl font-bold">
                    $0.00<span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-medium">5 Monitored Sites</div>
                      <div className="text-sm text-muted-foreground">
                        Company is in a CRONOS plan that requires an active payment method and is either billed or will be billed depending on usage or trial expiration.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">🔧</span>
                    </div>
                    <div>
                      <div className="font-medium">2 Site Overrides</div>
                      <div className="text-sm text-muted-foreground">
                        Entitle features to sites
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">📡</span>
                    </div>
                    <div>
                      <div className="font-medium">100,000 Events per month</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">🏁</span>
                    </div>
                    <div>
                      <div className="font-medium">Unlimited Cameras</div>
                      <div className="text-sm text-muted-foreground">
                        Ability to create a camera
                      </div>
                    </div>
                  </div>

                  {expandedPlan.free && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Basic RTSP Integration</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Email Alerts</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Community Support</div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => togglePlanExpansion('free')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {expandedPlan.free ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    See all
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full">
                  Choose plan
                </Button>
              </div>
            </Card>

            {/* Growth Plan */}
            <Card className="relative p-8 bg-card border border-border flex flex-col h-full">
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Growth</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Grow your business with CRONOS
                  </p>
                  <div className="text-3xl font-bold">
                    ${billingPeriod === 'monthly' ? '200.00' : '1920.00'}
                    <span className="text-lg font-normal text-muted-foreground">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  Everything in Free, plus
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold">50</span>
                    </div>
                    <div>
                      <div className="font-medium">50 Monitored Sites</div>
                      <div className="text-sm text-muted-foreground">
                        Company is in a CRONOS plan that requires an active payment method and is either billed or will be billed depending on usage or trial expiration.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">🔧</span>
                    </div>
                    <div>
                      <div className="font-medium">20 Site Overrides</div>
                      <div className="text-sm text-muted-foreground">
                        Entitle features to sites
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">📡</span>
                    </div>
                    <div>
                      <div className="font-medium">5,000,000 Events per month</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium">Trials</div>
                    </div>
                  </div>

                  {expandedPlan.growth && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">RTSP & ONVIF Integration</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Slack & Teams Integration</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Advanced AI Components</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Remove CRONOS Branding</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Timed Overrides</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Unlimited Webhooks</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Priority Support (24h)</div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => togglePlanExpansion('growth')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {expandedPlan.growth ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    See all
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full">
                  Choose plan
                </Button>
              </div>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative p-8 bg-card border border-border flex flex-col h-full">
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Support scale and high performance
                  </p>
                  <div className="text-3xl font-bold">
                    Talk to us
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  Everything in Growth, plus
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">∞</span>
                    </div>
                    <div>
                      <div className="font-medium">Unlimited Sites</div>
                      <div className="text-sm text-muted-foreground">
                        Company is in a CRONOS plan that requires an active payment method and is either billed or will be billed depending on usage or trial expiration.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">🔧</span>
                    </div>
                    <div>
                      <div className="font-medium">Unlimited Site Overrides</div>
                      <div className="text-sm text-muted-foreground">
                        Entitle features to sites
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">📡</span>
                    </div>
                    <div>
                      <div className="font-medium">Unlimited Events</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-muted flex items-center justify-center mt-0.5">
                      <span className="text-xs">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium">Unlimited Webhooks</div>
                      <div className="text-sm text-muted-foreground">
                        Subscribe to triggers for when cameras, features, plans, and entitlements are changed.
                      </div>
                    </div>
                  </div>

                  {expandedPlan.enterprise && (
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">All Integrations</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Custom APIs</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Enterprise SSO</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Audit Logs</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">RBAC</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">Dedicated Support (3h SLA)</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm">SLA-backed Uptime</div>
                      </div>
                  </div>
                )}

                  <button
                    onClick={() => togglePlanExpansion('enterprise')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {expandedPlan.enterprise ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    See all
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full">
                  Schedule a demo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 w-1/4"></th>
                  <th className="text-center p-4 w-1/4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Free</h3>
                      <Button size="sm" className="px-4 py-2 text-sm">
                        Sign up
                      </Button>
                    </div>
                  </th>
                  <th className="text-center p-4 w-1/4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Growth</h3>
                      <Button size="sm" className="px-4 py-2 text-sm">
                        Try for free
                      </Button>
                    </div>
                  </th>
                  <th className="text-center p-4 w-1/4">
                    <div className="space-y-3"> 
                      <h3 className="text-xl font-semibold">Enterprise</h3>
                      <Button size="sm" className="px-4 py-2 text-sm" showArrow arrowType="up-right">
                        Contact sales 
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Price</td>
                  <td className="p-4 text-center text-sm font-medium">$0/mo</td>
                  <td className="p-4 text-center text-sm font-medium">${billingPeriod === 'monthly' ? '200' : '1920'}/mo</td>
                  <td className="p-4 text-center text-sm font-medium">Talk to us</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Site Management & Monitoring</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Up to 5 monitored sites</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Up to 50 monitored sites</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Volume pricing bands</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Advanced metering & usage-based monitoring</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Up to 100K events/mo</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Up to 5M events/mo</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Camera Feed Evaluations</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Surveillance Usage Analytics</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Users</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Integrations</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div>RTSP</div>
                      <div>Email</div>
                    </div>
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div>RTSP</div>
                      <div>Email</div>
                      <div>Slack</div>
                      <div>Webhooks</div>
                    </div>
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div>RTSP</div>
                      <div>Email</div>
                      <div>Slack</div>
                      <div>Webhooks</div>
                      <div>Custom APIs</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">AI Components</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Remove CRONOS Branding</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Trials</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Audit log</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Site Overrides</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Up to 2 overrides</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Up to 20 overrides</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Timed Overrides</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Alerts (Webhooks)</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">1 Webhook</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Data Export</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Unlimited</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">RBAC</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Add on</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">Add on</td>
                  <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-muted/10">
                  <td className="p-4 font-medium text-sm">Support</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div>Community</div>
                      <div>Email</div>
                    </div>
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div>Slack Channel</div>
                      <div>24 hour turn around</div>
                    </div>
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div>Dedicated Slack Channel</div>
                      <div>Dedicated Support Engineer</div>
                      <div>3 hour turn around</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/30 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
