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
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
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
            Discover your perfect beachside retreat at Aroma Villas. Offering luxurious accommodations, modern amenities, and serene surroundings for an unforgettable stay.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-tagline"
          >
            Your Gateway to Diani's Coastal Charm
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-subdescription"
          >
            Aroma Villas provides a tranquil escape with easy access to Diani's pristine beaches and vibrant local attractions. Book your dream vacation today.
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
      </div>
    </section>
  )
}
