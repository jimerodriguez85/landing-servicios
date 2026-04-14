import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 12
const COLORS = ['#ff2d9b', '#00f0ff', '#b026ff', '#39ff14']

export default function NeonCursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const trail = []
    let mouse = { x: 0, y: 0 }
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      trail.push({
        x: mouse.x,
        y: mouse.y,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
      })
      if (trail.length > TRAIL_LENGTH) trail.shift()
    }

    window.addEventListener('mousemove', handleMove)

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < trail.length; i++) {
        const p = trail[i]
        p.life -= 0.03
        if (p.life <= 0) continue

        const size = p.life * 6
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.life * 0.6
        ctx.fill()

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.life * 0.1
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[90]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
