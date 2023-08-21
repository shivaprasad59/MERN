import React from 'react'
import { useForm } from 'react-hook-form'

function BuyItem() {
  
  let {register,handleSubmit,formState:{errors}}=useForm()
  const productBought=(obj)=>{

  }  
  return (
    <div>
        <div className="container bg-dark">
            <form >
                <div>
                  <label htmlFor="Address" className="form-label">Provide Delivery Address</label>
                  <input type="text"  id="Address" className="form-control" {...register("Address")}/>  
                </div>
                <div>
                    <label htmlFor="Phno" className="form-label">Provide Phone Number</label>
                    <input type="text"  id="phno" className="form-control" {...register("phno")} />
                </div>
                <div>
                    <label htmlFor="DeliveryInstructions" className="form-label">Do you Want to give any delivery instructions</label>
                    <input type="text"  id="DeliveryInstructions" className="form-control" {...register("DI")} placeholder='Deliver After 6..etc' />
                </div>
                {/* <div className='form-check' >
                    <label htmlFor="PaymentMethod" className="form-switch">PaymentMethod</label>
                    {/* <input type="checkbox"  id="PaymentMethod" className="form-check-inline" >UPI</input>
                    {/* <input type="checkbox"  id="PaymentMethod" className="form-check-inline" >UPI</input> 
                     {/* <input type="checkbox"  id="PaymentMethod" className="form-check-inline" >UPI</input> 
                </div> */}
                <div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default BuyItem