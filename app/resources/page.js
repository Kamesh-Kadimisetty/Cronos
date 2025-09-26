import { Navbar } from '@/components/Navbar'
export default function ResourcesPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />

      {/* Content */}
      <section className="px-6 py-32 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Resources
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is a dummy resources page. Here you would find documentation, guides, and support materials.
          </p>
          <div className="grid gap-6 md:grid-cols-2 mt-16">
            {[
              { title: 'Documentation', desc: 'Complete API and user documentation' },
              { title: 'Getting Started', desc: 'Quick start guides and tutorials' },
              { title: 'Support Center', desc: 'Help articles and troubleshooting' },
              { title: 'Community', desc: 'Join our community discussions' },
              { title: 'Downloads', desc: 'Software downloads and updates' },
              { title: 'Training', desc: 'Training materials and courses' }
            ].map((resource) => (
              <div key={resource.title} className="p-6 rounded-xl border bg-card/50 text-left">
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
