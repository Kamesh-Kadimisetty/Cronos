'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection, RevealText } from '@/components/ui/scroll-animation'

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What is CRONOS AI-powered site intelligence?",
      answer: "CRONOS is an advanced AI platform that provides real-time visual cognition, data fusion, and intelligent automation for any site, operation, or environment where progress must be tracked, validated, and executed. It combines computer vision, machine learning, and IoT integration to deliver comprehensive site intelligence."
    },
    {
      question: "How does CRONOS integrate with existing security systems?",
      answer: "CRONOS seamlessly integrates with your existing camera networks, access control systems, and IoT devices through our comprehensive API and SDK suite. We support all major camera brands and security protocols, ensuring minimal disruption to your current infrastructure while maximizing intelligence capabilities."
    },
    {
      question: "What types of sites can benefit from CRONOS monitoring?",
      answer: "CRONOS is designed for diverse environments including construction sites, manufacturing facilities, retail locations, warehouses, office buildings, and any location requiring intelligent monitoring. Our AI adapts to different operational contexts and can be customized for specific industry requirements."
    },
    {
      question: "How secure is CRONOS data processing and storage?",
      answer: "CRONOS maintains enterprise-grade security with SOC II Type 2 certification, ISO 27001 compliance, and GDPR compliance. All data is encrypted in transit and at rest, with options for on-premises deployment and hybrid cloud solutions to meet your specific security requirements."
    },
    {
      question: "What kind of support and training is provided?",
      answer: "We provide comprehensive onboarding, dedicated Slack support channels, extensive documentation, and custom training programs. Our team works closely with you during implementation and provides ongoing support to ensure optimal performance and ROI from your CRONOS deployment."
    }
  ]

  return (
    <AnimatedSection variant="fadeInUp" className="px-6 py-32 md:py-40 bg-gradient-to-br from-background to-muted/20">
      <div className="mx-auto max-w-7xl">
        {/* Centered FAQ Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-lg font-medium text-primary">FAQ's</span>
          </div>
        </div>

        <div className="sticky top-32">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Left: Heading */}
            <AnimatedSection variant="fadeInLeft" delay={200}>
              <div className="text-center lg:text-left">
                <RevealText>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                    {/* We simulated what questions you need answering */}
                    Frequently Asked <br /> Questions
                  </h2>
                </RevealText>
                <p className="text-lg text-muted-foreground mb-2">
                  {/* Explore quick solutions to common questions. */}
                  Explore quick solutions to common questions.
                </p>
                <p className="text-muted-foreground">
                  Need more? Feel free to contact our{' '}
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium transition-colors"
                  >
                    support team
                  </a>
                  .
                </p>
              </div>
            </AnimatedSection>

            {/* Right: FAQ Items */}
            <AnimatedSection variant="fadeInRight" delay={400} className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="group border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center transition-all duration-300"
                  >
                    <h3 className="font-semibold text-lg pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-all duration-300 ${
                        openFaq === index ? 'rotate-180 text-primary' : 'group-hover:text-foreground'
                      }`} 
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 pt-0">
                      <div className="text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
