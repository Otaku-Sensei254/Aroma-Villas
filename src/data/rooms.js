import room1 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.49.jpeg'
import room2 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.50.jpeg'
import room3 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.51.jpeg'
import room4 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.52.jpeg'
import room5 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.53.jpeg'

export const rooms = [
  {
    id: 'rm1',
    name: 'Sea Breeze Suite',
    type: 'double',
    basePrice: 140,
    image: room1,
    description: 'Spacious suite with double bed, pool view and balcony.',
    features: ['Double Bed', 'Ensuite Bathroom', 'AC', 'Fast Wi‑Fi']
  },
  {
    id: 'rm2',
    name: 'Coral Room',
    type: 'double',
    basePrice: 135,
    image: room2,
    description: 'Bright double with garden access near the gazebo.',
    features: ['Double Bed', 'Ensuite Bathroom', 'AC', 'Gazebo Nearby']
  },
  {
    id: 'rm3',
    name: 'Palm Deluxe',
    type: 'single',
    basePrice: 110,
    image: room3,
    description: 'Cozy room with private bath and work desk.',
    features: ['Queen Bed', 'Ensuite Bathroom', 'AC', 'Wi‑Fi']
  },
  {
    id: 'rm4',
    name: 'Lagoon Nook',
    type: 'single',
    basePrice: 105,
    image: room4,
    description: 'Minimal modern room facing the pool.',
    features: ['Queen Bed', 'Ensuite Bathroom', 'AC', 'Pool Access']
  },
  {
    id: 'rm5',
    name: 'Sunrise Studio',
    type: 'single',
    basePrice: 115,
    image: room5,
    description: 'Bright room with large windows, near the beach path.',
    features: ['Queen Bed', 'Ensuite Bathroom', 'AC', '600m to Beach']
  }
]
