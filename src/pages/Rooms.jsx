import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import RoomCard from '../components/RoomCard'
import { villaDetails } from '../data/rooms'

export default function Rooms() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { openModal } = useBooking()

  const faqs = [
    {
      question: 'Do we get the entire property to ourselves?',
      answer: 'Yes. Every reservation grants private, exclusive access to all bedrooms, living spaces, the pool, and the garden.'
    },
    {
      question: 'What is included with the booking?',
      answer: 'Daily housekeeping, 24/7 security, high-speed Wi-Fi, and access to the pool, gazebo, and beach pathway are all included.'
    },
    {
      question: "What's the maximum number of guests allowed?",
      answer: `The villa comfortably sleeps up to ${villaDetails.capacity.maxGuests} guests across ${villaDetails.capacity.bedrooms} bedrooms.`
    },
    {
      question: 'Can we bring in a private chef or event planner?',
      answer: 'Absolutely. We can recommend trusted partners or coordinate directly with your chosen vendors.'
    }
  ]

  return (
    <main className="main">
      <section className="rooms-hero">
        <div className="container">
          <motion.div
            className="rooms-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rooms-hero-subtitle"
            >
              PRIVATE VILLA RETREAT
            </motion.h3>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Every booking unlocks the entire Aroma Villas estate—five elegant bedrooms, upscale amenities, and serene outdoor living.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section villa-section">
        <div className="container">
          <motion.div
            className="villa-overview glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '2rem',
              borderRadius: '24px',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ marginBottom: '0.5rem' }}>{villaDetails.name}</h2>
                  <p className="lead" style={{ marginBottom: '1rem' }}>{villaDetails.description}</p>
                  <div style={{ display: 'flex', gap: '2rem', color: 'var(--primary-light)' }}>
                    <div>
                      <strong>{villaDetails.capacity.bedrooms}</strong> Bedrooms
                    </div>
                    <div>
                      <strong>{villaDetails.capacity.bathrooms}</strong> Bathrooms
                    </div>
                    <div>
                      <strong>{villaDetails.capacity.maxGuests}</strong> Max Guests
                    </div>
                  </div>
                </div>
                <motion.button
                  className="btn-primary"
                  onClick={openModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Entire Villa
                </motion.button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {villaDetails.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px'
                    }}
                  >
                    <span>✓</span>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '400px'
            }}>
              <motion.img
                key={activeImageIndex}
                src={villaDetails.images[activeImageIndex]}
                alt={`Villa View ${activeImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '0.5rem'
            }}>
              {villaDetails.images.map((image, index) => (
                <motion.div
                  key={image}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '80px',
                    opacity: activeImageIndex === index ? 1 : 0.6
                  }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Villa Thumbnail ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Bedrooms & Suites</h2>
            <div className="rooms-grid">
              {villaDetails.rooms.map((room, index) => (
                <RoomCard key={room.id} room={room} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Indoor & Outdoor Living</h2>
            <div className="rooms-grid">
              {villaDetails.commonAreas.map((space, index) => (
                <motion.div
                  key={space.id}
                  className="room-card glass"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="room-img-wrapper">
                    <motion.img
                      src={space.image}
                      alt={space.name}
                      className="room-img"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="room-body">
                    <h3>{space.name}</h3>
                    <p>{space.description}</p>
                    {space.highlights && (
                      <ul className="tags">
                        {space.highlights.map((highlight) => (
                          <motion.li key={highlight} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="rooms-booking-cta glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="rooms-booking-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="rooms-booking-badge">EXCLUSIVE STAY</span>
              <h2>Reserve Aroma Villas</h2>
              <h3>Secure the Entire Estate for Your Group</h3>
            </motion.div>
            <div className="rooms-booking-buttons">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button onClick={openModal} className="btn-primary">
                  Book the Villa
                </button>
                <p>Enjoy a seamless private booking experience with flexible check-in arrangements and concierge support.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/contact" className="btn-secondary">
                  Talk to Our Team
                </Link>
                <p>Need bespoke services or event planning? Message us for tailored arrangements before you arrive.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Private Villa FAQs
          </motion.h2>
          <motion.p
            className="lead"
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to know about reserving the whole property, from inclusions to special services.
          </motion.p>

          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                className="faq-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
