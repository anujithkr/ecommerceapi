import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className='d-flex justify-content-center align-items-center bg-primary' 
   style={{height:'250px',width:'100%'}}>

    <div className='d-flex justify-content-center align-items-evenly'>
      {/* first division */}

      <div className='overview' style={{width:'400px'}}>
        <Link style={{textDecoration:'none',color:'white'}} to={'/'} ><i class="fa-solid fa-cart-shopping fa-bounce me-2 text-warning"></i> <span
        style={{color:'white',fontWeight:'700px'}}> Ekart</span></Link>
        <p style={{color:'white',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ut natus nam ipsa vero aspernatur ullam aliquid rerum, quasi reiciendis distinctio repellendus obcaecati sequi deleniti blanditiis? Natus quo et repellendus.</p>

      </div>
      {/* second division */}
      <div className='links d-flex flex-column ms-3' style={{color:'white'}}>
                <h4>LINKS</h4>
                  <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                    HOME
                  </Link>
                
                  <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>
                    CART
                  </Link>
                  
                  <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>
                    WISHLIST
                  </Link>
              </div>

                   {/* third division */}
                   <div className='links d-flex flex-column ms-5' style={{color:'white'}}>
                <h4>GUIDES</h4>
                  REACT
                  <br />
                  REACT BOOSTRAP
                  <br />
                  FONT AWESOME
              </div>


                {/* fourth division */}
                <div className="contact_us ms-3" style={{color:'white'}}>
                <h4>CONTACT US</h4>
                <div className='d-flex'>
                  <input type="text" placeholder='Enter your Email' className='form-control' />
                  <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
                </div>

                <div className='d-flex justify-content-evenly align-item-center mt-3'>
                  <i class="fa-brands fa-instagram fa-2x"></i>
                  <i class="fa-brands fa-reddit fa-2x"></i>
                  <i class="fa-brands fa-x-twitter fa-2x"></i>
                  <i class="fa-brands fa-whatsapp fa-2x"></i>
                </div>
              </div>




    </div>
   </div>

   <p className='text-center mt-5'>Copy right &#169; 2025 eKart BUILT WITH REACT</p>



  
   </>
  )
}

export default Footer
