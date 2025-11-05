import { useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'details', label: 'Details' },
  { id: 'events', label: 'Events' },
  { id: 'venue', label: 'Venue & Travel' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-[#B71C1C]">A</span>
            <span className="mx-1">♥</span>
            <span className="text-[#1B5E20]">S</span>
          </div>
          <div className="hidden sm:block text-sm text-neutral-600">Ashlesha & Sudheer</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#B71C1C] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-200 text-neutral-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-left py-2 text-neutral-700 hover:text-[#B71C1C]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
