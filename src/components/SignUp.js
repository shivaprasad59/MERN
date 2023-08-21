import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
   let {register,handleSubmit,formState:{errors}}=useForm()
   let navigate=useNavigate()
   let [samePass,setsamePass]=useState(false);
   let signup=async (userobj)=>{
    if(userobj.password!=userobj.cpassword){
        setsamePass(true)
    }
    else{
    await axios.post('http://localhost:8080/users/signup',userobj)
    .then((response)=>{
        console.log(response.data)
        let status=response.data.payload
        alert(response.data.message)
        if(status===true){
            navigate('/')
        }
    })
   .catch((err)=>alert(err)); 
}
   }
   let resetter=()=>{
    setsamePass(false)
   }

 
    return(
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 mx-auto">
            <div className="display-1 text-primary">SignUp Here</div>
        <hr/>
            <form onSubmit={handleSubmit(signup)}>
                <div className="m-3">
                    {/* name */}
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" {...register("name",{required:true})} />
                    {errors.name?.type==="required" && <p className="text-danger">*Enter name</p> }
                </div>
                <div className="m-3">
                    {/* email */}
                    <label htmlFor="mail" className="form-label">Email Address</label>
                    <input type="email"  id="mail" className="form-control" {...register("mail",{required:true,minLength:11})} />
                    {errors.mail?.type==="required" && <p className="text-danger">*Enter Email Address</p>}
                    {errors.mail?.type==="minLength" && <p className="text-danger">*INVALID EMAIL</p> }
                </div>
                <div className="m-3">
                    {/* password */}
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" {...register("password",{required:true,minLength:8})} onClick={resetter} />
                    {errors.password?.type==="required" && <p className="text-danger">*Enter password</p>}
                    {errors.password?.type==="minLength" && <p className="text-danger">*Must contain atleast 8 characters</p> }
                </div>
                <div className="m-3">
                    {/*confirm password */}
                    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
                    <input type="password" id="cpassword" className="form-control" {...register("cpassword",{required:true})} onClick={resetter} />
                     {errors.cpassword?.type==="required" && <p className="text-danger">*Enter password again</p>}
                   
                </div>
                <div className="m-3">
                    {/* signup button */}
                    <button type="submit" className="btn btn-info d-block mx-auto">SignUp</button>
                </div>
                {/* password in valid match error */}
                {samePass &&
                <div>
                    <p className="h-4 text-dark fw-bold  text-center">*password doesnot match!</p>
                </div>
                }
            </form>
            </div>
        </div>
       
        </div>
    )
}

export default SignUp;
