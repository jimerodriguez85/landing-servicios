import { motion } from 'framer-motion'
import { Code, Smartphone, Zap, ArrowDown } from 'lucide-react'
import Avatar3D from './Avatar3D'

export default function Hero() {
  const brandName = 'El Trébol Rojo'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[10%] text-neon-pink/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Code size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[10%] text-neon-cyan/30"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Smartphone size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[15%] text-neon-green/30"
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Zap size={36} />
      </motion.div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl w-full">
        {/* Text side */}
        <div className="text-center lg:text-left flex-1">
          {/* Brand name - IMPACTANTE */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            {/* Trébol icon */}
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-12 md:h-12">
                <defs>
                  <radialGradient id="cloverGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff4466" />
                    <stop offset="100%" stopColor="#cc1133" />
                  </radialGradient>
                  <filter id="cloverGlow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Three-leaf clover */}
                <motion.g filter="url(#cloverGlow)"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <circle cx="20" cy="12" r="8" fill="url(#cloverGrad)" />
                  <circle cx="12" cy="24" r="8" fill="url(#cloverGrad)" />
                  <circle cx="28" cy="24" r="8" fill="url(#cloverGrad)" />
                  <rect x="18" y="22" width="4" height="14" rx="2" fill="#8b1a2b" />
                </motion.g>
              </svg>
            </motion.div>

            {/* Brand text with animated reveal */}
            <div className="overflow-hidden">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {brandName.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className={
                      char === ' '
                        ? ''
                        : i < 2
                        ? 'text-white'
                        : i < 3
                        ? 'text-white'
                        : 'text-red-500'
                    }
                    style={
                      i >= 3 && char !== ' '
                        ? { textShadow: '0 0 20px rgba(255,68,102,0.5), 0 0 40px rgba(255,68,102,0.2)' }
                        : {}
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            {/* Animated underline */}
            <motion.div
              className="h-1 rounded-full bg-gradient-to-r from-red-500 via-neon-pink to-red-500 mt-2"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
              style={{ maxWidth: '300px', margin: '8px auto 0', marginLeft: undefined }}
            />

            {/* Desde la Patagonia badge */}
            <motion.div
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 120 }}
            >
              {/* Mountain icon SVG */}
              <motion.svg
                viewBox="0 0 24 24" className="w-5 h-5"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M3 20 L8 10 L11 14 L14 8 L21 20 Z"
                  fill="none" stroke="#00f0ff" strokeWidth="1.5" strokeLinejoin="round"
                />
                <path
                  d="M14 8 L16 11 L18 9"
                  fill="none" stroke="#00f0ff" strokeWidth="1" strokeLinecap="round" opacity="0.6"
                />
                <circle cx="17" cy="6" r="1.5" fill="#00f0ff" opacity="0.5" />
              </motion.svg>

              <motion.span
                className="text-sm md:text-base font-medium"
                style={{
                  background: 'linear-gradient(90deg, #00f0ff, #39ff14, #00f0ff)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                Desde la Patagonia Argentina
              </motion.span>

              {/* Argentina flag dot */}
              <span className="flex gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-500 text-sm tracking-[0.25em] uppercase mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            Desarrollo de Software a Medida
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <motion.span
              className="text-white block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Hacemos tu
            </motion.span>
            <motion.span
              className="glow-text-pink text-neon-pink block"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
            >
              idea
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <span className="glow-text-cyan text-neon-cyan">realidad</span>
              <span className="text-white"> digital</span>
            </motion.span>
          </h1>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            Desarrollo web, apps móviles, automatización y software personalizado
            para impulsar tu negocio al siguiente nivel.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.a
              href="#servicios"
              className="px-8 py-4 bg-neon-pink text-white font-semibold rounded-xl glow-pink transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Servicios
            </motion.a>
            <motion.a
              href="#contacto"
              className="px-8 py-4 border border-neon-cyan text-neon-cyan font-semibold rounded-xl hover:bg-neon-cyan/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contactanos
            </motion.a>
          </motion.div>
        </div>

        {/* Avatar side */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 1, type: 'spring' }}
        >
          <Avatar3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.span
          className="text-gray-600 text-xs tracking-widest uppercase"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
