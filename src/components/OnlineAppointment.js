import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import image from '../images/onlineappointment.svg'
function OnlineAppointment() {
  let {register,handleSubmit, formState: { errors },} = useForm();
  let [detailsFilled,setdetailsFilled]=useState(false)
  let findADoctor=()=>{
    setdetailsFilled(true);
  }
  const ComponentDidMount=()=>
  {
     window.scrollTo(0,500);
   }
   useEffect(()=>{
     ComponentDidMount()
   },[])
   
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div>
            {!detailsFilled && <div>
              <div className="display-1 text-primary">
                Fill in these details
              </div>
              <hr />
              <form onSubmit={handleSubmit(findADoctor)}>
                <div className="m-3">
                  <label htmlFor="Name" className="form-label">
                    Enter full Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="fname"
                    className="form-control"
                    {...register("fname", { required: true })}
                  />
                  {errors.fanme?.type === "required" && (
                    <p className="text-danger">*Enter Name</p>
                  )}
                </div>
                <div className="m-3">
                  <label htmlFor="ContactNumber" className="form-label">
                    Give contact number
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="ContactNumber"
                    className="form-control"
                    {...register("ContactNumber", { required: true })}
                  />
                  {errors.ContactNumber?.type === "required" && (
                    <p className="text-danger">
                      *please provide a contact number{" "}
                    </p>
                  )}
                </div>
                
                <div className="m-3">
                  <label htmlFor="problem" className="form-label">
                    Problems you have
                  </label>
                  <textarea
                    className="form-control"
                    id="Address"
                    cols="80"
                    rows="2"
                    {...register("problem")}
                  ></textarea>
                  <div className="form-text">You can choose to give a brief discription about the problem 
                  you have or you can choose the type of doctor in the below feild. you can even choose both
                  but choosing atleast one is mandatory</div>
                </div>
                <div className="m-3">
                  <label htmlFor="Doctor" className="form-label">
                    Type of doctor you would like to see
                  </label>
                  <input type="text" id="Doctor" className="form-control" />
                </div>
                <div className="m-3">
                  <button
                    type="submit"
                    className="btn btn-success d-block mx-auto"
                  >
                    find a Doctor
                  </button>
                </div>
              </form>
              </div>
            }
            {detailsFilled &&
            <div>
            <div className="row">
              <div className="col-lg-6">
              <div>
                <img src={image} alt="#" className="rounded thumbnail w-75" />
              </div>
              </div>
              <div className="col-lg-6 d-block my-auto">
                <p className="lead">
                  We have uploaded your information and we will notify you when ever the doctor is ready
                </p>
              </div>
            </div>
             
            </div>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineAppointment;
