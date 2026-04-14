import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function EasterEgg() {
  const [triggered, setTriggered] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === KONAMI[index]) {
        const next = index + 1
        if (next === KONAMI.length) {
          setTriggered(true)
          setIndex(0)
          setTimeout(() => setTriggered(false), 5000)
        } else {
          setIndex(next)
        }
      } else {
        setIndex(0)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index])

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Confetti/particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: ['#ff2d9b', '#00f0ff', '#39ff14', '#b026ff', '#ff4466'][i % 5],
                left: `${Math.random() * 100}%`,
                top: '-5%',
              }}
              animate={{
                y: [0, window.innerHeight + 50],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, Math.random() * 720],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'easeIn',
              }}
            />
          ))}

          {/* Message */}
          <motion.div
            className="bg-dark-card/95 backdrop-blur-xl border border-neon-pink/50 rounded-2xl px-8 py-6 text-center z-10"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <p className="text-4xl mb-3">🍀🔴</p>
            <p className="text-white font-bold text-xl">¡Encontraste el secreto!</p>
            <p className="text-neon-cyan text-sm mt-1">
              Sos parte del club. 10% OFF en tu primer proyecto.
            </p>
            <p className="text-gray-600 text-xs mt-3">Código: TREBOL10</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
