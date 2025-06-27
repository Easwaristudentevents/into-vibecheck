import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg px-8 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black">Vibe-Check</span>
          </div>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-white/10"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-white/10"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('goals')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-white/10"
            >
              Goals
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-white/10"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-white/10"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
