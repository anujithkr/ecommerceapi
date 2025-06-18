import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Header() {

  const wishlistArray = useSelector(state=>state.wishListItems)
  const addCart = useSelector(state =>state.cartItems)



  return (
    <>
     <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand >
      <i class="fa-solid fa-cart-shopping fa-bounce me-2"></i>
      < Link to={'/'} style={{color:'#fff',textDecoration:'none'}}>Ekart</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link >

             <Link to={'/wishlist'} style={{color:'#fff',textDecoration:'none'}}>WISHLIST</Link>
              <Badge bg="secondary" className='ms-1'>{wishlistArray.length}</Badge>

             </Nav.Link>
          <Nav.Link >

          <Link Link to={'/cart'} style={{color:'#fff',textDecoration:'none'}}>  CART</Link>
          <Badge bg="secondary" className='ms-1'>{addCart.length}</Badge>

            </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}

export default Header
