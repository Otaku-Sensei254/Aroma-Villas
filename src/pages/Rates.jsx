import { motion } from 'framer-motion'
import { getSeasonalMultiplier } from '../utils/pricing'

const rows = [
  { label: 'Jan – Feb (Low)', m: 0.9, color: '#22d3ee' },
  { label: 'Mar – May', m: 1.0, color: '#06b6d4' },
  { label: 'Jun – Aug (Peak)', m: 1.25, color: '#f59e0b' },
  { label: 'Sep – Nov', m: 1.0, color: '#06b6d4' },
  { label: 'Dec (Holiday)', m: 1.4, color: '#f59e0b' },
]

export default function Rates() {
  return (
    <main className="main section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Rates
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Rates vary by season. Total booking shows in the Booking page with a 50% deposit due on booking.
        </motion.p>
        <motion.div
          className="glass"
          style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 12px',
                borderBottom: i < rows.length - 1 ? '1px solid var(--glass-border)' : 'none',
                transition: 'all 0.2s ease'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <div style={{ fontWeight: 600, color: 'var(--ink-light)' }}>{r.label}</div>
              <div style={{
                fontWeight: 800,
                fontSize: '1.1rem',
                color: r.color,
                padding: '6px 14px',
                borderRadius: '8px',
                background: `rgba(${r.color === '#22d3ee' ? '34, 211, 238' : r.color === '#06b6d4' ? '6, 182, 212' : '245, 158, 11'}, 0.1)`,
                border: `1px solid ${r.color}40`
              }}>
                ×{r.m}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
