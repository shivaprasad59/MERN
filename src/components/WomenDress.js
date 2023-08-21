import React, { useEffect } from 'react'
import dealofday from '../images/dealofdayimg.png'
function WomenDress() {
  const ComponentDidMount=()=>
{
   window.scrollTo(0,310);
 }
 useEffect(()=>{
   ComponentDidMount()
 },[])
    return(
      <div className="container">
         <div className="row">
             <div className="col">
             <div className="card d-flex  m-3 " >
          <img src="https://i.pinimg.com/474x/67/f8/b6/67f8b6791dc20b192dabac88e6a7fceb.jpg" className="card-img-top w-75 mx-auto m-3" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">BOLDNESS WITHIN</h5>
             <p className="card-text"><strike>$1500</strike><b>$1,000</b></p>
             <p className="p-2">Free delivery</p>
             <div className="row">
             <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
             </div>
             <div className="col">
             <div className="card d-flex  m-3">
          <img src="https://usercontent.one/wp/www.hephzee.com/wp-content/uploads/2019/12/787ea55e0eb71090d490c0c88ef5d285.jpg" className="card-img-top w-75 mx-auto m-3" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">ALL TIME BLAZER</h5>
             <p className="card-text"><strike>$2,600</strike><b>$2,300</b></p>
             <p className="p-2" >free delivery</p>
             <div className="row">
             <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
             </div>
             <div className="col">
             <div className="card d-flex m-3">
          <img src="https://i.pinimg.com/originals/1d/b4/d5/1db4d515e3e8523c492c0c79aff69c0e.jpg" className="card-img-top w-50 m-5 mx-auto" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">FLORAL LACE SKIRT</h5>
             <p className="card-text"><strike>$1,600</strike><b>$1,200</b></p>
             <p className="p-2" >free delivery</p>
             <div className="row">
             <div className="col-md-6">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col-md-6">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
             </div>
             <div className="col">
             <div className="card d-flex m-3">
          <img src="https://i.pinimg.com/736x/15/08/de/1508de677f5985560dd41d9a6052be93.jpg" className="card-img-top w-75 m-4 mx-auto" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">WATERFALL HANDS CUTE TOP</h5>
             <p className="card-text"><strike>$1,000</strike><b>$900</b></p>
             <p className="p-2" >free delivery</p>
             <d className="row">
             <div className="col">   <button href="" className="btn btn-primary">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success">Buy Now</button></div>
             </d>
           </div>
         </div>
             </div>
         </div>
         
         <div className="card container mt-3 mb-3  w-100">
           <h5 className="card-header">Deal of the day!</h5>
           <div className="row">
               <div className="col">
                   <img src="https://i.pinimg.com/originals/be/35/82/be3582303faf5a15f2a88513d358fd10.jpg" alt="" className="d-block mx-auto w-50" />
               </div>
               <div className="col">
               <div className="card-body">
          <h5 className="card-title">PROM DRESS</h5>
          <p className="card-text "><strike>$2,700</strike> <b className="h5"> $1,000  </b></p>
          <p>Deal ends today at midnight</p>
          <div className="row text-center">
             <div className="col">   <button href="" className="btn btn-primary">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success">Buy Now</button></div>
             </div>
          </div>
               </div>
               <div className="col"><img src={dealofday} alt="#" className="d-block mx-auto" /></div>
           </div>
          </div>
          <div className="row">
          <div className="col">
             <div className="card d-flex  m-3 " >
          <img src="https://i.pinimg.com/736x/d6/b5/ec/d6b5ecb6ccb58e8ec6a4648d3e647460.jpg" className="card-img-top w-75 mx-auto m-2" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">FLARE PANTS</h5>
             <p className="card-text"><strike>$3,000</strike> <b>$2,500</b> </p>
             <p className="p-2">Free delivery</p>
             <div className="row">
             <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
             </div>
              <div className="col">
              <div className="card d-flex  m-3 " >
          <img src="https://i.pinimg.com/736x/8e/46/7e/8e467eb88c681882bc86a2b000340665.jpg" className="card-img-top w-75 mx-auto m-2" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">CUTE SKIRT</h5>
             <p className="card-text"><strike>$2,100</strike> <b>$1,900</b> </p>
             <p className="p-2">Free delivery</p>
             <div className="row">
             <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
              </div>
              <div className="col">   
              <div className="card d-flex  m-3 " >
          <img src="https://i.pinimg.com/564x/31/69/93/3169934a5e6b3dffc7356879820005ca.jpg" className="card-img-top w-75 mx-auto m-4" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">SWEAT SHIRTS</h5>
             <p className="card-text"><strike>$1,500</strike> <b>$1,300</b> </p>
             <p className="p-2">Free delivery</p>
             <div className="row">
             <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
              </div>
              <div className="col">
              <div className="card d-flex  m-3 " >
          <img src="https://i.pinimg.com/originals/ba/c5/1e/bac51efd99499214eee4807d537f71c2.jpg" className="card-img-top w-75 mx-auto m-2" alt="#"/>
          <div className="card-body">
             <h5 className="card-title">JUMPSUIT</h5>
             <p className="card-text"><strike>$2,900</strike> <b>$2,600</b> </p>
             <p className="p-2">Free delivery</p>
             <div className="row">
             <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
             <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
             </div>
           </div>
         </div>
              </div>
      </div>
      </div>
  )
  
}

export default WomenDress