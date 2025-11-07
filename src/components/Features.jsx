import { motion } from 'framer-motion'

export default function Features() {
  const items = [
    { title: 'Ocean Proximity', desc: 'Short walk to the beach with sunrise views from the master suite terrace.', emoji: '🌊' },
    { title: 'Relaxing Pool', desc: 'Private pool, sunbeds and shaded gazebo for afternoon chill.', emoji: '🏝️' },
    { title: 'Local Flavors', desc: 'Breakfast and local dishes available on request.', emoji: '🍽️' },
  ]

  return (
    <section className="section features-preview">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          What Makes Us Special
        </motion.h2>
        <motion.p className="lead" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
          A small, friendly place with modern comforts and big island vibes.
        </motion.p>
        <div className="features-grid">
          {items.map((it, i) => (
            <motion.div key={it.title} className="feature-card glass" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.06 }}>
              <div className="feature-icon" style={{ fontSize: '28px' }}>{it.emoji}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
