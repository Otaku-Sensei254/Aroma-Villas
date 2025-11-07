import { motion } from 'framer-motion'
import { useBooking } from '../context/BookingContext'
import { formatPrice } from '../utils/pricing'

export default function RoomCard({ room, index = 0 }) {
  const { currency } = useBooking()
  return (
    <motion.div
      className="room-card glass"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="room-img-wrapper">
        <motion.img
          src={room.image}
          alt={room.name}
          className="room-img"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="room-body">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <div style={{ marginTop: '8px', fontWeight: 700 }}>{formatPrice(room.basePrice, currency)}/night</div>
        <ul className="tags">
          {room.features.map((f) => (
            <motion.li
              key={f}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {f}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
