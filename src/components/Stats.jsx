import { motion } from 'framer-motion'
import { useBooking } from '../context/BookingContext'
import locationImage from '../assets/images/pic2.jpeg'

export default function Stats() {
  const { openModal } = useBooking()
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-content">
          <motion.div
            className="stats-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Steps from the beach
            </motion.h2>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nestled in the serene area of Diani, Aroma Villas offers a captivating retreat just steps away from a tranquil beach. Enjoy peaceful surroundings, elegant villas, and unparalleled access to the natural beauty of coastal Kenya.
            </motion.p>
            
            <div className="stats-grid">
              <motion.div
                className="stat-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">6+</div>
                <div className="stat-label">Years in business</div>
                <div className="stat-sublabel">Creating serene getaways</div>
              </motion.div>
              
              <motion.div
                className="stat-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">10 mins</div>
                <div className="stat-label">Walk to the beach</div>
                <div className="stat-sublabel">A tranquil environment awaits</div>
              </motion.div>
            </div>
            
            <motion.div
              style={{ marginTop: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button onClick={() => openModal()} className="btn-primary">
                BOOK YOUR STAY
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="stats-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={locationImage} alt="Diani Beach" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

