import { Routes, Route } from 'react-router-dom'
import { BookingProvider, useBooking } from './context/BookingContext'
import BookingModal from './components/BookingModal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Rates from './pages/Rates'
import Gallery from './pages/Gallery'
import Location from './pages/Location'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

function AppContent() {
  const { isModalOpen, closeModal, selectedRoomId } = useBooking()

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} selectedRoomId={selectedRoomId} />
    </div>
  )
}

function App() {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  )
}

 export default App
