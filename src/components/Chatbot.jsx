import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'

const FAQ = [
  {
    q: '¿Cuánto cuesta una landing page?',
    a: 'Nuestras landing pages arrancan desde $80.000. El precio final depende de las funcionalidades que necesites. ¡Consultanos!',
  },
  {
    q: '¿Cuánto tardan en entregar?',
    a: 'Una landing page la entregamos en 7 días. Proyectos más complejos entre 2 a 8 semanas según el alcance.',
  },
  {
    q: '¿Hacen apps móviles?',
    a: 'Sí, desarrollamos apps nativas y multiplataforma para iOS y Android. Usamos React Native para optimizar tiempos.',
  },
  {
    q: '¿Ofrecen soporte post-lanzamiento?',
    a: 'Todos nuestros planes incluyen soporte. El plan Web Completa incluye 30 días de soporte, y para apps/software ofrecemos soporte continuo.',
  },
  {
    q: '¿Cómo es el proceso de trabajo?',
    a: '1) Nos contás tu idea → 2) Armamos una propuesta → 3) Diseñamos → 4) Desarrollamos → 5) Entregamos y capacitamos. Simple así.',
  },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! 👋 Soy el asistente de El Trébol Rojo. ¿En qué puedo ayudarte?' },
  ])
  const [input, setInput] = useState('')

  const handleFAQ = (faq) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: faq.q },
      { from: 'bot', text: faq.a },
    ])
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')

    setMessages((prev) => [...prev, { from: 'user', text: userMsg }])

    // Simple keyword matching
    const lower = userMsg.toLowerCase()
    let response = 'No tengo la respuesta a eso, pero podés escribirnos por WhatsApp y te respondemos enseguida. 😊'

    for (const faq of FAQ) {
      const keywords = faq.q.toLowerCase().split(' ').filter((w) => w.length > 3)
      if (keywords.some((k) => lower.includes(k))) {
        response = faq.a
        break
      }
    }

    if (lower.includes('hola') || lower.includes('buenas'))
      response = '¡Hola! ¿En qué podemos ayudarte? Podés elegir una pregunta frecuente o escribirme directo. 😊'
    if (lower.includes('gracias'))
      response = '¡De nada! Si necesitás algo más, acá estamos. 🍀'

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: response }])
    }, 600)
  }

  const showSuggestions = messages.length <= 2

  return (
    <>
      {/* Toggle button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-neon-purple text-white shadow-lg shadow-neon-purple/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 3, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageSquare size={22} />
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-dark-card border border-dark-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: '480px' }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-border bg-dark-bg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center">
                  <span className="text-sm">🍀</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">El Trébol Rojo</p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-dark-card transition-colors"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.from === 'user'
                        ? 'bg-neon-pink text-white rounded-br-md'
                        : 'bg-dark-bg border border-dark-border text-gray-300 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* FAQ suggestions */}
              {showSuggestions && (
                <div className="space-y-2 pt-2">
                  <p className="text-gray-600 text-xs">Preguntas frecuentes:</p>
                  {FAQ.slice(0, 3).map((faq) => (
                    <button
                      key={faq.q}
                      onClick={() => handleFAQ(faq)}
                      className="block w-full text-left px-3 py-2 rounded-xl bg-dark-bg border border-dark-border text-gray-400 text-xs hover:border-neon-cyan/30 hover:text-gray-300 transition-colors"
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-dark-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribí tu mensaje..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border text-white text-sm placeholder-gray-600 focus:border-neon-cyan/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-neon-pink text-white hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
