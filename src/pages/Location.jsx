import { motion } from 'framer-motion'
import locationImage from '../assets/images/pic2.jpeg'

export default function Location() {
  return (
    <main className="main section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Location
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Aroma Villas is just 600 meters (~10 minutes) from the beach. Enjoy the ocean breeze and easy access to seaside fun.
        </motion.p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '40px' }}>
          <motion.div
            className="glass"
            style={{ padding: '32px', display: 'grid', gap: '20px' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🏖️</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-light)', marginBottom: '4px' }}>Beach Access</div>
                  <div style={{ color: 'var(--ink-muted)' }}>600 meters (~10 minutes walk)</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🏊</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-light)', marginBottom: '4px' }}>Swimming Pool</div>
                  <div style={{ color: 'var(--ink-muted)' }}>On-site pool available</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🌴</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-light)', marginBottom: '4px' }}>Gazebo</div>
                  <div style={{ color: 'var(--ink-muted)' }}>Serene relaxation space</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🔒</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-light)', marginBottom: '4px' }}>Security</div>
                  <div style={{ color: 'var(--ink-muted)' }}>Tight security measures</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>📶</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--primary-light)', marginBottom: '4px' }}>Fast Internet</div>
                  <div style={{ color: 'var(--ink-muted)' }}>High-speed Wi-Fi available</div>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
              <p style={{ margin: 0, color: 'var(--ink-light)', lineHeight: 1.6 }}>
                For precise directions, contact us and we'll share a pin. Ride-hailing and taxis are readily available.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={locationImage}
              alt="Aroma Villas Location"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: '400px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
