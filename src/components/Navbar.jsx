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
          <div className="nav-currency" style={{ marginLeft: '10px' }}>
            <button className="currency-btn" onClick={toggleCurrency} aria-label="Toggle currency">
              {currency}
            </button>
          </div>
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
            <motion.div style={{ padding: '12px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button className="currency-btn" onClick={() => toggleCurrency()} style={{ width: '100%' }}>
                Toggle Currency
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
