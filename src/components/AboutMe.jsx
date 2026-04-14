import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Heart, Rocket } from 'lucide-react'
import { RevealText, SlideIn } from './AnimatedText'
import Avatar3D from './Avatar3D'

export default function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px]"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Sobre mí
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              La persona detrás del <span className="text-neon-cyan">código</span>
            </h2>
          </RevealText>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="w-64 h-72">
              <Avatar3D />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <SlideIn direction="right" delay={0.2}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Soy <span className="text-neon-pink font-semibold">Jime</span>, desarrolladora
                de software desde la <span className="text-neon-cyan font-semibold">Patagonia Argentina</span>.
                Me apasiona crear soluciones digitales que resuelvan problemas reales y ayuden
                a negocios a crecer.
              </p>
            </SlideIn>

            <SlideIn direction="right" delay={0.4}>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Creo que la tecnología tiene que ser accesible para todos. Por eso trabajo
                de cerca con cada cliente, entendiendo su negocio para crear exactamente
                lo que necesitan — ni más, ni menos.
              </p>
            </SlideIn>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border">
                <MapPin size={16} className="text-neon-cyan" />
                <span className="text-gray-300 text-sm">Patagonia, Argentina</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border">
                <Heart size={16} className="text-neon-pink" />
                <span className="text-gray-300 text-sm">Apasionada por el código</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border">
                <Rocket size={16} className="text-neon-green" />
                <span className="text-gray-300 text-sm">+50 proyectos entregados</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
