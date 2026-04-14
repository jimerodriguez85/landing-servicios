import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Smartphone, Bot, Server } from 'lucide-react'
import { RevealText, SlideIn } from './AnimatedText'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Sitios web y plataformas modernas, rápidas y responsivas que destacan tu marca.',
    color: 'neon-pink',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas y multiplataforma para iOS y Android que tus usuarios aman.',
    color: 'neon-cyan',
  },
  {
    icon: Bot,
    title: 'Automatización',
    description: 'Automatizá procesos repetitivos y ahorrá tiempo con soluciones inteligentes.',
    color: 'neon-green',
  },
  {
    icon: Server,
    title: 'Software a Medida',
    description: 'Sistemas personalizados que se adaptan exactamente a lo que tu negocio necesita.',
    color: 'neon-purple',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directions = ['left', 'right', 'left', 'right']

  return (
    <motion.div
      ref={ref}
      className="group relative p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-transparent transition-colors overflow-hidden cursor-pointer"
      initial={{ opacity: 0, x: directions[index] === 'left' ? -80 : 80, rotateY: directions[index] === 'left' ? -10 : 10 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated border gradient on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, var(--color-${service.color}), transparent, var(--color-${service.color}))`,
          padding: '1px',
        }}
      />
      <div className="absolute inset-px rounded-2xl bg-dark-card group-hover:bg-dark-card/95 transition-colors" />

      {/* Glow effect on hover */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${service.color}/0 group-hover:bg-${service.color}/10 rounded-full blur-3xl transition-all duration-700`} />

      <div className="relative z-10">
        <motion.div
          className={`inline-flex p-4 rounded-xl bg-${service.color}/10 text-${service.color} mb-5`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <service.icon size={28} />
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 leading-relaxed">{service.description}</p>

        {/* Arrow that appears on hover */}
        <motion.span
          className={`inline-block mt-4 text-${service.color} text-sm font-medium`}
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ x: 5 }}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Conocé más →
          </span>
        </motion.span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="servicios" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[150px]"
        style={{ y: bgY }}
      />

      {/* Decorative line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Lo que hacemos
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Nuestros <span className="text-neon-pink">Servicios</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
