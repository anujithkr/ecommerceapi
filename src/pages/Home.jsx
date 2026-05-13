import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Home() {
  const allProducts = useFetch('https://fakestoreapi.com/products');
  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addToCart(item))
    toast.success("Item added to cart")
  }

  const handleWishlist = (item) => {
    dispatch(addToWishlist(item))
    toast.info("Item added to wishlist")
  }

  return (
    <Container fluid className="px-4 py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 pb-4 animate-fade">
        <div className="d-inline-block px-3 py-1 mb-3 glass-panel" style={{ borderRadius: '100px' }}>
          <span className="text-primary text-uppercase small fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>
            <i className="fa-solid fa-bolt-lightning me-2"></i>NEXT-GEN SHOPPING
          </span>
        </div>
        <h1 className="text-white display-2 mb-3 fw-bold stagger-1">Elevate Your Lifestyle</h1>
        <p className="text-muted fs-5 mx-auto mb-4 stagger-2" style={{ maxWidth: '700px' }}>
          Explore our curated collection of high-end essentials. Tech, fashion, and lifestyle products redefined for the modern age.
        </p>
        <div className="mx-auto stagger-3" style={{ width: '80px', height: '4px', background: 'var(--primary)', borderRadius: '2px' }}></div>
      </div>

      <div className="container-xl">
        <Row className='g-4'>
          {
            allProducts.length > 0 ? (
              allProducts.map((item, index) => (
                <Col key={item.id} sm={12} md={6} lg={4} xl={3} className={`animate-fade stagger-${(index % 3) + 1}`}>
                  <Card className='premium-card h-100 border-0 bg-transparent'>
                    <div className="bg-white p-4 d-flex align-items-center justify-content-center" style={{ height: '240px', borderRadius: '24px 24px 0 0' }}>
                      <Card.Img 
                        variant="top" 
                        src={item.image} 
                        style={{ objectFit: 'contain', height: '100%', transition: 'transform 0.5s ease' }}
                        className="product-img"
                      />
                    </div>
                    <Card.Body className="glass-panel mt-2 p-4 d-flex flex-column justify-content-between" style={{ borderRadius: '0 0 24px 24px' }}>
                      <div>
                        <Card.Title className="text-white mb-2 fs-5">{item.title.slice(0, 20)}...</Card.Title>
                        <Card.Text className="text-muted small mb-3">
                          {item.description.slice(0, 60)}...
                        </Card.Text>
                        <h4 className="text-primary fw-bold mb-4">&#x20B9;{item.price}</h4>
                      </div>
                      <div className='d-flex justify-content-between align-items-center gap-2'>
                        <button className="premium-btn-outline flex-grow-1" onClick={() => handleWishlist(item)}>
                          <i className="fa-solid fa-heart me-2"></i>SAVE
                        </button>
                        <button className="premium-btn flex-grow-1 px-2" onClick={() => handleCart(item)}>
                          <i className="fa-solid fa-cart-shopping me-2"></i>BUY
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="text-center w-100 py-5 mt-5">
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h5 className="mt-4 text-muted animate-pulse">Syncing with global inventory...</h5>
              </div>
            )
          }
        </Row>
      </div>


      <style>{`
        .premium-card:hover .product-img {
          transform: scale(1.1) rotate(2deg);
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </Container>
  )
}

export default Home

