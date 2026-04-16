import { motion } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { RevealText } from './AnimatedText'

const TEMPLATES = [
  { id: 'custom', name: 'Personalizado', icon: '✏️', line1: 'TU TÍTULO', line2: 'Tu subtítulo', body: 'Tu texto acá', footer: 'tunegocio.com' },
  { id: 'launch', name: 'Lanzamiento', icon: '🚀', line1: 'MI NEGOCIO', line2: 'Ahora digital', body: 'Conocé nuestra\nnueva web', footer: 'tunegocio.com' },
  { id: 'promo', name: 'Promoción', icon: '🔥', line1: 'OFERTA', line2: 'Especial', body: 'Aprovechá\nesta promo', footer: 'Escribinos hoy' },
  { id: 'tip', name: 'Tip', icon: '💡', line1: '3 TIPS', line2: 'Para tu negocio', body: '1. Primer tip\n2. Segundo tip\n3. Tercer tip', footer: 'Seguinos' },
]

const STYLES = [
  { id: 'dark', name: 'Oscuro', bg: '#0a0a0f', accent: '#ff2d9b', text: '#ffffff', sub: '#00f0ff' },
  { id: 'cyan', name: 'Cyan', bg: '#001a1f', accent: '#00f0ff', text: '#ffffff', sub: '#ff2d9b' },
  { id: 'purple', name: 'Violeta', bg: '#0a0015', accent: '#b026ff', text: '#ffffff', sub: '#00f0ff' },
  { id: 'light', name: 'Claro', bg: '#f8fafc', accent: '#ff2d9b', text: '#0f172a', sub: '#475569' },
]

export default function PostGenerator() {
  const canvasRef = useRef(null)
  const [tpl, setTpl] = useState('custom')
  const [style, setStyle] = useState('dark')
  const [line1, setLine1] = useState('TU TÍTULO')
  const [line2, setLine2] = useState('Tu subtítulo')
  const [body, setBody] = useState('Tu texto acá')
  const [footer, setFooter] = useState('tunegocio.com')

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const sty = STYLES.find(s => s.id === style)
    const w = 1080, h = 1080
    canvas.width = w
    canvas.height = h

    ctx.fillStyle = sty.bg
    ctx.fillRect(0, 0, w, h)

    // Glows
    const g1 = ctx.createRadialGradient(w * 0.8, h * 0.15, 0, w * 0.8, h * 0.15, w * 0.4)
    g1.addColorStop(0, sty.accent + '15')
    g1.addColorStop(1, 'transparent')
    ctx.fillStyle = g1
    ctx.fillRect(0, 0, w, h)

    const g2 = ctx.createRadialGradient(w * 0.2, h * 0.85, 0, w * 0.2, h * 0.85, w * 0.35)
    g2.addColorStop(0, sty.sub + '10')
    g2.addColorStop(1, 'transparent')
    ctx.fillStyle = g2
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = sty.accent
    ctx.fillRect(80, 80, 60, 4)

    ctx.font = 'bold 64px -apple-system, sans-serif'
    ctx.fillStyle = sty.text
    ctx.fillText(line1, 80, h * 0.3)

    ctx.font = '42px -apple-system, sans-serif'
    ctx.fillStyle = sty.accent
    ctx.fillText(line2, 80, h * 0.3 + 60)

    ctx.font = '36px -apple-system, sans-serif'
    ctx.fillStyle = sty.sub
    body.split('\n').forEach((l, i) => {
      ctx.fillText(l, 80, h * 0.5 + i * 52)
    })

    ctx.font = 'bold 32px -apple-system, sans-serif'
    ctx.fillStyle = sty.accent
    ctx.fillText(footer, 80, h - 80)

    ctx.fillStyle = sty.accent + '40'
    ctx.fillRect(80, h - 40, w - 160, 2)
  }, [style, line1, line2, body, footer])

  useEffect(() => { draw() }, [draw])

  function selectTemplate(id) {
    const t = TEMPLATES.find(x => x.id === id)
    setTpl(id)
    setLine1(t.line1)
    setLine2(t.line2)
    setBody(t.body)
    setFooter(t.footer)
  }

  function download() {
    const canvas = canvasRef.current
    const link = document.createElement('a')
    link.download = `post-${Date.now()}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Herramienta gratis
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Generador de <span className="text-neon-pink">Posts</span>
            </h2>
          </RevealText>
          <motion.p
            className="text-gray-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Creá imágenes para tus redes en segundos. Elegí una plantilla, editá el texto y descargá.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Templates */}
            <div>
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 block">Plantilla</label>
              <div className="grid grid-cols-2 gap-2">
                {TEMPLATES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => selectTemplate(t.id)}
                    className={`p-3 rounded-xl text-sm font-semibold transition-all ${
                      tpl === t.id
                        ? 'bg-neon-pink/20 border-2 border-neon-pink text-neon-pink'
                        : 'bg-dark-card border-2 border-dark-border text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    {t.icon} {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Styles */}
            <div>
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 block">Estilo</label>
              <div className="flex gap-2">
                {STYLES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setStyle(s.id)}
                    className={`flex-1 p-2 rounded-lg text-xs font-bold transition-all border-2 ${
                      style === s.id ? 'border-neon-purple' : 'border-dark-border'
                    }`}
                    style={{ background: s.bg, color: s.accent }}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1 block">Título</label>
              <input
                value={line1}
                onChange={e => setLine1(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white focus:border-neon-cyan focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1 block">Subtítulo</label>
              <input
                value={line2}
                onChange={e => setLine2(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white focus:border-neon-cyan focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1 block">Texto</label>
              <textarea
                value={body}
                onChange={e => setBody(e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white focus:border-neon-cyan focus:outline-none resize-none"
              />
            </div>
            <div>
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1 block">Pie / CTA</label>
              <input
                value={footer}
                onChange={e => setFooter(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-dark-card border border-dark-border text-white focus:border-neon-cyan focus:outline-none"
              />
            </div>

            <motion.button
              onClick={download}
              className="w-full py-3.5 rounded-xl font-semibold bg-neon-pink text-white glow-pink hover:opacity-90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📥 Descargar PNG
            </motion.button>
          </motion.div>

          {/* Preview */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-neon-pink/10 border border-dark-border">
              <canvas
                ref={canvasRef}
                style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
