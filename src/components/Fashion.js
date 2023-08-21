import React, { useEffect } from 'react'

import { Link, Outlet } from "react-router-dom";
function Fashion() {
  const ComponentDidMount=()=>
{
   window.scrollTo(0,310);
 }
 useEffect(()=>{
   ComponentDidMount()
 },[])
 
  return (
    <div>
      <div className="container-md mt-5">
        <div className="row text-center">
          <div className="col-sm-4">
           
            <l class="nav-item">
              <Link class="nav-link " to="#">
                Mens Wear
              </Link>
            </l>
          </div>
          <div className="col-sm-4">
           
            <l class="nav-item">
              <Link class="nav-link" to="femaledress">
                Womens Wear
              </Link>
            </l>
          </div>
          <div className="col-sm-4 ">
          
            <l className="nav-item ">
              <Link class="nav-link" to="footwear">
                Footwear
              </Link>
            </l>
            
          </div>
          
        </div>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Fashion