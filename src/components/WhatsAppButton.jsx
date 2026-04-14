import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/542974734586?text=Hola%20Jime!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20🚀"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Chateá con nosotros</span>
    </motion.a>
  )
}
