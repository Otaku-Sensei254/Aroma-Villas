import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import aboutImage from '../assets/images/pick.jpeg'

export default function About() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'General Manager',
      description: 'With over 10 years in hospitality, Sarah ensures every guest experiences exceptional service.'
    },
    {
      name: 'David Lee',
      role: 'Head Chef',
      description: 'David brings coastal flavors to life, crafting unforgettable culinary experiences.'
    },
    {
      name: 'Maria Garcia',
      role: 'Guest Relations',
      description: 'Maria makes every guest feel at home, creating personalized experiences.'
    }
  ]

  const testimonials = [
    {
      quote: "I had an unforgettable stay at Aroma Villas. The view of the beach and the warm hospitality made it a perfect retreat. Highly recommended!",
      author: "Emily Stone",
      role: "Travel Blogger"
    },
    {
      quote: "Aroma Villas exceeded all my expectations. From the serene atmosphere to the exceptional service, everything was spot on.",
      author: "Michael Roberts",
      role: "Business Consultant"
    },
    {
      quote: "If you are looking for a peaceful getaway, Aroma Villas is the place to be. The staff is friendly, and the beachside location is unbeatable.",
      author: "Sophia James",
      role: "Freelance Writer"
    }
  ]

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={aboutImage} alt="Aroma Villas" />
        </div>
        <div className="container about-hero-content">
          <motion.div
            className="about-hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-hero-subtitle"
            >
              OUR STORY
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="about-hero-title"
            >
              AROMA VILLAS
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-hero-subsection"
            >
              <h4>OUR MISSION</h4>
              <Link to="/booking" className="btn-primary">Book Your Stay</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="section">
        <div className="container">
          <div className="about-content-grid">
            <motion.div
              className="about-text-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Journey and Purpose</h2>
              <p className="lead">
                Aroma Villas was founded on a vision to create a serene beachside escape in Diani, offering unparalleled comfort and tranquility. Our mission is to provide guests with an unforgettable experience, blending luxury with the natural beauty of the Kenyan coast.
              </p>
              <h3>The Genesis of Aroma Villas</h3>
              <p>
                Our story began with a passion for hospitality and a desire to share the breathtaking beauty of Diani. We meticulously designed Aroma Villas to be a sanctuary where every detail contributes to a sense of peace and rejuvenation for our guests.
              </p>
              <ul className="feature-list">
                <li>Visionary founders</li>
                <li>Coastal inspiration</li>
                <li>Dedication to comfort</li>
              </ul>
              <p>
                From the initial concept to the final touches, every decision was guided by a commitment to excellence and a deep respect for the local environment. We aimed to create a destination that feels like a home away from home, yet offers the luxury of a world-class resort.
              </p>
              <blockquote>
                "Our greatest joy is seeing guests find their perfect escape, creating cherished memories that last a lifetime."
              </blockquote>
            </motion.div>
            
            <motion.div
              className="about-image-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-image glass">
                <img src={aboutImage} alt="Aroma Villas Entrance" />
                <p>The tranquil entrance to Aroma Villas, welcoming guests to paradise.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <motion.div
            className="mission-content glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Core Mission</h2>
            <p className="lead">
              At Aroma Villas, our mission is to deliver exceptional service, foster a welcoming atmosphere, and ensure every guest experiences the magic of Diani. We strive to exceed expectations, making each stay unique and memorable.
            </p>
            <div className="mission-items">
              <div className="mission-item">
                <span className="mission-icon">✨</span>
                <div>
                  <h4>Exceptional guest service</h4>
                  <p>We believe in creating more than just a place to stay; we aim to build lasting relationships with our guests and contribute positively to the Diani community.</p>
                </div>
              </div>
              <div className="mission-item">
                <span className="mission-icon">🌱</span>
                <div>
                  <h4>Sustainable practices</h4>
                  <p>Our team is dedicated to making your visit seamless and enjoyable while respecting the local environment.</p>
                </div>
              </div>
              <div className="mission-item">
                <span className="mission-icon">🤝</span>
                <div>
                  <h4>Community engagement</h4>
                  <p>The impact of our mission is reflected in the glowing reviews and repeat visits from our cherished guests.</p>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '32px', color: 'var(--ink-muted)' }}>
              We are proud to be a part of their travel stories and to offer a haven where relaxation and adventure coexist harmoniously. Through our commitment to quality and guest satisfaction, Aroma Villas has become a beloved destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What our guests share:
          </motion.h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="testimonial-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <motion.div
            className="team-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="team-badge">NEW</span>
            <h2>MEET OUR EXPERTS</h2>
            <p className="lead">
              Discover the dedicated individuals who make Aroma Villas an exceptional destination. Our team is committed to providing unparalleled service and a memorable stay.
            </p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="team-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="team-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
                <Link to="/contact" className="team-link">
                  LEARN MORE →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Testimonials Header */}
      <section className="section testimonials-header-section">
        <div className="container">
          <motion.div
            className="testimonials-header glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Guest Testimonials</h2>
            <p className="lead">
              Aromatic Experiences, Trusted Stays
            </p>
            <p style={{ marginTop: '20px', color: 'var(--ink-muted)' }}>
              Discover the achievements and memories shared by our valued guests, reflecting the serene beauty and outstanding service of Aroma Villas. Join our growing community of satisfied visitors indulging in tranquil beachside retreats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section connect-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Connect with Aroma Villas
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We are here to assist with your queries about Aroma Villas, from reservations to information about our serene beachside escape in Diani.
          </motion.p>
          
          <div className="connect-grid">
            {[
              { title: 'Reservations', email: 'reservations@aromavillas.com' },
              { title: 'Guest Relations', email: 'guests@aromavillas.com' },
              { title: 'Press', email: 'press@aromavillas.com' },
              { title: 'General Inquiry', email: 'info@aromavillas.com' }
            ].map((contact, i) => (
              <motion.div
                key={i}
                className="connect-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3>{contact.title}</h3>
                <p style={{ color: 'var(--ink-muted)', marginBottom: '12px' }}>
                  Diani Beach Road, Diani, Kenya
                </p>
                <a href={`mailto:${contact.email}`} style={{ color: 'var(--primary-light)', textDecoration: 'none' }}>
                  {contact.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
