import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

export default function BookingCTA() {
  const { openModal } = useBooking()
  return (
    <section className="booking-cta-section">
      <div className="container">
        <motion.div
          className="booking-cta glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SECURE YOUR RETREAT
          </motion.h2>
          <div className="booking-cta-buttons">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button onClick={() => openModal()} className="btn-primary">
                BOOK NOW
              </button>
              <p>Reserve the entire villa in a few clicks and enjoy exclusive access to every suite, the pool, and lush outdoor lounges.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/contact" className="btn-secondary">
                LEARN MORE
              </Link>
              <p>Discuss bespoke services with our team—from private chefs to curated excursions tailored for your group.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

