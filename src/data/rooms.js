import room1 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.49.jpeg'
import room2 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.50.jpeg'
import room3 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.51.jpeg'
import room4 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.52.jpeg'
import room5 from '../assets/images/bic20251101WhatsApp Image 2025-10-28 at 21.42.53.jpeg'

const galleryImages = [room1, room2, room3, room4, room5]

export const villaDetails = {
  id: 'villa-main',
  name: 'Aroma Villas Exclusive',
  basePrice: 450, // Nightly rate for the entire villa in USD
  images: galleryImages,
  description: 'Experience luxury and privacy in our exclusive beachside villa. Perfect for families, groups, or private events.',
  capacity: {
    bedrooms: 5,
    maxGuests: 12,
    bathrooms: 5
  },
  features: [
    '5 Luxury Bedrooms',
    'Private Pool',
    'Fully Equipped Kitchen',
    'Dining Area for 12 Guests',
    'Spacious Living Room',
    'Garden & Gazebo',
    'High-Speed Wi-Fi',
    'Air Conditioning Throughout',
    '24/7 Security',
    'Private Beach Access',
    'Daily Housekeeping',
    'Outdoor BBQ Area'
  ],
  rooms: [
    {
      id: 'master-suite',
      name: 'Master Suite',
      description: 'Expansive primary suite with panoramic sea views and private terrace seating.',
      beds: 'King Size Bed',
      image: room1,
      highlights: ['Ocean-view balcony', 'Spa-style ensuite bathroom', 'Walk-in wardrobe']
    },
    {
      id: 'guest-suite-1',
      name: 'Guest Suite 1',
      description: 'Bright double room overlooking the tropical gardens with ensuite bathroom.',
      beds: 'Queen Size Bed',
      image: room2,
      highlights: ['Garden outlook', 'Dedicated workspace', 'Rainfall shower']
    },
    {
      id: 'guest-suite-2',
      name: 'Guest Suite 2',
      description: 'Poolside bedroom with private entrance ideal for couples seeking privacy.',
      beds: 'Queen Size Bed',
      image: room3,
      highlights: ['Direct pool access', 'Private lounging deck', 'Ensuite bathroom']
    },
    {
      id: 'guest-room-1',
      name: 'Family Room 1',
      description: 'Charming twin room with flexible bed configuration perfect for families.',
      beds: 'Two Single Beds',
      image: room4,
      highlights: ['Convertible twin beds', 'Shared family bathroom', 'Garden veranda']
    },
    {
      id: 'guest-room-2',
      name: 'Family Room 2',
      description: 'Light-filled bedroom close to the garden path leading to the beach.',
      beds: 'Two Single Beds',
      image: room5,
      highlights: ['Easy beach access', 'Ample storage', 'Calming decor']
    }
  ],
  commonAreas: [
    {
      id: 'living-area',
      name: 'Living Area',
      description: 'Spacious open-plan living room with plush seating and smart entertainment system.',
      image: room3,
      highlights: ['65" smart TV', 'Indoor-outdoor flow', 'Curated art pieces']
    },
    {
      id: 'kitchen-dining',
      name: 'Kitchen & Dining',
      description: 'Modern kitchen fully equipped for private chefs with a large dining setting for twelve.',
      image: room2,
      highlights: ['Chef-grade appliances', 'Breakfast bar', 'Wine cooler']
    },
    {
      id: 'pool-garden',
      name: 'Pool & Garden',
      description: 'Private swimming pool surrounded by tropical landscaping and daybeds.',
      image: room4,
      highlights: ['Heated pool lighting', 'Sun loungers & umbrellas', 'Lush landscaping']
    },
    {
      id: 'outdoor-space',
      name: 'Outdoor Lounge',
      description: 'Multiple shaded terraces, BBQ station, and gazebo ideal for sunset gatherings.',
      image: room5,
      highlights: ['Gazebo with lounge seating', 'Built-in BBQ', 'Ambient evening lighting']
    }
  ]
}
