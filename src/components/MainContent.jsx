import { useState } from 'react'

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>}
    </div>
  )
}

export default function MainContent() {
  return (
    <main className="bg-white">
      <OurStory />
      <WeddingDetails />
      <Events />
      <VenueTravel />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

function OurStory() {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Our Story" />
        <p className="max-w-3xl mx-auto text-center text-neutral-700 leading-relaxed">
          “Every love story is beautiful, and ours feels blessed. What began with a chance meeting grew into shared laughter, deep understanding, and loving support. With the blessings of our families, we look forward to beginning this new chapter together.”
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522673607200-59b39f9a6053?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520975604838-8b15275c2bd3?q=80&w=1887&auto=format&fit=crop',
          ].map((src, i) => (
            <img key={i} src={src} alt="Story" className="w-full h-28 sm:h-32 object-cover rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#FFF8F0] flex items-center justify-center text-[#B71C1C]">
          {icon}
        </div>
        <h4 className="font-medium text-[#1C1C1C]">{title}</h4>
      </div>
      <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>
    </div>
  )
}

function WeddingDetails() {
  return (
    <section id="details" className="py-16 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Wedding Details" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Date" icon={<CalendarIcon />}>Thursday, Nov 13, 2025</Card>
          <Card title="Muhurtham" icon={<ClockIcon />}>9:00 PM</Card>
          <Card title="Venue" icon={<MapPinIcon />}>S Convention Function Hall, Brodipet, Bypass Road, Palakol</Card>
          <Card title="Dress Code" icon={<ShirtIcon />}>Traditional & Festive Ethnic — Sarees, Lehengas, Anarkalis, Sherwani, Dhoti/Kurta. Pastels & Temple Gold accents encouraged.</Card>
          <Card title="Note" icon={<HeartIcon />}>Your presence and blessings are our greatest gifts.</Card>
        </div>
      </div>
    </section>
  )
}

function Events() {
  const items = [
    { title: 'Pellikuthuru & Pellikoḍuku', desc: 'family blessings' },
    { title: 'Vratham & Snathakam', desc: 'sacred preparations' },
    { title: 'Kashi Yatra', desc: 'lighthearted ritual' },
    { title: 'Mandapam Ceremony & Jeelakarra Bellam', desc: 'unity bond' },
    { title: 'Mangalya Dharana & Saptapadi', desc: 'vows before Agni', highlight: true },
    { title: 'Aashirvadham & Reception Feast', desc: 'blessings and celebration' },
  ]
  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Events" subtitle="A compact Telugu tradition timeline" />
        <div className="relative border-l-2 border-[#FFF0E0] pl-6">
          {items.map((it, idx) => (
            <div key={it.title} className="mb-6">
              <div className={`w-3 h-3 rounded-full border-2 ${it.highlight ? 'bg-[#B71C1C] border-[#B71C1C]' : 'bg-white border-[#FFA300]'} absolute -left-1.5 mt-2`} />
              <h5 className="font-medium text-[#1C1C1C]">
                {it.title}
                {it.highlight && (
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] align-middle">Main muhurtham • 9:00 PM</span>
                )}
              </h5>
              <p className="text-sm text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VenueTravel() {
  return (
    <section id="venue" className="py-16 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Venue & Travel" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 text-neutral-700">
            <p className="font-medium">S Convention Function Hall, Brodipet, Bypass Road, Palakol, 534260</p>
            <a href="https://maps.app.goo.gl/b5Rnp2HgFaRCXRNMA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#B71C1C] hover:underline">
              <MapPinIcon /> Open in Google Maps
            </a>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Parking: Beside HOTEL S-INN, ~1 minute walk</li>
              <li>Transportation: Ola/Uber/Auto at S Convention entrance</li>
              <li>Shuttle/Help for Elders: Available; contact below</li>
            </ul>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
            <iframe
              title="Venue Map"
              src="https://www.google.com/maps?q=S%20Convention%20Function%20Hall%20Palakol&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const preWedding = [
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1887&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1887&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975604838-8b15275c2bd3?q=80&w=1887&auto=format&fit=crop',
  ]
  const family = [
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784455-3b8fd3f86a5a?q=80&w=1974&auto=format&fit=crop',
  ]

  const [lightbox, setLightbox] = useState({ open: false, src: '' })

  const Img = ({ src }) => (
    <button onClick={() => setLightbox({ open: true, src })} className="group relative block">
      <img src={src} alt="Gallery" className="w-full h-48 object-cover rounded-xl border border-neutral-200" />
      <span className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[#FFA300] transition" />
    </button>
  )

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Gallery" subtitle="Pre-Wedding • Family Moments" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="font-medium mb-3">Pre-Wedding</h5>
            <div className="grid grid-cols-3 gap-3">
              {preWedding.map((src) => (
                <Img key={src} src={src} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-3">Family Moments</h5>
            <div className="grid grid-cols-3 gap-3">
              {family.map((src) => (
                <Img key={src} src={src} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Optional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {lightbox.open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={() => setLightbox({ open: false, src: '' })}>
          <img src={lightbox.src} alt="Large" className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Contact" subtitle="Reach out for venue, travel, and assistance" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ContactCard name="Manu" phone="9505099789" note="Venue & general coordination" />
          <ContactCard name="Akhilesh" phone="7893013320" note="Travel & guest assistance" />
        </div>
        <p className="text-center mt-6 text-sm text-neutral-600">No RSVPs — your blessings and presence are all we seek.</p>
      </div>
    </section>
  )
}

function ContactCard({ name, phone, note }) {
  const waLink = `https://wa.me/91${phone}`
  const telLink = `tel:+91${phone}`
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-medium text-[#1C1C1C]">{name}</div>
          <div className="text-sm text-neutral-600">{note}</div>
        </div>
        <div className="flex items-center gap-2">
          <a href={telLink} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 text-[#1C1C1C] hover:shadow-md transition-shadow">
            <PhoneIcon /> Call
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#1B5E20] text-white hover:shadow-lg hover:shadow-[#1B5E20]/40 transition-shadow">
            <MessageIcon /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-2xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>A ♥ S</div>
        <div className="text-sm text-neutral-600">“మీ ఆశీర్వాదాలే మా బలం” (Your blessings are our strength.)</div>
      </div>
    </footer>
  )
}

// Simple inline icons to avoid external deps beyond lucide-react certainty
function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
function ShirtIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 3l4 3v5l-4-2v11H8V9L4 11V6l4-3 4 3 4-3z" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92V21a1 1 0 01-1.1 1 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A1 1 0 014 2h4.09a1 1 0 011 .75l1 3.5a1 1 0 01-.27 1L8.5 8.5a16 16 0 006 6l1.25-1.32a1 1 0 011-.27l3.5 1a1 1 0 01.75 1.01z" />
    </svg>
  )
}
function MessageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
    </svg>
  )
}
