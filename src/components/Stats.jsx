import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ScaleIn } from './AnimatedText'

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos entregados', color: 'neon-pink' },
  { value: 30, suffix: '+', label: 'Clientes satisfechos', color: 'neon-cyan' },
  { value: 3, suffix: ' años', label: 'De experiencia', color: 'neon-green' },
  { value: 99, suffix: '%', label: 'Satisfacción', color: 'neon-purple' },
]

function AnimatedNumber({ target, suffix, isInView, color }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, target])

  return (
    <motion.span
      className={`text-5xl md:text-6xl font-bold text-${color}`}
      initial={{ scale: 0.5 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {count}{suffix}
    </motion.span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])

  return (
    <section ref={ref} className="relative py-20 px-6">
      {/* Animated divider line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent"
        style={{ width: lineWidth }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring' }}
            >
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
                color={stat.color}
              />
              <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent"
        style={{ width: lineWidth }}
      />
    </section>
  )
}
