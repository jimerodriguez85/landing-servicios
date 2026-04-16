import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RevealText } from './AnimatedText'

const ciudades = [
  { nombre: 'Perito Moreno', desc: 'Base central', destacada: true },
  { nombre: 'Las Heras', desc: 'Zona norte' },
  { nombre: 'Pico Truncado', desc: 'Zona norte' },
  { nombre: 'Los Antiguos', desc: 'Lago Buenos Aires' },
  { nombre: 'Gobernador Gregores', desc: 'Zona centro' },
  { nombre: 'Caleta Olivia', desc: 'Zona costera' },
]

export default function Coverage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[120px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Cobertura
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Toda la <span className="text-neon-pink">zona norte</span> de Santa Cruz
            </h2>
          </RevealText>
          <motion.p
            className="text-gray-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Trabajamos con emprendedores y PyMEs de toda la región. Presencial o remoto, estamos cerca.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ciudades.map((ciudad, i) => (
            <motion.div
              key={ciudad.nombre}
              className={`relative rounded-xl p-5 text-center transition-all ${
                ciudad.destacada
                  ? 'bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 border border-neon-pink/30'
                  : 'bg-dark-card border border-dark-border hover:border-neon-cyan/30'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {ciudad.destacada && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-neon-pink text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Base
                </div>
              )}
              <div className="text-2xl mb-2">📍</div>
              <h3 className={`font-bold text-lg ${ciudad.destacada ? 'text-neon-pink' : 'text-white'}`}>
                {ciudad.nombre}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{ciudad.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          También trabajamos de forma remota con clientes de todo el país.
        </motion.p>
      </div>
    </section>
  )
}
