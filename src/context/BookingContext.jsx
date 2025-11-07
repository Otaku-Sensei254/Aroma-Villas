import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // currency: 'USD' or 'KES'
  const [currency, setCurrency] = useState(() => {
    // Try to get stored currency preference, default to USD
    const stored = localStorage.getItem('currency')
    return stored || 'USD'
  })

  const toggleCurrency = () => {
    const newCurrency = currency === 'USD' ? 'KES' : 'USD'
    setCurrency(newCurrency)
    // Store the preference
    localStorage.setItem('currency', newCurrency)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <BookingContext.Provider value={{ isModalOpen, openModal, closeModal, currency, setCurrency, toggleCurrency }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}




