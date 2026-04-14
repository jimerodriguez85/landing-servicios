import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !dark)
  }, [dark])

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-dark-card/80 backdrop-blur-md border border-dark-border hover:border-neon-cyan/30 transition-colors"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={dark ? 'Modo claro' : 'Modo oscuro'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: dark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {dark ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-neon-cyan" />
        )}
      </motion.div>
    </motion.button>
  )
}
