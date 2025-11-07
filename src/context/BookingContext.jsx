import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRoomId, setSelectedRoomId] = useState(null)
  // currency: 'USD' or 'KES'
  const [currency, setCurrency] = useState('USD')

  const toggleCurrency = () => setCurrency((c) => (c === 'USD' ? 'KES' : 'USD'))

  const openModal = (roomId = null) => {
    setSelectedRoomId(roomId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedRoomId(null)
  }

  return (
    <BookingContext.Provider value={{ isModalOpen, openModal, closeModal, selectedRoomId, currency, setCurrency, toggleCurrency }}>
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



