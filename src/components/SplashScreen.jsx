import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SplashScreen({ onComplete }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onComplete?.()
    }, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated clover */}
            <motion.svg
              viewBox="0 0 80 80"
              className="w-20 h-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <defs>
                <radialGradient id="splashClover" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff4466" />
                  <stop offset="100%" stopColor="#cc1133" />
                </radialGradient>
                <filter id="splashGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <motion.g
                filter="url(#splashGlow)"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <circle cx="40" cy="22" r="16" fill="url(#splashClover)" />
                <circle cx="24" cy="46" r="16" fill="url(#splashClover)" />
                <circle cx="56" cy="46" r="16" fill="url(#splashClover)" />
                <rect x="36" y="44" width="8" height="26" rx="4" fill="#8b1a2b" />
              </motion.g>
            </motion.svg>

            {/* Brand name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-3xl font-extrabold">
                <span className="text-white">El </span>
                <span className="text-red-500" style={{ textShadow: '0 0 20px rgba(255,68,102,0.5)' }}>
                  Trébol Rojo
                </span>
              </h1>
              <motion.p
                className="text-gray-500 text-sm mt-2 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Desarrollo de Software
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div className="w-48 h-0.5 bg-dark-card rounded-full overflow-hidden mt-4">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
