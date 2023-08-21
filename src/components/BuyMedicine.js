import React, {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import image from "../images/Medicineordered.svg";

function BuyMedicine () {
 const ComponentDidMount=()=>
 {
    window.scrollTo(0,500);
  }
  useEffect(()=>{
    ComponentDidMount()
  },[])
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [IsPlaced, setIsplace] = useState(false);
  let [orderDetails, setorderDetails] = useState({
    name: "",
    contactnumber: "",
    address: "",
  });
  let orderPlaced = (obj) => {
    setIsplace(true);
    setorderDetails({
      ...orderDetails,
      name: obj.fname,
      contactnumber: obj.ContactNumber,
      address: obj.Address,
    });
  };
  let resetter=()=>{
      setIsplace(false);
  }
  return (
    <div>
      <div className="container-md">
        <div className="row ">
          <div className="col-lg-8 mx-auto">
            {!IsPlaced && (
              <div>
                <div className="display-1 text-primary">
                  Fill in these details
                </div>
                <hr />
                <form onSubmit={handleSubmit(orderPlaced)}>
                  <div className="m-3">
                    <div className="form-label fw-bold" htmlFor="priscription">
                      Upload your priscription
                    </div>
                    <input
                      type="file"
                      id="priscription"
                      className="form-control"
                      {...register("priscription", { required: false })}
                    />
                    {errors.priscription?.type === "required" && (
                      <p className="text-danger">Mandatory field</p>
                    )}
                  </div>
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
                    <label htmlFor="Alternate" className="form-label">
                      Alternate mobile number
                    </label>
                    <input
                      type="text"
                      id="Alternate"
                      className="form-control"
                      {...register("Alternate")}
                    />
                  </div>
                  <div className="m-3">
                    <label htmlFor="Address" className="form-label">
                      Delivery Address
                    </label>
                    <textarea
                      className="form-control"
                      id="Address"
                      cols="80"
                      rows="2"
                      {...register("Address", { required: true })}
                    ></textarea>
                    {errors.Address?.type === "required" && (
                      <p className="text-danger">*provide Address</p>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-success d-block mx-auto"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            )}
            {IsPlaced && (
              <div>
                <div className="row ms-4">
                  <div className="col-lg-4"><img src={image} alt="" className="w-75 d-block mt-5" /></div>
                  <div className="col-lg-8">
                    <div className="h2">Order Successfully Placed</div>
                    <h5>Tracking Id: 123-456-789</h5>
                    <p className="lead">
                      Dear <b>{orderDetails.name}</b>, <br /> Your order for
                      medicine is placed Successfully and will be deliverd to{" "}
                      <b>{orderDetails.address}</b>. We will be using{" "}
                      <b>{orderDetails.contactnumber}</b> to get in touch with
                      you <br /> <span className="text-center">Thank You</span>
                    </p>
                  </div>
                </div>
                <div>
                    <button className="btn btn-success" onClick={resetter} >Place another order</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyMedicine;
