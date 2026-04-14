import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealText } from './AnimatedText'

const techs = [
  { name: 'React', color: '#61DAFB', icon: '⚛' },
  { name: 'Node.js', color: '#339933', icon: '🟢' },
  { name: 'TypeScript', color: '#3178C6', icon: '🔷' },
  { name: 'Python', color: '#3776AB', icon: '🐍' },
  { name: 'PostgreSQL', color: '#4169E1', icon: '🐘' },
  { name: 'SQLite', color: '#003B57', icon: '💾' },
  { name: 'Tailwind', color: '#06B6D4', icon: '🎨' },
  { name: 'React Native', color: '#61DAFB', icon: '📱' },
  { name: 'Express', color: '#ffffff', icon: '🚀' },
  { name: 'Git', color: '#F05032', icon: '🔀' },
  { name: 'Docker', color: '#2496ED', icon: '🐳' },
  { name: 'Linux', color: '#FCC624', icon: '🐧' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Tecnologías
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Herramientas que <span className="text-neon-green">dominamos</span>
            </h2>
          </RevealText>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="group relative flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-card border border-dark-border hover:border-gray-600 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 15px ${tech.color}22, 0 0 30px ${tech.color}11`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
