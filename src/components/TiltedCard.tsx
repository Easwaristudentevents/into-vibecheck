import React, { useRef, useState } from 'react'

interface TiltedCardProps {
  children: React.ReactNode
  className?: string
  tiltMaxAngle?: number
  scale?: number
}

const TiltedCard: React.FC<TiltedCardProps> = ({ 
  children, 
  className = '', 
  tiltMaxAngle = 15, 
  scale = 1.05 
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateX = ((mouseY - centerY) / rect.height) * -tiltMaxAngle
    const rotateY = ((mouseX - centerX) / rect.width) * tiltMaxAngle

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-300 ease-out transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <div
        className={`transition-all duration-300 ${
          isHovered ? 'shadow-2xl' : 'shadow-lg'
        }`}
        style={{
          transform: 'translateZ(50px)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default TiltedCard
