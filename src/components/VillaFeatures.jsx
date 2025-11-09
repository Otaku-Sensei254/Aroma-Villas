// src/components/VillaFeatures.jsx
import { 
  FaWifi, FaSwimmingPool, FaParking, FaUtensils, 
  FaTv, FaSnowflake, FaFan, FaFireExtinguisher, 
  FaFirstAid, FaSmokingBan, FaBell, FaUmbrellaBeach, 
  FaKey, FaMapMarkerAlt, FaBed, FaShower, FaCar 
} from 'react-icons/fa';

const features = [
  { icon: <FaBed />, text: '5 bedrooms, 7 beds' },
  { icon: <FaShower />, text: '5 bathrooms' },
  { icon: <FaSwimmingPool />, text: 'Private pool' },
  { icon: <FaParking />, text: 'Free parking on premises' },
  { icon: <FaWifi />, text: 'Fast wifi' },
  { icon: <FaUtensils />, text: 'Fully equipped kitchen' },
  { icon: <FaTv />, text: 'Smart TV' },
  { icon: <FaSnowflake />, text: 'Air conditioning' },
  { icon: <FaFan />, text: 'Ceiling fans' },
  { icon: <FaUmbrellaBeach />, text: '500m to Diani Beach' },
  { icon: <FaCar />, text: 'Car recommended' },
  { icon: <FaKey />, text: 'Self check-in' },
  { icon: <FaBell />, text: 'Carbon monoxide alarm' },
  { icon: <FaFireExtinguisher />, text: 'Fire extinguisher' },
  { icon: <FaFirstAid />, text: 'First aid kit' },
  { icon: <FaSmokingBan />, text: 'No smoking' }
];

export default function VillaFeatures() {
  return (
    <div className="villa-features">
      <h3>What this place offers</h3>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-icon">{feature.icon}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}