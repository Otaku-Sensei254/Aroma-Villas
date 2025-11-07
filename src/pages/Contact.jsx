import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <main className="main section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          Contact
        </motion.h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          <motion.div
            className="glass"
            style={{ padding: '32px', height: '100%', display: 'grid', gap: '24px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="lead"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have questions? Reach out to check availability and get directions.
            </motion.p>
            
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                marginBottom: '8px'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px'
              }}>
                <span style={{ fontSize: '1.4rem' }}>📧</span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--primary-light)', marginBottom: '4px' }}>Email</div>
                  <a href="mailto:stay@aromavillas.example" style={{ color: 'var(--ink-light)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    stay@aromavillas.example
                  </a>
                </div>
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px'
              }}>
                <span style={{ fontSize: '1.4rem' }}>📱</span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--primary-light)', marginBottom: '4px' }}>Phone/WhatsApp</div>
                  <a href="tel:+000000000" style={{ color: 'var(--ink-light)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    +000 000 000
                  </a>
                </div>
              </div>
            </motion.div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div>Your Name</div>
              <input
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.label>
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div>Your Email</div>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.label>
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div>Message</div>
              <textarea
                placeholder="Your message..."
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </motion.label>
            <motion.button
              className="btn-primary"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Send Message
            </motion.button>
          </form>
          </motion.div>
              
          <motion.div
            className="glass map-container"
            style={{ 
              padding: '32px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ margin: 0, color: 'var(--primary-light)' }}
            >
              Find Us
            </motion.h3>
            <div style={{ 
              flex: 1,
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              minHeight: '400px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817150808545!2d39.86716631475345!3d-0.2007899998684626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTInMDIuOSJTIDM5wrA1MicxMC4yIkU!5e0!3m2!1sen!2sus!4v1625481234567!5m2!1sen!2sus"
                style={{
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aroma Villas Location"
              />
            </div>
            <div style={{ 
              padding: '16px',
              background: 'rgba(6, 182, 212, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
              <p style={{ margin: 0, color: 'var(--ink-light)', lineHeight: 1.6 }}>
                <strong>📍 Location:</strong> Malindi, just 600m from the beach<br />
                <strong>✈️ Access:</strong> Easy reach from Malindi Airport<br />
                <strong>🚗 Transport:</strong> Taxi and ride-sharing available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
