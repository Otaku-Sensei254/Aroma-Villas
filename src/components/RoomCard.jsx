import { motion } from 'framer-motion'

export default function RoomCard({ room, index = 0 }) {
  const tagList = room.highlights || room.features || []
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
        <div style={{ marginTop: '8px', fontWeight: 600, color: 'var(--primary-light)' }}>{room.beds || 'Included in your villa stay'}</div>
        {tagList.length > 0 && (
          <ul className="tags">
            {tagList.map((f) => (
              <motion.li
                key={f}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {f}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
