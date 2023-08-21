import React from "react";
import iamge1 from "../images/fridgesv.jfif";
import image2 from "../images/Acsvg.png";
import image3 from "../images/Fashon.jfif";
import { Link, Outlet } from "react-router-dom";
function HomeandFashion() {
  return (
    <div>
      <div className="container-md mt-5">
        <div className="row text-center">
          <div className="col-sm-4">
            <img src={iamge1} alt="#" />
            <l className="nav-item">
              <Link className="nav-link " to="fridges">
                Fridges
              </Link>
            </l>
          </div>
          <div className="col-sm-4">
            <img src={image2} alt="#" />
            <l className="nav-item">
              <Link className="nav-link" to="airconditioners">
                Air conditioners
              </Link>
            </l>
          </div>
          <div className="col-sm-4 mt-4">
            <img src={image3} alt="#" />
            <div className="mt-3">
            <l className="nav-item ">
              <Link className="nav-link" to="fashion">
                Fashion
              </Link>
            </l>
            </div>
          </div>
          <div className="col">
              
          </div>
        </div>
        <div className="container-md  mt-3">
        <div className="row  ">
       
       <a href="http://localhost:3000/" style={{width:'10%'}} className="btn btn-primary d-block me-auto"   >Home</a>
       <a href="http://localhost:3000/homeandfashion" style={{width:'10%'}} className="btn btn-success d-block ms-auto"  >Back</a>
       </div>
   </div>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default HomeandFashion;
