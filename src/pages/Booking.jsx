import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { villaDetails } from '../data/rooms'
import { calculateStayCost, formatPrice } from '../utils/pricing'
import { useBooking } from '../context/BookingContext'

const rows = [
  { label: 'Jan – Feb (Low)', m: 0.9, color: '#22d3ee' },
  { label: 'Mar – May', m: 1.0, color: '#06b6d4' },
  { label: 'Jun – Aug (Peak)', m: 1.25, color: '#f59e0b' },
  { label: 'Sep – Nov', m: 1.0, color: '#06b6d4' },
  { label: 'Dec (Holiday)', m: 1.4, color: '#f59e0b' }
]

export default function Booking() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [guestCount, setGuestCount] = useState(1)
  const { currency } = useBooking()

  const result = useMemo(() => (
    calculateStayCost({ startDate, endDate, basePrice: villaDetails.basePrice })
  ), [startDate, endDate])

  return (
    <main className="main section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Booking
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Reserve the entire Aroma Villas estate with a 50% deposit via bank transfer or approved mobile payment. Balance is due before or on check-in.
        </motion.p>

        <motion.div
          className="glass"
          style={{ padding: '32px', display: 'grid', gap: '24px', maxWidth: '880px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="villa-overview-inline" style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <h3 style={{ margin: 0 }}>{villaDetails.name}</h3>
              <p style={{ margin: '0.25rem 0 0', color: 'var(--ink-muted)' }}>{villaDetails.description}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--primary-light)', fontWeight: 600 }}>
              <span>{villaDetails.capacity.bedrooms} Bedrooms</span>
              <span>{villaDetails.capacity.bathrooms} Bathrooms</span>
              <span>Up to {villaDetails.capacity.maxGuests} Guests</span>
            </div>
            <div style={{ fontWeight: 700 }}>{formatPrice(villaDetails.basePrice, currency)} per night · Exclusive hire</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <label>
              <div>Check‑in</div>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label>
              <div>Check‑out</div>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            <label>
              <div>Guests</div>
              <input
                type="number"
                min="1"
                max={villaDetails.capacity.maxGuests}
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value || '0', 10))}
              />
            </label>
          </div>

          <div style={{ display: 'grid', gap: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' }}>
              <span style={{ color: 'var(--ink-muted)' }}>Nights</span>
              <strong style={{ color: 'var(--primary-light)' }}>{result.nights}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem' }}>
              <span style={{ color: 'var(--ink-muted)' }}>Total</span>
              <strong style={{ color: 'var(--ink)', fontSize: '1.3rem' }}>{formatPrice(result.total, currency)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' }}>
              <span style={{ color: 'var(--ink-muted)' }}>Deposit (50%)</span>
              <strong style={{ color: 'var(--primary-light)' }}>{formatPrice(result.deposit, currency)}</strong>
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--ink-muted)' }}>
              Booking includes private use of all bedrooms, pool, garden, and common areas for up to {villaDetails.capacity.maxGuests} guests.
            </div>
            <a className="btn-primary" href="#" style={{ textAlign: 'center' }}>
              Proceed to Reserve
            </a>
          </div>
          <small style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', textAlign: 'center', display: 'block' }}>
            After submitting, you'll receive account details for the deposit and confirmation instructions.
          </small>
        </motion.div>

        <motion.div
          className="glass"
          style={{ padding: '24px', marginTop: '24px', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ marginTop: 0 }}>Seasonal Multipliers</h3>
          <p style={{ marginTop: 0, color: 'var(--ink-muted)' }}>Nightly rates adjust by season. Multipliers below are applied to the base nightly rate of the entire villa.</p>
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 6px', borderBottom: i < rows.length - 1 ? '1px solid var(--glass-border)' : 'none' }}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + i * 0.03 }}
            >
              <div style={{ fontWeight: 600 }}>{r.label}</div>
              <div style={{ fontWeight: 800, color: r.color }}>{`×${r.m}`}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
