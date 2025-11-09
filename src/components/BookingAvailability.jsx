// src/components/BookingAvailability.jsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Mock data for demonstration
const mockBookedDates = [
  { start: '2025-12-20', end: '2025-12-27' },
  { start: '2026-01-05', end: '2026-01-15' }
].map(range => ({
  start: new Date(range.start),
  end: new Date(range.end)
}));

export default function BookingAvailability() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');

  const isDateBooked = (date) => {
    return mockBookedDates.some(booking => {
      return date >= booking.start && date <= booking.end;
    });
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setBookingStatus('');

    if (start && end) {
      // Check if any date in range is booked
      const isRangeAvailable = !Array.from(
        { length: (end - start) / (1000 * 60 * 60 * 24) + 1 },
        (_, i) => {
          const currentDate = new Date(start);
          currentDate.setDate(start.getDate() + i);
          return isDateBooked(currentDate);
        }
      ).some(Boolean);

      if (!isRangeAvailable) {
        setBookingStatus('error');
      } else {
        setBookingStatus('success');
      }
    }
  };

  return (
    <div className="booking-availability">
      <h3>Check Availability</h3>
      <div className="date-picker-wrapper">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          excludeDateIntervals={mockBookedDates.map(booking => ({
            start: booking.start,
            end: booking.end
          }))}
          filterDate={date => !isDateBooked(date)}
          selectsRange
          inline
        />
      </div>
      
      {bookingStatus === 'error' && (
        <div className="booking-status error">
          <p>Selected dates are not available. Please choose different dates.</p>
        </div>
      )}
      
      {bookingStatus === 'success' && (
        <div className="booking-status success">
          <p>Your selected dates are available!</p>
          <p>{startDate?.toDateString()} to {endDate?.toDateString()}</p>
          <button 
            className="btn-primary" 
            onClick={() => alert('Proceeding to booking...')}
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}