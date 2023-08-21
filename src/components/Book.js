import React from "react";
import image1 from "../images/Kidbook.svg";
import image2 from "../images/Education.svg";
import image3 from "../images/Novels.svg";
import { Link, Outlet } from "react-router-dom";
function Book() {
  return (
    <div>
      <div className="container-md">
        <div className="row text-center">
          <div className="col-sm-4 mb-2">
            <img src={image1} alt="#" className="w-50" />
            <l class="nav-item">
              <Link class="nav-link mt-3" to="kids">
                Kids
              </Link>
            </l>
          </div>
          <div className="col-sm-4 mb-2">
            <img src={image2} alt="#" className="w-50" />
            <l class="nav-item">
              <Link class="nav-link" to="education">
                Education
              </Link>
            </l>
          </div>
          <div className="col-sm-4 mb-2">
            <img src={image3} alt="#" className="w-75" />
            <l class="nav-item">
              <Link class="nav-link" to="novels">
                Novels
              </Link>
            </l>
          </div>
        </div>
      </div>
      <div className="container-md  mt-3">
        <div className="row  ">
       
       <a href="http://localhost:3000/" style={{width:'10%'}} className="btn btn-primary d-block me-auto"   >Home</a>
       <a href="http://localhost:3000/books" style={{width:'10%'}} className="btn btn-success d-block ms-auto"  >Back</a>
       </div>
   </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Book;
