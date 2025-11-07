import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0])
  const { openModal } = useBooking()

  const faqs = [
    {
      question: "What is the check-in and check-out time?",
      answer: "Check-in begins at 2:00 PM, and check-out is by 10:00 AM. Early check-in or late check-out may be arranged based on availability."
    },
    {
      question: "Do you offer airport pick-up services?",
      answer: "Yes, we provide airport pick-up services for our guests. Please inform us in advance to arrange your transfer."
    },
    {
      question: "What amenities are included in the rooms?",
      answer: "Our rooms include free Wi-Fi, air conditioning, premium linens, a private bathroom, and a cozy seating area for your convenience."
    }
  ]

  return (
    <main className="main">
      {/* Hero Section */}
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
              OUR LUXURIOUS ROOMS
            </motion.h3>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore the exquisite rooms at Aroma Villas, each designed for ultimate comfort and relaxation. Discover detailed descriptions and secure booking options for your perfect stay.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="section rooms-section">
        <div className="container">
          <div className="rooms-grid">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedRoom(room)}
                style={{ cursor: 'pointer' }}
              >
                <RoomCard room={room} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Room Details Section */}
      <section className="section featured-room-section">
        <div className="container">
          <motion.div
            className="featured-room glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="featured-room-header">
              <span className="featured-room-badge">NEW</span>
              <h2>Luxury {selectedRoom.name}</h2>
              <p className="lead">
                Experience unparalleled comfort in our {selectedRoom.name}, complete with breathtaking views and upscale amenities.
              </p>
            </div>

            <div className="featured-room-content">
              <div className="featured-room-image">
                <img src={selectedRoom.image} alt={selectedRoom.name} />
              </div>

              <div className="featured-room-details">
                <div className="featured-room-section-block">
                  <h3>Amenities</h3>
                  <p>The suite features a {selectedRoom.type === 'double' ? 'king-size bed' : 'queen bed'}, spacious en-suite bathroom, private balcony with views, high-speed Wi‑Fi, and air conditioning for your ultimate relaxation.</p>
                  <ul className="amenities-list">
                    {selectedRoom.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="featured-room-info">
                  <div className="featured-room-info-item">
                    <span className="info-label">Room Type</span>
                    <span className="info-value">{selectedRoom.name}</span>
                  </div>
                  <div className="featured-room-info-item">
                    <span className="info-label">Starting Rate</span>
                    <span className="info-value">${selectedRoom.basePrice}.0</span>
                  </div>
                </div>

                <button onClick={() => openModal(selectedRoom.id)} className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '24px' }}>
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA Section */}
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
              <span className="rooms-booking-badge">NEW</span>
              <h2>BOOK YOUR STAY</h2>
              <h3>Secure Your Dream Getaway</h3>
            </motion.div>
            <div className="rooms-booking-buttons">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button onClick={() => openModal()} className="btn-primary">
                  Book Now
                </button>
                <p>Experience seamless booking for your preferred room with our intuitive and user-friendly platform. Secure your stay effortlessly.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/rooms" className="btn-secondary">
                  View Rooms
                </Link>
                <p>Enjoy peace of mind with our secure payment gateway, ensuring your transactions are protected and private. Book with confidence.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions About Aroma Villas
          </motion.h2>
          <motion.p
            className="lead"
            style={{ textAlign: 'center', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get quick answers to your inquiries about our tranquil beachside retreat, including services, bookings, and amenities. We're here to support your stay at Aroma Villas.
          </motion.p>
          
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
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
