import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import heroImage from '../assets/images/pic.jpeg'

export default function Hero() {
  const { openModal } = useBooking()
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImage} alt="Aroma Villas" />
      </div>
      <div className="container hero-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ maxWidth: '600px' }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Experience Tranquility at
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-title"
          >
            Aroma Villas
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-location"
          >
            Diani Beach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-description"
          >
            Experience exclusive luxury in our private beachside villa. A stunning 5-bedroom retreat perfect for families, groups, or special occasions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-tagline"
          >
            Your Private Paradise in Diani
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-subdescription"
          >
            Book the entire villa and enjoy complete privacy with your group. Features private pool, garden, and direct beach access. Your exclusive sanctuary awaits.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button onClick={() => openModal()} className="btn-primary">
              Book Your Stay
            </button>
            <Link to="/rooms" className="btn-secondary">
              Explore Villas
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'relative',
            height: '500px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          }}
        >
          <img
            src="https://shorturl.at/vKoIS"
            alt="Aroma Villas Interior"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              
            }}
          />
          <motion.div
            className="image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2rem',
              color: 'white',
            }}
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                }}
              >
                Luxury Meets Comfort
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{
                  fontSize: '1rem',
                  opacity: 0.9,
                }}
              >
                Modern amenities in a serene coastal setting
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
