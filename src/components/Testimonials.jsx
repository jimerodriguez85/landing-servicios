import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { RevealText } from './AnimatedText'

const testimonials = [
  {
    name: 'Martín López',
    role: 'Dueño de Pizzería Don Martín',
    text: 'Nos armaron un sistema de pedidos online que nos cambió el negocio. Ahora recibimos el triple de pedidos y todo automatizado.',
    stars: 5,
    color: 'neon-pink',
  },
  {
    name: 'Carolina Ruiz',
    role: 'Directora en Estudio Contable CR',
    text: 'La app para gestionar turnos de nuestros clientes fue exactamente lo que necesitábamos. Rápidos, profesionales y siempre disponibles.',
    stars: 5,
    color: 'neon-cyan',
  },
  {
    name: 'Diego Fernández',
    role: 'CEO de Logística Sur',
    text: 'Automatizaron nuestros reportes de flota y nos ahorraron 20 horas semanales de trabajo manual. Una inversión que se pagó sola.',
    stars: 5,
    color: 'neon-green',
  },
  {
    name: 'Lucía Martínez',
    role: 'Fundadora de Tienda Lulú',
    text: 'Mi tienda online quedó hermosa y vende sola. El soporte post-lanzamiento es increíble, siempre están ahí.',
    stars: 5,
    color: 'neon-purple',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const t = testimonials[current]

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Testimonios
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Lo que dicen nuestros <span className="text-neon-pink">clientes</span>
            </h2>
          </RevealText>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12 min-h-[280px] flex items-center">
            <Quote className="absolute top-6 left-6 text-neon-pink/10" size={60} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="relative z-10 text-center w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto italic">
                  "{t.text}"
                </p>

                <div>
                  <p className={`font-bold text-${t.color} text-lg`}>{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark-bg/50 border border-dark-border hover:border-neon-cyan/50 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-400" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dark-bg/50 border border-dark-border hover:border-neon-cyan/50 transition-colors"
            >
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-neon-pink w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
