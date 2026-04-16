import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { RevealText } from './AnimatedText'

const projects = [
  {
    title: 'Gestión de Alquileres',
    description: 'Sistema completo para administrar propiedades, contratos, pagos de alquiler, servicios (luz, gas, internet), ajuste IPC automático, reclamos con fotos y notificaciones por WhatsApp.',
    tech: ['SvelteKit', 'Prisma', 'SQLite', 'Tailwind'],
    gradient: 'from-neon-pink to-neon-purple',
    mockupType: 'desktop',
  },
  {
    title: 'ClipWise',
    description: 'Editor de video con inteligencia artificial. Corte automático de silencios, generación de subtítulos y recorte inteligente. App de escritorio multiplataforma.',
    tech: ['React', 'Electron', 'Python', 'IA'],
    gradient: 'from-neon-cyan to-neon-green',
    mockupType: 'desktop',
  },
  {
    title: 'CuidarT - Control Salud',
    description: 'Plataforma de seguimiento de salud con registro de turnos, medicamentos, estudios y recordatorios automáticos.',
    tech: ['React', 'Node.js', 'SQLite'],
    gradient: 'from-neon-purple to-neon-pink',
    mockupType: 'mobile',
  },
]

function DesktopMockup({ project }) {
  return (
    <div className="w-full aspect-video rounded-lg border border-gray-700 bg-dark-bg overflow-hidden relative">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800/50 border-b border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-3 flex-1 h-4 rounded bg-gray-700/50 max-w-[140px]" />
      </div>
      <div className={`absolute inset-0 mt-8 bg-gradient-to-br ${project.gradient} opacity-10`} />
      <div className="p-4 mt-2 space-y-2">
        <div className={`h-3 w-1/3 rounded bg-gradient-to-r ${project.gradient} opacity-40`} />
        <div className="h-2 w-full rounded bg-gray-700/30" />
        <div className="h-2 w-4/5 rounded bg-gray-700/30" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-12 rounded bg-gray-700/20" />
          <div className="h-12 rounded bg-gray-700/20" />
          <div className="h-12 rounded bg-gray-700/20" />
        </div>
        <div className="mt-2 h-20 rounded bg-gray-800/30" />
      </div>
    </div>
  )
}

function MobileMockup({ project }) {
  return (
    <div className="w-32 h-56 mx-auto rounded-[1.5rem] border-2 border-gray-700 bg-dark-bg overflow-hidden relative">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-full" />
      <div className={`absolute inset-1 mt-4 rounded-[1.2rem] bg-gradient-to-br ${project.gradient} opacity-10`} />
      <div className="p-3 mt-5 space-y-1.5">
        <div className={`h-2 w-2/3 rounded bg-gradient-to-r ${project.gradient} opacity-40`} />
        <div className="h-1.5 w-full rounded bg-gray-700/30" />
        <div className="h-1.5 w-3/4 rounded bg-gray-700/30" />
        <div className="mt-2 h-16 rounded-lg bg-gray-800/30" />
        <div className="flex gap-1">
          <div className="h-5 flex-1 rounded bg-gray-700/20" />
          <div className={`h-5 flex-1 rounded bg-gradient-to-r ${project.gradient} opacity-30`} />
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="portfolio" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Proyectos <span className="text-neon-purple">reales</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-gray-600 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Mockup */}
              <div className="mb-5">
                {project.mockupType === 'desktop' ? (
                  <DesktopMockup project={project} />
                ) : (
                  <MobileMockup project={project} />
                )}
              </div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors flex items-center gap-2">
                {project.title}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-dark-bg border border-dark-border text-gray-400 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
