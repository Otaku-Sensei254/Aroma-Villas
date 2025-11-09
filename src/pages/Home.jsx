import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import BookingCTA from '../components/BookingCTA'
import RoomCard from '../components/RoomCard'
import { villaDetails } from '../data/rooms'

export default function Home() {
  return (
    <>
  <Hero />
  <Features />
  <main className="main">
        
        <Stats />
        <section className="section rooms-preview">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What this place offers
            </motion.h2>
            
            <div className="features-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
              margin: '2rem 0'
            }}>
              <div className="feature-item">5 bedrooms, 7 beds</div>
              <div className="feature-item">5 bathrooms</div>
              <div className="feature-item">Private pool</div>
              <div className="feature-item">Free parking on premises</div>
              <div className="feature-item">Fast wifi</div>
              <div className="feature-item">Fully equipped kitchen</div>
              <div className="feature-item">Smart TV</div>
              <div className="feature-item">Air conditioning</div>
              <div className="feature-item">Ceiling fans</div>
              <div className="feature-item">500m to Diani Beach</div>
              <div className="feature-item">Car recommended</div>
              <div className="feature-item">Self check-in</div>
              <div className="feature-item">Carbon monoxide alarm</div>
              <div className="feature-item">Fire extinguisher</div>
              <div className="feature-item">First aid kit</div>
              <div className="feature-item">No smoking</div>
            </div>

            <motion.div 
              className="villa-description" 
              style={{
                background: 'var(--surface)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)',
                margin: '2rem 0'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>About this villa</h2>
              <p>
                Escape to our luxurious 5-bedroom villa in Diani, just 700m from the pristine beach. 
                Set in a private compound with manicured lawns, a sparkling pool, and spacious living 
                areas, this elegant retreat is perfect for families and groups seeking comfort and style.
              </p>
              <p>
                The villa features modern amenities including air conditioning, high-speed WiFi, and 
                a fully equipped kitchen. Relax in the outdoor lounge area or take a short walk to 
                the beach for a day of sun and surf.
              </p>
            </motion.div>
            
            <div className="rooms-grid">
              {villaDetails.rooms.slice(0, 3).map((suite, i) => (
                <RoomCard key={suite.id} room={suite} index={i} />
              ))}
            </div>
            <motion.div
              className="rooms-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/rooms" className="btn-primary">Explore the Villa</Link>
            </motion.div>
          </div>
        </section>
        <BookingCTA />
      </main>
    </>
  )
}
