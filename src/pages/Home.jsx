import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import BookingCTA from '../components/BookingCTA'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

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
              Our Rooms
            </motion.h2>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Five beautiful en-suite rooms — two with double beds — all with AC, fast internet, and access to the pool and gazebo.
            </motion.p>
            <div className="rooms-grid">
              {rooms.slice(0, 3).map((r, i) => (
                <RoomCard key={r.id} room={r} index={i} />
              ))}
            </div>
            <motion.div
              className="rooms-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/rooms" className="btn-primary">View All Rooms</Link>
            </motion.div>
          </div>
        </section>
        <BookingCTA />
      </main>
    </>
  )
}
