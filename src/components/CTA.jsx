import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="contacto" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-dark-card to-neon-cyan/20" />
          <div className="absolute inset-px rounded-3xl bg-dark-card" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ¿Tenés un <span className="text-neon-pink">proyecto</span> en mente?
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Contanos tu idea y te armamos una propuesta personalizada.
                Sin compromiso, sin vueltas.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://wa.me/542974734586"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 hover:scale-105 transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={22} />
                Chatear por WhatsApp
              </a>
              <a
                href="mailto:jime26rodriguez@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-neon-cyan hover:text-neon-cyan transition-colors"
              >
                Enviar Email
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
