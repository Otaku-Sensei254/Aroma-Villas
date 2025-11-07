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
              <p>Easily reserve your tranquil beachside retreat at Aroma Villas. Our online booking system is simple and efficient.</p>
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
              <p>Our secure payment facilities ensure your booking is protected. Enjoy peace of mind with encrypted transactions.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

