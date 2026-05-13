import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItemFromWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

function Wishlist() {
  const wishlistArray = useSelector(state => state.wishListItems)
  const dispatch = useDispatch()

  const handleWishlist = (item) => {
    dispatch(addToCart(item))
    dispatch(removeItemFromWishlist(item.id))
    toast.success("Item added to cart")
  }

  const handleRemove = (id) => {
    dispatch(removeItemFromWishlist(id))
    toast.error("Item removed from wishlist")
  }

  return (
    <Container className="py-5 animate-fade">
      <div className="d-flex justify-content-between align-items-center mb-5">
         <h2 className="text-white fw-bold m-0 stagger-1">My Wishlist</h2>
         <span className="glass-panel px-3 py-1 text-primary small fw-bold stagger-1">{wishlistArray.length} ITEMS</span>
      </div>

      <Row className='g-4'>
        {
          wishlistArray?.length > 0 ? (
            wishlistArray.map((item, index) => (
              <Col key={item.id} sm={12} md={6} lg={4} xl={3} className={`animate-fade stagger-${(index % 3) + 1}`}>
                <Card className='premium-card h-100 border-0 bg-transparent'>
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center" style={{ height: '220px', borderRadius: '24px 24px 0 0' }}>
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      style={{ objectFit: 'contain', height: '100%' }}
                    />
                  </div>
                  <Card.Body className="glass-panel mt-2 p-4 d-flex flex-column justify-content-between" style={{ borderRadius: '0 0 24px 24px' }}>
                    <div>
                      <Card.Title className="text-white mb-2 fs-6 fw-bold">{item.title.slice(0, 25)}...</Card.Title>
                      <h5 className="text-primary fw-bold mb-4">&#x20B9;{item.price}</h5>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-2'>
                      <button className="btn btn-outline-danger rounded-circle p-2 hover-glow" onClick={() => handleRemove(item.id)} style={{ width: '45px', height: '45px' }}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                      <button className="premium-btn flex-grow-1" onClick={() => handleWishlist(item)}>
                        <i className="fa-solid fa-cart-plus me-2"></i>ADD TO CART
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <div className="glass-panel p-5 d-inline-block mx-auto stagger-2">
                <div className="bg-primary bg-opacity-10 rounded-circle p-4 mb-4 mx-auto" style={{ width: '120px', height: '120px' }}>
                  <i className="fa-solid fa-heart-circle-xmark text-primary display-4 mt-1"></i>
                </div>
                <h3 className="text-white mb-3">Your wishlist is empty</h3>
                <p className="text-muted mb-4">Explore our exclusive collections and save your favorites here.</p>
                <Link to={'/'}>
                  <button className="premium-btn">
                    <i className="fa-solid fa-arrow-left me-2"></i>GO SHOPPING
                  </button>
                </Link>
              </div>
            </div>
          )
        }
      </Row>
    </Container>
  )
}

export default Wishlist
