import { useState, useEffect } from 'react'
import { Calendar, Menu, X } from 'lucide-react'

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false)
          setIsMobileMenuOpen(false) // Close mobile menu when scrolling
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
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <>
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-black hover:text-blue-600 transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sliding Menu */}
      <div className={`fixed top-20 right-4 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-4 min-w-[200px]">
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-white/10 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-white/10 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('goals')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-white/10 text-left"
            >
              Goals
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-white/10 text-left"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-black font-medium hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-white/10 text-left"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar
