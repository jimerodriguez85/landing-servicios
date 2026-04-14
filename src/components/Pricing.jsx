import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Sparkles, X } from 'lucide-react'
import { RevealText } from './AnimatedText'

const devPlans = [
  {
    name: 'Landing Page',
    price: '80.000',
    period: 'pago único',
    description: 'Ideal para mostrar tu negocio online',
    features: [
      'Diseño personalizado',
      'Responsive (celular + PC)',
      'Formulario de contacto',
      'Integración WhatsApp',
      'SEO básico',
      'Entrega en 7 días',
    ],
    notIncluded: ['Panel administrador', 'Blog', 'E-commerce'],
    color: 'neon-cyan',
    popular: false,
  },
  {
    name: 'Web Completa',
    price: '180.000',
    period: 'pago único',
    description: 'Para negocios que necesitan más',
    features: [
      'Todo lo del plan Landing',
      'Hasta 5 páginas',
      'Panel administrador',
      'Blog integrado',
      'Analytics',
      'Soporte 30 días',
    ],
    notIncluded: [],
    color: 'neon-pink',
    popular: true,
  },
  {
    name: 'App / Software',
    price: 'A medida',
    period: 'consultá',
    description: 'Soluciones personalizadas',
    features: [
      'Análisis de requerimientos',
      'Diseño UX/UI',
      'Desarrollo full-stack',
      'Testing completo',
      'Deploy + hosting',
      'Soporte continuo',
    ],
    notIncluded: [],
    color: 'neon-purple',
    popular: false,
  },
]

const maintenancePlans = [
  {
    name: 'Básico',
    price: '15.000',
    period: '/mes',
    description: 'Para mantener tu web funcionando',
    features: [
      'Hosting incluido',
      'Dominio incluido',
      'SSL / HTTPS',
      'Updates de seguridad',
      'Backup semanal',
      'Soporte por email (48hs)',
    ],
    notIncluded: ['Cambios de contenido', 'Nuevas funcionalidades', 'Reportes'],
    color: 'neon-cyan',
    popular: false,
  },
  {
    name: 'Profesional',
    price: '30.000',
    period: '/mes',
    description: 'Mantenimiento + mejoras continuas',
    features: [
      'Todo lo del plan Básico',
      '3 cambios de contenido/mes',
      'Backup diario',
      'Soporte WhatsApp (24hs)',
      'Reporte mensual de analytics',
      'Optimización de velocidad',
    ],
    notIncluded: [],
    color: 'neon-pink',
    popular: true,
  },
  {
    name: 'Premium',
    price: '55.000',
    period: '/mes',
    description: 'Tu equipo de desarrollo on-demand',
    features: [
      'Todo lo del plan Profesional',
      'Cambios ilimitados',
      'Nuevas funcionalidades',
      'Soporte prioritario (4hs)',
      'A/B testing',
      'Consultoría estratégica mensual',
    ],
    notIncluded: [],
    color: 'neon-purple',
    popular: false,
  },
]

function PricingCard({ plan, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const whatsappMsg = encodeURIComponent(`Hola Jime! Me interesa el plan ${plan.name}. ¿Me podés dar más info?`)

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden ${
        plan.popular ? 'lg:-mt-4 lg:mb-4' : ''
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      {plan.popular && (
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-r from-neon-pink to-neon-purple text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase z-10"
          animate={{ backgroundPosition: ['0% center', '200% center'] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: '200% auto' }}
        >
          <Sparkles size={12} className="inline mr-1" />
          Más popular
        </motion.div>
      )}

      <div className={`h-full bg-dark-card border border-dark-border hover:border-${plan.color}/30 transition-colors p-8 ${plan.popular ? 'pt-12' : ''} flex flex-col`}>
        <h3 className={`text-xl font-bold text-${plan.color} mb-2`}>{plan.name}</h3>
        <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

        <div className="mb-8">
          <span className="text-4xl font-bold text-white">
            {plan.price.startsWith('A') ? '' : '$'}
            {plan.price}
          </span>
          <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
        </div>

        <ul className="space-y-3 mb-4 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check size={16} className={`text-${plan.color} flex-shrink-0`} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
          {plan.notIncluded?.map((feature) => (
            <li key={feature} className="flex items-center gap-3 opacity-40">
              <X size={16} className="text-gray-600 flex-shrink-0" />
              <span className="text-gray-600 text-sm line-through">{feature}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href={`https://wa.me/542974734586?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
            plan.popular
              ? `bg-${plan.color} text-white hover:opacity-90`
              : `border border-${plan.color}/50 text-${plan.color} hover:bg-${plan.color}/10`
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {plan.price.startsWith('A') ? 'Consultá' : 'Lo quiero'}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const [tab, setTab] = useState('dev')
  const plans = tab === 'dev' ? devPlans : maintenancePlans

  return (
    <section id="precios" className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <RevealText className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Precios
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Planes <span className="text-neon-pink">transparentes</span>
            </h2>
          </RevealText>
          <motion.p
            className="text-gray-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Sin letra chica. Sabés exactamente qué incluye cada plan.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-dark-card border border-dark-border p-1">
            <button
              onClick={() => setTab('dev')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === 'dev'
                  ? 'bg-neon-pink text-white shadow-lg shadow-neon-pink/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🛠 Desarrollo
            </button>
            <button
              onClick={() => setTab('maintenance')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === 'maintenance'
                  ? 'bg-neon-cyan text-white shadow-lg shadow-neon-cyan/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🔧 Mantenimiento
            </button>
          </div>
        </div>

        {/* Maintenance value prop */}
        {tab === 'maintenance' && (
          <motion.div
            className="text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu web no termina cuando la entregamos. Con un plan de mantenimiento
              nos aseguramos de que <span className="text-neon-cyan font-medium">siempre esté online, segura y actualizada</span>.
              Vos te enfocás en tu negocio, nosotros en la tecnología.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name + tab} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-gray-600 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {tab === 'dev'
            ? 'Todos los planes incluyen código fuente. Precios en ARS, sujetos a actualización.'
            : 'Contratá mantenimiento con cualquier plan de desarrollo y obtené 20% OFF el primer mes.'}
        </motion.p>
      </div>
    </section>
  )
}
