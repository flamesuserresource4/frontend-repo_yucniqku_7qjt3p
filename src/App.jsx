import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="text-[#1C1C1C] bg-white">
      <Navbar />
      <Hero />
      <Countdown />
      <MainContent />
    </div>
  )
}

export default App
