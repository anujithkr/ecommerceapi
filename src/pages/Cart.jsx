import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeItemFromCart } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartItems);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cart.reduce((acc, item) => acc + item.price, 0).toFixed(2))
    }
  }, [cart])

  const checkout = () => {
    toast.success("YOUR ORDER PLACED SUCCESSFULLY")
    dispatch(emptyCart())
    navigate('/')
  }


  return (
    <Container className="py-5 animate-fade">
      <div className="mb-5">
         <h2 className="text-white fw-bold stagger-1">Shopping Cart</h2>
         <p className="text-muted stagger-2">Review your selected items and proceed to secure checkout.</p>
      </div>

      {
        cart.length > 0 ? (
          <Row className="gx-5">
            <Col lg={8}>
              <div className="glass-panel overflow-hidden stagger-2">
                <Table responsive borderless className="m-0 text-white align-middle">
                  <thead className="bg-white bg-opacity-5">
                    <tr>
                      <th className="px-4 py-3 small text-muted text-uppercase tracking-widest">PRODUCT</th>
                      <th className="py-3 small text-muted text-uppercase tracking-widest text-center">PRICE</th>
                      <th className="py-3 small text-muted text-uppercase tracking-widest text-center">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((item, index) => (
                        <tr key={item.id} className="border-bottom border-white border-opacity-5">
                          <td className="px-4 py-4">
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded p-2 me-3" style={{ width: '70px', height: '70px' }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.image} alt="" />
                              </div>
                              <div>
                                <h6 className="mb-1 text-white fw-bold" style={{ fontSize: '0.95rem' }}>{item.title.slice(0, 40)}...</h6>
                                <span className="text-muted small">#{item.id}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <span className="text-primary fw-bold">&#x20B9;{item.price}</span>
                          </td>
                          <td className="py-4 text-center">
                            <button onClick={() => dispatch(removeItemFromCart(item.id))} className="btn btn-link text-danger p-0 hover-glow">
                              <i className="fa-solid fa-trash-can fs-5"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </div>
              <div className="mt-4 stagger-3">
                 <Link to={'/'} className="text-primary text-decoration-none small fw-bold">
                    <i className="fa-solid fa-arrow-left me-2"></i>CONTINUE SHOPPING
                 </Link>
              </div>
            </Col>

            <Col lg={4} className="mt-5 mt-lg-0">
              <div className="glass-panel-heavy p-4 stagger-3">
                <h5 className="text-white fw-bold mb-4">ORDER SUMMARY</h5>
                <div className="d-flex justify-content-between mb-3 text-muted">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>&#x20B9;{total}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 text-muted">
                  <span>Shipping</span>
                  <span className="text-primary small fw-bold">FREE</span>
                </div>
                <div className="border-top border-white border-opacity-10 my-4 pt-4 d-flex justify-content-between align-items-end">
                   <span className="text-white fw-bold">TOTAL AMOUNT</span>
                   <h3 className="primary-gradient m-0 fw-bold">&#x20B9;{total}</h3>
                </div>
                <button className="premium-btn w-100 py-3 mt-4" onClick={checkout}>
                   <i className="fa-solid fa-lock me-2 small"></i>SECURE CHECKOUT
                </button>
                <div className="mt-4 text-center">
                   <img src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" alt="Payment Methods" style={{ height: '30px', filter: 'brightness(0) invert(1) opacity(0.5)' }} />
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div className="text-center w-100 py-5">
            <div className="glass-panel p-5 d-inline-block mx-auto stagger-2">
              <div className="bg-primary bg-opacity-10 rounded-circle p-4 mb-4 mx-auto" style={{ width: '120px', height: '120px' }}>
                <i className="fa-solid fa-cart-shopping text-primary display-4 mt-1"></i>
              </div>
              <h3 className="text-white mb-3">Your shopping cart is empty</h3>
              <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
              <Link to={'/'}>
                <button className="premium-btn">
                  <i className="fa-solid fa-arrow-left me-2"></i>START SHOPPING
                </button>
              </Link>
            </div>
          </div>
        )
      }
    </Container>
  )
}

export default Cart

