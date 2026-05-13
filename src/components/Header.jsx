import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishlistArray = useSelector(state => state.wishListItems)
  const addCart = useSelector(state => state.cartItems)

  return (
    <Navbar expand="lg" className="glass-panel sticky-top mx-3 mt-3 px-4 py-3" style={{ zIndex: 1000 }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to={'/'} className="d-flex align-items-center text-decoration-none">
            <div className="bg-primary bg-opacity-20 rounded-circle p-2 me-3 hover-glow">
              <i className="fa-solid fa-cart-shopping primary-gradient fs-4"></i>
            </div>
            <span className="text-white fw-bold fs-3" style={{ letterSpacing: '2px' }}>EKART</span>
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
           <i className="fa-solid fa-bars-staggered text-white fs-3"></i>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 mt-3 mt-lg-0">
            <Nav.Link as={Link} to={'/wishlist'} className="d-flex align-items-center gap-2 text-white opacity-75 hover-glow px-3 py-2 rounded-pill transition" style={{ border: '1px solid transparent' }}>
              <i className="fa-solid fa-heart text-danger"></i>
              <span className="fw-semibold small">WISHLIST</span>
              <Badge pill bg="primary" className="ms-1" style={{ fontSize: '0.65rem' }}>{wishlistArray.length}</Badge>
            </Nav.Link>
            
            <Nav.Link as={Link} to={'/cart'} className="d-flex align-items-center gap-2 text-white opacity-75 hover-glow px-3 py-2 rounded-pill transition" style={{ border: '1px solid transparent' }}>
              <i className="fa-solid fa-cart-plus text-primary"></i>
              <span className="fw-semibold small">MY CART</span>
              <Badge pill bg="primary" className="ms-1" style={{ fontSize: '0.65rem' }}>{addCart.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

