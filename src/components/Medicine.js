import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import image1 from "../images/Medicine.svg";
import image2 from "../images/consultation.svg";
function Medicine() {
  
  return (
    <div>
      <div className="container-md m-5 p-5 mx-auto">
        <div className="row text-center mt-5">
          <div className="col-sm-6 ">
            <img src={image1} alt="#" className="w-50" />
            <l class="nav-item ">
              <Link class="nav-link mt-3"  to="buymedicine" >
                Buy Medicine
              </Link>
            </l>
          </div>
          <div className="col-sm-6 ">
            <img src={image2} alt="#" className="w-50" />
            <l class="nav-item">
            <Link class="nav-link mt-1" to="onlineappointment"  >
              Get an online appointment
            </Link>
          </l>
          </div>
        </div>
      </div>
      <div className="container-md  mt-3">
        <div className="row  ">
       
       <a href="http://localhost:3000/" style={{width:'10%'}} className="btn btn-primary d-block me-auto"   >Home</a>
       <a href="http://localhost:3000/medicine" style={{width:'10%'}} className="btn btn-success d-block ms-auto"  >Back</a>
       </div>
   </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Medicine;
