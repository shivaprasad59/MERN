import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import image1 from "../images/Mobilessvg.svg";
import image2 from "../images/Computersvg.svg";
import image3 from "../images/Otherselesvg.svg";
function Electronics() {
  let [Bool,SetBool]=useState(false);
  const [clickCount,setClickCount]=useState(0);
  const isBegin=()=>{
     if(clickCount==2){
       SetBool(false);
     }
     else{
        setClickCount(clickCount+1);
     }
  }
  return (
    <div>
    {Bool && <p>*You are at Electronics Section Click home to go to home</p>}
    <div className="container-md ">
      <div className="row  text-center mt-5">
        <div className="col-sm-4">
          <img src={image1} alt="#" className="w-50 d-block mx-auto" />
           <l className="nav-item">
              <Link className="nav-link mt-3" to="mobiles">
                Mobile
              </Link>
            </l>
        </div>
        <div className="col-sm-4">
          <img src={image2} alt="#" className="w-50 d-block mx-auto" />
          <l className="nav-item">
              <Link className="nav-link mt-4" to="televisions">
                Computers
              </Link>
            </l>
        </div>
        <div className="col-sm-4">
          <img src={image3} alt="#" className="w-50 d-block mx-auto" />
          <l className="nav-item">
              <Link className="nav-link mt-4" to="eleothers">
                Others
              </Link>
            </l>
        </div>
      </div>
      <div className="container-md ">
      <div className="row  ">
       
          <a href="http://localhost:3000/" style={{width:'10%'}} className="btn btn-primary d-block me-auto"   >Home</a>
          <a href="http://localhost:3000/electronics" style={{width:'10%'}} className="btn btn-success d-block ms-auto" onClick={isBegin} >Back</a>
        
      </div>
    </div>
      <div>
        <Outlet />
      </div>
    </div>
    </div>
  );
}

export default Electronics;
