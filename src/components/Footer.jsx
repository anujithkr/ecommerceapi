import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="mt-5 glass-panel mx-3 mb-3 border-0 overflow-hidden">
      <div style={{ background: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.05), transparent)' }}>
        <Container>
          <Row className="py-5 gy-4">
            <Col lg={4} md={6} className="text-center text-md-start">
              <Link to={'/'} className="d-flex align-items-center text-decoration-none mb-4 justify-content-center justify-content-md-start">
                <i className="fa-solid fa-cart-shopping primary-gradient fs-4 me-3"></i>
                <span className="text-white fw-bold fs-3" style={{ letterSpacing: '2px' }}>EKART</span>
              </Link>
              <p className="text-muted small lh-lg" style={{ maxWidth: '300px' }}>
                Your destination for next-generation shopping. Discover curated excellence and unparalleled tech-lifestyle integration.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-5 mt-4">
                <i className="fa-brands fa-instagram text-primary hover-glow cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter text-primary hover-glow cursor-pointer"></i>
                <i className="fa-brands fa-discord text-primary hover-glow cursor-pointer"></i>
                <i className="fa-brands fa-github text-primary hover-glow cursor-pointer"></i>
              </div>
            </Col>
            
            <Col lg={2} md={6} className="text-center text-md-start">
               <h6 className="text-white fw-bold mb-4 tracking-widest small">PLATFORM</h6>
               <ul className="list-unstyled text-muted small d-flex flex-column gap-2">
                  <li><Link to={'/'} className="text-decoration-none text-muted hover-glow">Marketplace</Link></li>
                  <li><Link to={'/wishlist'} className="text-decoration-none text-muted hover-glow">Wishlist</Link></li>
                  <li><Link to={'/cart'} className="text-decoration-none text-muted hover-glow">My Cart</Link></li>
                  <li className="hover-glow cursor-pointer">Member Portal</li>
               </ul>
            </Col>

            <Col lg={2} md={6} className="text-center text-md-start">
               <h6 className="text-white fw-bold mb-4 tracking-widest small">RESOURCES</h6>
               <ul className="list-unstyled text-muted small d-flex flex-column gap-2">
                  <li className="hover-glow cursor-pointer">Documentation</li>
                  <li className="hover-glow cursor-pointer">Guides & API</li>
                  <li className="hover-glow cursor-pointer">Legal Center</li>
                  <li className="hover-glow cursor-pointer">Support Hub</li>
               </ul>
            </Col>
            
            <Col lg={4} md={6} className="text-center text-md-end">
              <h6 className="text-white fw-bold mb-3 tracking-widest small">STAY CONNECTED</h6>
              <p className="text-muted small mb-4">Join our elite circle for early access and tech insights.</p>
              <div className="d-flex glass-panel p-1" style={{ borderRadius: '50px' }}>
                <input type="email" className="bg-transparent border-0 text-white py-2 px-4 w-100" placeholder="your@email.com" style={{ outline: 'none', fontSize: '0.85rem' }} />
                <button className="premium-btn py-2 px-4">JOIN</button>
              </div>
            </Col>
          </Row>
          <div className="border-top border-white border-opacity-5 py-4 text-center">
            <p className="text-white-50 small mb-0" style={{ letterSpacing: '2px' }}>
              &copy; 2026 EKART ECOSYSTEM. BUILT WITH INNOVATION.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer

