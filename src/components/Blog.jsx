import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, ArrowRight } from 'lucide-react'
import { RevealText } from './AnimatedText'

const posts = [
  {
    title: 'Cómo armé un sistema de turnos desde cero',
    excerpt: 'Un recorrido técnico por el desarrollo de un sistema de turnos online para un estudio contable en la Patagonia.',
    date: '10 Abr 2026',
    readTime: '5 min',
    tag: 'Caso de estudio',
    gradient: 'from-neon-pink to-neon-purple',
  },
  {
    title: '¿Landing page o sitio web completo? Cómo elegir',
    excerpt: 'Guía práctica para decidir qué tipo de presencia web necesita tu negocio según tu presupuesto y objetivos.',
    date: '2 Abr 2026',
    readTime: '4 min',
    tag: 'Guía',
    gradient: 'from-neon-cyan to-neon-green',
  },
  {
    title: 'Automatización: dejá que la tecnología trabaje por vos',
    excerpt: 'Tres ejemplos reales de cómo automatizar tareas repetitivas puede ahorrarle horas a tu negocio.',
    date: '25 Mar 2026',
    readTime: '6 min',
    tag: 'Productividad',
    gradient: 'from-neon-purple to-neon-cyan',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="blog" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Blog
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Artículos y <span className="text-neon-green">aprendizajes</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gray-600 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Image placeholder with gradient */}
              <div className={`h-40 bg-gradient-to-br ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-50">{'</>'}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${post.gradient} text-white`}>
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600 text-xs">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-xs">{post.date}</span>
                  <span className="flex items-center gap-1 text-neon-cyan text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Leer <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
