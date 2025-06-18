import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeItemFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {

  // below the wishlistitems is the name of list in store.js
  const wishlistArray = useSelector((state) => state.wishListItems);
  console.log("wishlist items");
  console.log(wishlistArray);

  const dispatch = useDispatch()
  const handleWishlist=(data)=>{
    dispatch(addToCart(data));
    dispatch(removeItemFromWishlist(data.id))
  }

  return (
    <>
      <Row className='m-5'>
        {
          wishlistArray.length > 0 ?
            wishlistArray.map(item => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-4'>
                <Card style={{ width: '18rem' }} className='p-4'>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'>Price:&#x20B9;{item.price}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant="outline-danger"  onClick={()=>dispatch(removeItemFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success"  onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>

                  </Card.Body>
                </Card>

              </Col>

            )) :
             <div style={{height:'50vh'}}>


              <div className='d-flex justify-content-center align-items-center flex-column'>

              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXMOPtj5puK4zSIYeoL630nttlEi_Aafm4A&s'></img>
              <h3 className='text-danger mt-3 '>
              Your wishlist cart is empty
              </h3>
              <Link to={'/'}>
              <button className='btn btn-success mt-3 '> <i class="fa-solid fa-arrow-left"></i>Back To Home</button>
              </Link>
              </div>
            </div>
        }
      </Row>
    </>

  )
}

export default Wishlist
