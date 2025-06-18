
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeItemFromCart } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
   // below the is the name of list in store.js
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const [total,setTotal]=useState(0)
   const getTotal=()=>{
    let sum=0;
    cart.forEach((item)=>{
      sum=sum+item.price
    })
    setTotal(sum)
   }
   useEffect(()=>{
    getTotal();
   },[])
   const cart = useSelector((state) => state.cartItems);
   console.log("cart items");
   console.log(cart);
   const checkout=()=>{
    alert("YOUR ORDER PLACED SUCCESSFULLY")
    dispatch(emptyCart())
    navigate('/')
   }

  return(
   <>

   <div className='container p-5' style={{margintop:'100px'}}>
   {
        cart.length>0?
        <div className='row w-100'>
        <div className='col-md-6 col-lg-6'>
  
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((item,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img style={{width:'50px'}} src={item.image}alt="" /></td>
                  <td>&#x20B9; {item.price}</td>
                  <td>
                   <Button onClick={()=>dispatch(removeItemFromCart(item.id))} variant='outline-danger'>
                   <i class="fa-solid fa-trash"></i>

                   </Button>
                   
                  </td>
                  </tr>
                ))
              }
             
            </tbody>
          </table>
          </div>
          <div className='col-md-4 col-lg-4'>
              <div className='border shadow p-3'>
                <h3>CART SUMMARY</h3>
                <h5>Total Number Of Products: <span className='fw-bolder fs-5 text-warning'>{cart.length}</span></h5>
                <h5>Total Price: <span>&#x20B9;{total}</span></h5>
                <button className='btn btn-success rounded w-100 mt-3' onClick={checkout}>CHECKOUT</button>
              </div>
          </div>
        </div>:
        <div>
          <div className='d-flex justify-content-center align-items-center flex-column'>

<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXMOPtj5puK4zSIYeoL630nttlEi_Aafm4A&s'></img>
<h3 className='text-danger mt-3 '>
Your  cart is empty
</h3>

<Link to={'/'}>
<button className='btn btn-success mt-3 '> <i class="fa-solid fa-arrow-left"></i>Back To Home</button>
</Link>



</div>
        </div>
      
            }
    </div >
   
   
            
    </>         
  )
}

export default Cart
