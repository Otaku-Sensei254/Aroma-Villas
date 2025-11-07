import { addDays, eachDayOfInterval, parseISO } from 'date-fns'

// Define seasonal multipliers by month ranges
// Jan-Feb: 0.9 (low), Mar-May: 1.0 (regular), Jun-Aug: 1.25 (peak), Sep-Nov: 1.0, Dec: 1.4 (holiday)
export function getSeasonalMultiplier(date) {
  const m = (date.getMonth() + 1)
  if (m === 12) return 1.4
  if (m <= 2) return 0.9
  if (m <= 5) return 1.0
  if (m <= 8) return 1.25
  if (m <= 11) return 1.0
  return 1.0
}

export function nightsBetween(start, end) {
  const s = typeof start === 'string' ? parseISO(start) : start
  const e = typeof end === 'string' ? parseISO(end) : end
  return Math.max(0, (e - s) / (1000 * 60 * 60 * 24))
}

export function calculateStayCost({ startDate, endDate, basePrice }) {
  if (!startDate || !endDate || !basePrice) return { nights: 0, total: 0, deposit: 0 }
  const s = typeof startDate === 'string' ? parseISO(startDate) : startDate
  const e = typeof endDate === 'string' ? parseISO(endDate) : endDate
  if (e <= s) return { nights: 0, total: 0, deposit: 0 }

  const days = eachDayOfInterval({ start: s, end: addDays(e, -1) })
  let total = 0
  for (const d of days) {
    total += basePrice * getSeasonalMultiplier(d)
  }
  const deposit = Math.round(total * 0.5)
  return { nights: days.length, total: Math.round(total), deposit }
}

// Currency helpers
// Current exchange rate as of Nov 2025
export const USD_TO_KES = 153.50 // Current rate: 1 USD = 153.50 KES

export function toCurrency(amountUSD, currency = 'USD') {
  if (currency === 'USD') {
    return { 
      amount: Math.round(amountUSD), 
      symbol: '$', 
      code: 'USD',
      formatted: (amount) => `$${amount.toLocaleString()}`
    }
  }
  if (currency === 'KES') {
    return { 
      amount: Math.round(amountUSD * USD_TO_KES), 
      symbol: 'KSh', 
      code: 'KES',
      formatted: (amount) => `KSh ${amount.toLocaleString()}`
    }
  }
  return { 
    amount: Math.round(amountUSD), 
    symbol: '$', 
    code: 'USD',
    formatted: (amount) => `$${amount.toLocaleString()}`
  }
}

export function formatPrice(amountUSD, currency = 'USD') {
  const { amount, formatted } = toCurrency(amountUSD, currency)
  return formatted(amount)
}
