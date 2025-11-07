import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useBooking } from '../context/BookingContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms' },
  // Rates removed from navbar and included on Booking page
  { to: '/gallery', label: 'Gallery' },
  { to: '/booking', label: 'Booking' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currency, toggleCurrency } = useBooking()

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="nav-glass"
    >
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
          Aroma Villas
        </Link>
        <nav className="desktop-nav">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {n.label}
            </NavLink>
          ))}
          <motion.div className="nav-currency" style={{ marginLeft: '10px' }}>
            <motion.button
              className="currency-btn glass"
              onClick={toggleCurrency}
              aria-label="Toggle currency"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--primary-light)',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{currency === 'USD' ? '$' : 'KES'}</span>
              {currency}
            </motion.button>
          </motion.div>
        </nav>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((n, i) => (
              <motion.div
                key={n.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink
                  to={n.to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {n.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div 
              style={{ padding: '12px' }} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: navItems.length * 0.05 }}
            >
              <motion.button 
                className="currency-btn glass"
                onClick={toggleCurrency}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--primary-light)',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{currency === 'USD' ? '$' : 'KES'}</span>
                Switch to {currency === 'USD' ? 'KES' : 'USD'}
              </motion.button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
