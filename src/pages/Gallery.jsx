import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import img1 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.49.jpeg'
import img2 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.50 (1).jpeg'
import img3 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.50 (2).jpeg'
import img4 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.50 (3).jpeg'
import img5 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.50.jpeg'
import img6 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.51 (1).jpeg'
import img7 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.51 (2).jpeg'
import img8 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.51.jpeg'
import img9 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.52 (1).jpeg'
import img10 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.52 (2).jpeg'
import img11 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.52 (3).jpeg'
import img12 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.52.jpeg'
import img13 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.53 (2).jpeg'
import img14 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.53.jpeg'
import img15 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.54 (1).jpeg'
import img16 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.54 (2).jpeg'
import img17 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.54 (3).jpeg'
import img18 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.54.jpeg'
import img19 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.55 (1).jpeg'
import img20 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.55 (2).jpeg'
import img21 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.55 (3).jpeg'
import img22 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.55.jpeg'
import img23 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.56 (1).jpeg'
import img24 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.56 (2).jpeg'
import img25 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.56.jpeg'
import img26 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.57 (1).jpeg'
import img27 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.57 (2).jpeg'
import img28 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.57 (3).jpeg'
import img29 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.57.jpeg'
import img30 from '../assets/images/pic2.jpeg'
import img31 from '../assets/images/pick.jpeg'

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="main section">
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              padding: '20px',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90vh',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage]}
                alt={`Aroma Villas ${selectedImage + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '10px'
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Take a look around the pool, rooms, and cozy gazebo.
        </motion.p>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Aroma Villas ${i + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedImage(i)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
