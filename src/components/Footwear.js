import React, { useEffect } from 'react'
import dealofday from '../images/dealofdayimg.png'

function Footwear() {
  const ComponentDidMount=()=>
  {
     window.scrollTo(0,310);
   }
   useEffect(()=>{
     ComponentDidMount()
   },[])
    
  return (
    <div className="container">
    <div className="row">
        <div className="col">
        <div className="card d-flex  m-3 " >
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqG-hwQDdeIuif5vTnJUqhMuZ1QtPqboD2jw&usqp=CAU" className="card-img-top w-75  ms-4 me-3 mb-4 mt-4" alt="#"/>
     <div className="card-body">
        <h5 className="card-title">Cute NIKE Shoe's</h5>
        <p className="card-text"><strike>$2,500</strike><b>$2000</b></p>
        <p className="p-2">Free delivery</p>
        <d className="row">
        <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
        </d>
      </div>
    </div>
        </div>
        <div className="col">
        <div className="card d-flex  m-3">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCF1OLEfG6C3QOtLrb-76GFXwR9iXoXtAIuw&usqp=CAU" className="card-img-top w-75 mx-auto me-2 mb-2 mt-3 ms-2" alt="#"/>
     <div className="card-body">
        <h5 className="card-title">Classy High Heels</h5>
        <p className="card-text"><strike>$2,000</strike><b>$1000</b></p>
        <p className="p-2" >free delivery</p>
        <d className="row">
        <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
        </d>
      </div>
    </div>
        </div>
        <div className="col">
        <div className="card d-flex m-3">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfIWif--a9Rgb5C-LNb_Kxyi3zzaGdz4kbg&usqp=CAU" className="card-img-top w-100 rounded p-1 m-4 mx-auto" alt="#"/>
     <div className="card-body">
        <h5 className="card-title">Cute WHite Boots</h5>
        <p className="card-text"><strike>$1,500</strike><b>$1,100</b></p>
        <p className="" >free delivery</p>
        <d className="row">
        <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
        </d>
      </div>
    </div>
        </div>
        <div className="col">
        <div className="card d-flex m-3">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmvrvouiKNhwkqmRm92zS4KyTXUE9JiPy-A&usqp=CAU" className="card-img-top w-100 m-3 mx-auto" alt="#"/>
     <div className="card-body">
        <h5 className="card-title">SKECHERS FOR MEN</h5>
        <p className="card-text"><strike>$1,200</strike><b>$900</b></p>
        <p className="p-2" >free delivery</p>
        <d className="row">
        <div className="col">   <button href="" className="btn btn-primary">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success">Buy Now</button></div>
        </d>
      </div>
    </div>
        </div>
    </div>
    <div className="card container w-100 mt-5 mb-5">
      <h5 className="card-header">Deal of the day!</h5>
      <div className="row">
          <div className="col">
          <img src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="card-img w-50 m-3 d-block mx-auto" />
          </div>
          <div className="col">
          <div className="card-body">
     <h5 className="card-title">BOW DECOR SLIDES</h5>
     <p className="card-text "><strike>$1,500</strike> <b className="h5"> $1000 </b></p>
     <p>Deal ends today at midnight</p>
     <d className="row text-center">
        <div className="col">   <button href="" className="btn btn-primary">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success">Buy Now</button></div>
        </d>
     </div>
          </div>
          <div className="col"><div className="col"><img src={dealofday} alt="#" className="d-block mx-auto" /></div></div>
      </div>
     </div>
     <div className="row">
     <div className="col">
        <div className="card d-flex  m-3 " >
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXANNAWrtGP0htJELetkVCsgC5hZuDKDupw&usqp=CAU" className="card-img-top w-100 mx-auto m-4 p-2" alt="#"/>
     <div className="card-body">
        <h5 className="card-title mt-3 mb-3"> DIVA LACE UP BLOCK HEELS</h5>
        <p className="card-text"><strike>$800</strike> <b>$699</b> </p>
        <p className="p-2 mt3">Free delivery</p>
        <d className="row">
        <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
        </d>
      </div>
    </div>
        </div>
       
         <div className="col">   
         <div className="card d-flex  m-3 " >
         <img src="https://n4.sdlcdn.com/imgs/i/e/q/large/ASIAN-Sneakers-Black-Casual-Shoes-SDL942280399-1-5574e.jpeg" className="card-img-top w-100 mx-auto " alt="#"/>
       <div className="card-body">
        <h5 className="card-title">FALL IN LOVE WITH JORDANS</h5>
        <p className="card-text"><strike>$500</strike> <b>$299</b> </p>
        <p className="p-2">Free delivery</p>
        <d className="row">
        <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
        </d>
      </div>
    </div>
         </div>
         <div className="col">
         <div className="card d-flex  m-3 " >
         <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='card-img-top mt-5 mb-5 p-3' />
    <div className="card-body">
        <h5 className="card-title mt-3 mb-3">CAMOFLAUGE ALL ON</h5>
        <p className="card-text"><strike>$700</strike> <b>$499</b> </p>
        <p className="p-2 mt-1">Free delivery</p>
        <d className="row mt-1 mb-1">
        <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
        <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
        </d>
      </div>
    </div>
         </div>
         <div className="col">
         <div className="card d-flex m-3">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSnvUWUYaKHLIe9qBzSDpmfXmfQREnehH1g&usqp=CAU" alt="#" className='card-img-top w-75 d-block mx-auto mt-4' />
             <div className="card-body">
                <h5 className="card-title">SLIDES </h5>
                <p className="card-text"><strike>$1000</strike> <b>$800</b> </p>
                <p className="p-2">Free delivery</p>
                <d className="row">
                <div className="col">   <button href="" className="btn btn-primary w-100">Add to cart</button></div>
                <div className="col">    <button href="" className="btn btn-success w-100">Buy Now</button></div>
                </d>
              </div>
            </div>
         </div>
     
     </div>
 </div>
  )
}

export default Footwear