'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const featuresItems = [
    { 
      title: 'Visual AI Intelligence', 
      description: 'Computer vision for real-time site monitoring and analysis',
      icon: '👁️',
      href: '/features#visual-ai',
      badge: 'Popular'

    },
    { 
      title: 'Smart Alerts & Notifications', 
      description: 'AI-powered alerts routed to the right people at the right time',
      icon: '🚨',
      href: '/features#alerts'
    },
    { 
      title: 'Enterprise Security', 
      description: 'End-to-end encryption with full audit trails',
      icon: '🔒',
      href: '/features#security'
    },
    { 
      title: 'Custom Integrations', 
      description: 'Connect with your existing tools and workflows',
      icon: '⚡',
      href: '/features#integrations',
    }
  ]

  // Handle dropdown interactions
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown('features')
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to prevent flickering
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 px-4 py-4 bg-transparent backdrop-blur-md border-b border-border/40">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/cronos_logo.png"
              alt="Cronos"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="font-semibold">CRONOS</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {/* Features Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`hover:text-foreground flex items-center gap-1 transition-colors py-2 px-1 ${
                isActive('/features') ? 'text-foreground font-medium' : ''
              }`}
              onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
            >
              Features
              <svg 
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeDropdown === 'features' ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeDropdown === 'features' && (
              <div className="absolute top-full left-0 mt-1 w-96 bg-background/98 backdrop-blur-md border border-border/60 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-4 py-3 border-b border-border/40 bg-muted/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">Platform Features</h3>
                    <Link 
                      href="/features"
                      className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      View all →
                    </Link>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="p-2">
                  {featuresItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-sm group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="px-4 py-3 border-t border-border/40 bg-muted/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Need help choosing?</span>
                    <Link 
                      href="/contact"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Contact sales
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/resources" 
            className={`hover:text-foreground transition-colors ${
              isActive('/resources') ? 'text-foreground font-medium' : ''
            }`}
          >
            Resources
          </Link>              
          <Link 
            href="/pricing" 
            className={`hover:text-foreground transition-colors ${
              isActive('/pricing') ? 'text-foreground font-medium' : ''
            }`}
          >
            Pricing
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-foreground transition-colors ${
              isActive('/contact') ? 'text-foreground font-medium' : ''
            }`}
          >
            Contact
          </Link>
          <Link href="/login" className="hover:text-foreground transition-colors">
            Log in
          </Link>
          <Button asChild size="sm">
            <Link href="/register">Sign up</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-muted/50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="/features" 
              className={`block py-2 text-sm transition-colors ${
                isActive('/features') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/resources" 
              className={`block py-2 text-sm transition-colors ${
                isActive('/resources') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/pricing" 
              className={`block py-2 text-sm transition-colors ${
                isActive('/pricing') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 text-sm transition-colors ${
                isActive('/contact') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-border/40 space-y-3">
              <Link 
                href="/login" 
                className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Button asChild size="sm" className="w-full">
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
