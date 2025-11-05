import { useEffect, useState } from 'react'

function getTimeParts(diffMs) {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000))
  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  // Target: 2025-11-13 21:00:00 IST = 2025-11-13T15:30:00Z
  const target = new Date('2025-11-13T15:30:00Z').getTime()
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = target - now
  const { days, hours, minutes, seconds } = getTimeParts(diff)

  return (
    <section className="bg-[#FFF8F0] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-[#1C1C1C] font-serif"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Countdown to Our Big Day
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[{label:'Days', value: days},{label:'Hours', value: hours},{label:'Minutes', value: minutes},{label:'Seconds', value: seconds}].map((item) => (
            <div key={item.label} className="bg-white rounded-xl border border-neutral-100 shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-[#B71C1C]">{String(item.value).padStart(2,'0')}</div>
              <div className="mt-1 text-sm text-neutral-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
