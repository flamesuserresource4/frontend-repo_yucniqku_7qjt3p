export default function Hero() {
  const handleScrollDetails = () => {
    const el = document.getElementById('details')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative">
      <div
        className="relative h-[80vh] w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2069&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center text-white">
          <p className="text-sm sm:text-base tracking-wide mb-2 opacity-90">
            “మా వివాహానికి స్వాగతం” (Mā vivāhān̄ki svāgataṁ)
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ashlesha & Sudheer
          </h1>
          <p className="text-lg sm:text-xl mb-6">are getting married</p>

          <div className="space-y-1 text-sm sm:text-base">
            <p>
              <span className="font-semibold text-[#FFA300]">Thursday, November 13, 2025</span> • 9:00 PM (IST)
            </p>
            <p className="opacity-90">
              S Convention Function Hall, Brodipet, Bypass Road, Palakol, 534260
            </p>
          </div>

          <button
            onClick={handleScrollDetails}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B71C1C] text-white px-6 py-3 shadow-md hover:shadow-[#B71C1C]/40 hover:shadow-lg transition-shadow"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
