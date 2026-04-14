import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealText, ScaleIn } from './AnimatedText'

const mockups = [
  {
    title: 'E-Commerce',
    subtitle: 'Tienda online con pagos integrados',
    gradient: 'from-neon-pink to-neon-purple',
    delay: 0,
  },
  {
    title: 'Dashboard',
    subtitle: 'Panel de control en tiempo real',
    gradient: 'from-neon-cyan to-neon-green',
    delay: 0.2,
  },
  {
    title: 'App Mobile',
    subtitle: 'Experiencia nativa multiplataforma',
    gradient: 'from-neon-purple to-neon-cyan',
    delay: 0.4,
  },
]

function PhoneMockup({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 100, rotateX: 20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: project.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        style={{ y, rotateZ: rotate, scale }}
        whileHover={{ scale: 1.08, rotateZ: 0 }}
        className="relative cursor-pointer"
      >
        {/* Phone frame */}
        <div className="w-48 h-96 md:w-56 md:h-[420px] rounded-[2.5rem] border-4 border-gray-700 bg-dark-card overflow-hidden relative group">
          {/* Screen content */}
          <motion.div
            className={`absolute inset-2 rounded-[2rem] bg-gradient-to-br ${project.gradient} opacity-20`}
            whileHover={{ opacity: 0.35 }}
            transition={{ duration: 0.3 }}
          />

          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-dark-bg rounded-full" />

          {/* Animated scan line */}
          <motion.div
            className={`absolute left-2 right-2 h-px bg-gradient-to-r ${project.gradient} opacity-30`}
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Fake UI elements */}
          <div className="absolute inset-0 p-6 pt-10 flex flex-col gap-3">
            <motion.div
              className={`h-3 w-2/3 rounded bg-gradient-to-r ${project.gradient} opacity-60`}
              initial={{ width: 0 }}
              animate={isInView ? { width: '66%' } : {}}
              transition={{ duration: 1, delay: project.delay + 0.5 }}
            />
            <div className="h-2 w-full rounded bg-gray-700/50" />
            <div className="h-2 w-4/5 rounded bg-gray-700/50" />
            <div className="mt-4 flex-1 rounded-xl bg-gray-800/50 overflow-hidden">
              <motion.div
                className={`h-1/3 bg-gradient-to-br ${project.gradient} opacity-30`}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="flex gap-2">
              <div className="h-8 flex-1 rounded-lg bg-gray-700/40" />
              <motion.div
                className={`h-8 flex-1 rounded-lg bg-gradient-to-r ${project.gradient} opacity-50`}
                whileHover={{ opacity: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* Reflection glow */}
        <motion.div
          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-r ${project.gradient} opacity-10 blur-2xl rounded-full`}
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: project.delay + 0.6, duration: 0.5 }}
      >
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-500">{project.subtitle}</p>
      </motion.div>
    </motion.div>
  )
}

export default function Showcase() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgX = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Animated background accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]"
        style={{ x: bgX }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Proyectos que <span className="text-neon-cyan">cobran vida</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {mockups.map((project, i) => (
            <PhoneMockup key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
