import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <div>
    <footer className="px-6 py-32 md:py-40 bg-background">
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
    </div>
  )
}

