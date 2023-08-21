import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login(){
    //functions
    let [validobj,setvalidobj]=useState([])
    let [currentuser,setcurrentuser]=useState([])
    let navigate=useNavigate()
    let createnewaccount=()=>{
        navigate('/signUp')
    } 
  

    let {register,handleSubmit,formState:{errors}}=useForm()
    let [passState,setPassState]=useState(false) 
    const resetter=()=>{
        setPassState(false)
        
    }
    const forlogin= (userobj)=>{
        console.log('hii')
          axios.post('http://localhost:8080/users/login',userobj)
          .then((response)=>{
            console.log(response.data)
            let status=response.data.status
            if(status===true){
                let x={statusID:1,status:true}
                axios.post('http://localhost:8080/users/setStatus',x)
                .then(response=>{})
                .catch(err=>{})
                navigate('/')
            }
            else{
                alert("invalid username or password ")
            }
          })
          .catch(err=>alert(err));
    }
    return(
        <div className="container-md m-5 p-5  mx-auto ">
        <div className="row">
            <div className="col-lg-5 mx-auto">
            <div className="display-1 text-primary">Login Here</div>
        <hr/>
            <form  onSubmit={handleSubmit(forlogin)}>
                <div className="m-3">
                    {/* name as input */}
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"  id="name" className="form-control" {...register("name",{required:true})} onClick={resetter} />
                    {errors.name?.type==='required' && <p className="text-danger">*Enter Name</p>}
                   
                </div>
                <div className="m-3">
                    {/* password as input */}
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"  id="password" className="form-control" {...register("password",{required:true,minLength:8})} onClick={resetter} />
                    {errors.password?.type==='required' && <p className="text-danger">*Please provide password</p> }
                    {errors.password?.type === 'minLength' && <p className="text-danger">*Password must contain 8 characters</p>  }
                </div>
                <div className="m-3">
                    <button type="submit" className="btn btn-success d-block mx-auto"  >Login</button>
                </div>
                {passState &&
                <div>
                    <h2 className="text-danger">Invalid Username or password</h2>
                </div>
                }
            </form>
            <div className="text-center mt-3">
                <a href="#" className="text-center">Need help?</a>
            </div>
            <div className="text-center mt-3">
                <p className="fw-bold text-primary">Donot have an Account?<br/> click the button below Create one Now! </p>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-secondary " onClick={createnewaccount}>Sign Up</button>
            </div>
            </div>
        </div>
        
        </div>
    )
}

export default Login;