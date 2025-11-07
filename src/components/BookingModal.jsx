import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { villaDetails } from '../data/rooms'
import { calculateStayCost, formatPrice } from '../utils/pricing'
import { useBooking } from '../context/BookingContext'

export default function BookingModal({ isOpen, onClose }) {
  const { currency } = useBooking()
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    paymentMethod: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  const bookingCost = useMemo(() => {
    if (formData.checkIn && formData.checkOut) {
      return calculateStayCost({
        startDate: formData.checkIn,
        endDate: formData.checkOut,
        basePrice: villaDetails.basePrice
      })
    }
    return { nights: 0, total: 0, deposit: 0 }
  }, [formData.checkIn, formData.checkOut])

  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', description: '50% deposit required' },
    { id: 'mpesa', name: 'M-Pesa', icon: '📱', description: 'Instant mobile payment' },
    { id: 'airtel', name: 'Airtel Money', icon: '💳', description: 'Quick mobile payment' }
  ]

  const handleChange = (field) => (event) => {
    const value = field === 'guests' ? parseInt(event.target.value || '0', 10) : event.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="booking-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="booking-modal"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="booking-modal-close" onClick={onClose}>
            ✕
          </button>

          <div className="booking-modal-header">
            <h2>Book Your Stay</h2>
            <p>Reserve the entire Aroma Villas estate exclusively for your group.</p>
          </div>

          <form onSubmit={handleSubmit} className="booking-modal-form">
            <div className="form-group">
              <label>Villa</label>
              <div className="booking-villa-card glass" style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.08)' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{villaDetails.name}</h3>
                <p style={{ margin: '0 0 0.75rem 0', color: 'var(--ink-muted)' }}>{villaDetails.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontWeight: 600 }}>{villaDetails.capacity.bedrooms} Bedrooms</span>
                  <span style={{ fontWeight: 600 }}>{villaDetails.capacity.bathrooms} Bathrooms</span>
                  <span style={{ fontWeight: 600 }}>Up to {villaDetails.capacity.maxGuests} Guests</span>
                </div>
                <div style={{ marginTop: '0.75rem', fontWeight: 700 }}>
                  {formatPrice(villaDetails.basePrice, currency)} per night · Exclusive hire
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange('checkIn')}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange('checkOut')}
                  required
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <input
                type="number"
                min="1"
                max={villaDetails.capacity.maxGuests}
                value={formData.guests}
                onChange={handleChange('guests')}
                required
              />
              <small style={{ color: 'var(--ink-muted)' }}>Maximum {villaDetails.capacity.maxGuests} guests per stay.</small>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                required
                placeholder="+254 XXX XXX XXX"
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <div className="payment-methods">
                {paymentMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    className={`payment-method-card ${formData.paymentMethod === method.id ? 'selected' : ''}`}
                    onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: method.id }))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="payment-icon">{method.icon}</div>
                    <div className="payment-details">
                      <h4>{method.name}</h4>
                      <p>{method.description}</p>
                    </div>
                    {formData.paymentMethod === method.id && (
                      <motion.div className="payment-check" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Special Requests (Optional)</label>
              <textarea
                value={formData.specialRequests}
                onChange={handleChange('specialRequests')}
                rows={4}
                placeholder="Any special requests or requirements..."
              />
            </div>

            {formData.checkIn && formData.checkOut && bookingCost.nights > 0 && (
              <motion.div className="booking-summary glass" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h3>Booking Summary</h3>
                <div className="summary-row">
                  <span>Villa:</span>
                  <strong>{villaDetails.name}</strong>
                </div>
                <div className="summary-row">
                  <span>Nights:</span>
                  <strong>{bookingCost.nights}</strong>
                </div>
                <div className="summary-row">
                  <span>Rate per night:</span>
                  <strong>{formatPrice(villaDetails.basePrice, currency)}</strong>
                </div>
                <div className="summary-row">
                  <span>Total:</span>
                  <strong>{formatPrice(bookingCost.total, currency)}</strong>
                </div>
                <div className="summary-row">
                  <span>Deposit (50%):</span>
                  <strong>{formatPrice(bookingCost.deposit, currency)}</strong>
                </div>
                <div className="summary-row">
                  <span>Guests:</span>
                  <strong>{formData.guests}</strong>
                </div>
                <div className="summary-row">
                  <span>Stay includes:</span>
                  <strong>Full exclusive use of the villa</strong>
                </div>
                <div className="summary-note">
                  <p>50% deposit required upon booking</p>
                  <p>Balance due on check-in</p>
                </div>
              </motion.div>
            )}

            <div className="booking-modal-actions">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={!formData.paymentMethod}>
                Confirm Booking
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

