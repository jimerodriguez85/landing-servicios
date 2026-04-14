import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 40

export default function Particles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      const size = Math.random() * 4 + 1
      const colors = ['#ff2d9b', '#00f0ff', '#b026ff', '#39ff14']
      const color = colors[Math.floor(Math.random() * colors.length)]

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.1,
        boxShadow: `0 0 ${size * 3}px ${color}`,
      })

      container.appendChild(particle)
      particles.push({
        el: particle,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
      })
    }

    let animationId
    function animate() {
      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x > 100 || p.x < 0) p.speedX *= -1
        if (p.y > 100 || p.y < 0) p.speedY *= -1
        p.el.style.left = `${p.x}%`
        p.el.style.top = `${p.y}%`
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      for (const p of particles) p.el.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  )
}
