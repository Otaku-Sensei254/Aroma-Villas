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
              Inside the Villa
            </motion.h2>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Five beautifully appointed bedrooms and generous common areas are yours when you reserve Aroma Villas. Every space is included in your private stay.
            </motion.p>
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
