import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { rooms } from '../data/rooms'
import { calculateStayCost } from '../utils/pricing'

export default function BookingModal({ isOpen, onClose, selectedRoomId = null }) {
  const [formData, setFormData] = useState({
    roomId: selectedRoomId || rooms[0].id,
    checkIn: '',
    checkOut: '',
    guests: 1,
    paymentMethod: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  const selectedRoom = rooms.find(r => r.id === formData.roomId)

  // Update room when selectedRoomId changes
  useEffect(() => {
    if (selectedRoomId && selectedRoomId !== formData.roomId) {
      setFormData(prev => ({ ...prev, roomId: selectedRoomId }))
    }
  }, [selectedRoomId, formData.roomId])

  // Calculate booking cost
  const bookingCost = useMemo(() => {
    if (formData.checkIn && formData.checkOut && selectedRoom) {
      return calculateStayCost({
        startDate: formData.checkIn,
        endDate: formData.checkOut,
        basePrice: selectedRoom.basePrice
      })
    }
    return { nights: 0, total: 0, deposit: 0 }
  }, [formData.checkIn, formData.checkOut, selectedRoom])

  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', description: '50% deposit required' },
    { id: 'mpesa', name: 'M-Pesa', icon: '📱', description: 'Instant mobile payment' },
    { id: 'airtel', name: 'Airtel Money', icon: '💳', description: 'Quick mobile payment' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
    // Close modal after submission
    onClose()
    // You can add actual booking logic here
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
            <p>Complete your reservation at Aroma Villas</p>
          </div>

          <form onSubmit={handleSubmit} className="booking-modal-form">
            {/* Room Selection */}
            <div className="form-group">
              <label>Select Room</label>
              <select
                value={formData.roomId}
                onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
                required
              >
                {rooms.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name} - ${room.basePrice}/night
                  </option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  required
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="form-group">
              <label>Number of Guests</label>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                required
              />
            </div>

            {/* Contact Information */}
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="+254 XXX XXX XXX"
              />
            </div>

            {/* Payment Method */}
            <div className="form-group">
              <label>Payment Method</label>
              <div className="payment-methods">
                {paymentMethods.map(method => (
                  <motion.div
                    key={method.id}
                    className={`payment-method-card ${formData.paymentMethod === method.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="payment-icon">{method.icon}</div>
                    <div className="payment-details">
                      <h4>{method.name}</h4>
                      <p>{method.description}</p>
                    </div>
                    {formData.paymentMethod === method.id && (
                      <motion.div
                        className="payment-check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="form-group">
              <label>Special Requests (Optional)</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                rows={4}
                placeholder="Any special requests or requirements..."
              />
            </div>

            {/* Booking Summary */}
            {selectedRoom && formData.checkIn && formData.checkOut && bookingCost.nights > 0 && (
              <motion.div
                className="booking-summary glass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3>Booking Summary</h3>
                <div className="summary-row">
                  <span>Room:</span>
                  <strong>{selectedRoom.name}</strong>
                </div>
                <div className="summary-row">
                  <span>Nights:</span>
                  <strong>{bookingCost.nights}</strong>
                </div>
                <div className="summary-row">
                  <span>Rate per night:</span>
                  <strong>${selectedRoom.basePrice}</strong>
                </div>
                <div className="summary-row">
                  <span>Total:</span>
                  <strong>${bookingCost.total}</strong>
                </div>
                <div className="summary-row">
                  <span>Deposit (50%):</span>
                  <strong>${bookingCost.deposit}</strong>
                </div>
                <div className="summary-row">
                  <span>Guests:</span>
                  <strong>{formData.guests}</strong>
                </div>
                <div className="summary-note">
                  <p>50% deposit required upon booking</p>
                  <p>Balance due on check-in</p>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
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

