import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { RevealText } from './AnimatedText'

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // EmailJS integration - replace with your IDs
    // npm install @emailjs/browser
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')

    // Simulate send for now
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute top-1/2 right-0 w-80 h-80 bg-neon-pink/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Contacto
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Tenés un <span className="text-neon-pink">proyecto</span> en mente?
            </h2>
          </RevealText>
          <motion.p
            className="text-gray-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Contanos tu idea y te respondemos en menos de 24hs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1.5 block">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:outline-none transition-colors resize-none"
                placeholder="Contanos sobre tu proyecto..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                status === 'sent'
                  ? 'bg-green-500 text-white'
                  : 'bg-neon-pink text-white glow-pink hover:opacity-90'
              }`}
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'idle' && (
                <>
                  <Send size={18} /> Enviar mensaje
                </>
              )}
              {status === 'sending' && (
                <>
                  <Loader2 size={18} className="animate-spin" /> Enviando...
                </>
              )}
              {status === 'sent' && (
                <>
                  <CheckCircle size={18} /> ¡Enviado!
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact options */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/542974734586?text=Hola%20Jime!%20Vengo%20de%20tu%20web%20y%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20🚀"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-dark-card border border-dark-border hover:border-green-500/30 transition-all group"
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.637l4.717-1.394A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.31-.726-5.993-1.957l-.418-.312-3.06.904.843-3.182-.327-.436A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp</p>
                <p className="text-gray-500 text-sm">Respuesta inmediata</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:jime26rodriguez@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl bg-dark-card border border-dark-border hover:border-neon-cyan/30 transition-all group"
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-neon-cyan" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-500 text-sm">jime26rodriguez@gmail.com</p>
              </div>
            </motion.a>

            {/* Calendly / Cal.com */}
            <motion.a
              href="https://cal.com/jimena-rodriguez-ikdtyd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-dark-card border border-dark-border hover:border-neon-purple/30 transition-all group"
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-neon-purple" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Agendar reunión</p>
                <p className="text-gray-500 text-sm">Elegí día y horario</p>
              </div>
            </motion.a>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              {[
                { name: 'Instagram', href: '#', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z' },
                { name: 'LinkedIn', href: 'https://linkedin.com/in/jimerodriguez85', icon: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
                { name: 'GitHub', href: 'https://github.com/jimerodriguez85', icon: 'M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border hover:border-neon-cyan/30 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 hover:fill-white transition-colors">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
