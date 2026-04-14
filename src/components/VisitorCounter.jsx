import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Simulated visitor count - in production use analytics API
    const base = 127
    const random = Math.floor(Math.random() * 15)
    setCount(base + random)

    // Simulate live updates
    const interval = setInterval(() => {
      setCount((prev) => prev + (Math.random() > 0.5 ? 1 : 0))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      ref={ref}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card/80 backdrop-blur-md border border-dark-border"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-green-400"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <Eye size={14} className="text-gray-500" />
      <span className="text-gray-400 text-xs">
        <motion.span
          className="text-white font-semibold"
          key={count}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {count}
        </motion.span>
        {' '}visitando ahora
      </span>
    </motion.div>
  )
}
