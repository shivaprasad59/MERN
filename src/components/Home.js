import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [loginStatus, setLoginStatus] = useState(false);

  const didUserLogin = async () => {
    await axios
      .get("http://localhost:8080/users/getStatus")
      .then((response) => {
        setLoginStatus(response.data.payload.status);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    didUserLogin();
  }, []);
  let navigate = useNavigate();
  const loginNow = () => {
    navigate("/login");
  };
  //asdfgh
  let searchByType = (searchObj) => {
    let s = searchObj.searchOption;
    s = s.toLowerCase();
    if (s === "mobiles") {
      navigate("/electronics/mobiles");
    } else if (s === "laptops" || s === "computers") {
      navigate("/electronics/computers");
    } else if (s === "headsets" || s === "head sets") {
      navigate("/electronics/eleothers");
    } else if (s === "fridges") {
      navigate("./homeandfashion/fridges");
    } else if (
      s === "ac" ||
      s === "airconditioner" ||
      s === "air conditioner"
    ) {
      navigate("./homeandfashion/airconditioners");
    } else if (s === "maledress" || s === "male dress") {
      navigate("");
    } else if (s === "femaledress" || s === "female dress") {
      navigate("");
    } else if (s === "books") {
      navigate("/books");
    } else if (s === "novels") {
      navigate();
    } else if (s === "books for kids") {
      navigate();
    } else if (s === "educational books") {
      navigate();
    } else if (s === "doctor appointment") {
      navigate("/medicine/onlineappointment");
    } else if (s === "medicine") {
      navigate("/medicine/buymedicine");
    }
  };
  return (
    <div class="container  m-lg-5">
      <div className="row d-flex justify-content-evenly">
        <div class="col-sm-1 col-lg-2">Contact US</div>
        <div class="col-sm-4 col-lg-6">
          <form onSubmit={handleSubmit(searchByType)}>
            <div class="row">
              <div class="col-11">
                <input
                  type="text"
                  id=""
                  class="form-control rounded"
                  {...register("searchOption")}
                />
              </div>
              <div class="col-1">
                <button type="submit" class="btn btn-primary">
                  search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-auto">
        {loginStatus?
          <div className="row">
            <div class="col-sm-auto text-start col-lg-6">
              <button
                type="submit"
                class="btn btn-secondary"
                onClick={() => navigate("/cart")}
              >
                cart
              </button>
            </div>
            <div class="col-sm-auto text-end col-lg-6">
              <button
                type="submit"
                className="btn btn-danger "
                onClick={()=>{setLoginStatus(false)}}
              >
                logout
              </button>
            </div>
          </div>
          :
          <div>
            <button className="btn btn-success" onClick={loginNow} >Login</button>
          </div>
        }
        </div>
      </div>

      {/* links to electronics,books,home and fashion,medicine */}
      <ul class="nav mx-auto justify-content-evenly m-5">
        <li class="nav-item">
          <Link class="nav-link " to="electronics">
            Electronics
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="homeandfashion">
            Home and Fashion
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="books">
            Books
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="medicine">
            Medicine
          </Link>
        </li>
      </ul>
      <div className="container m-lg-5">
        <div className="display-1 text-center m-5 text-pop-up-top ">
          Todays Trending Deals!!
        </div>
      </div>
      <div className="container m-lg-5">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="card">
                  <img
                    src="https://i.gadgets360cdn.com/products/small/samsung-galaxy-m52-5g-240x180-1631604861.jpg?downsize=*:90"
                    alt=""
                    className="card-img d-block mx-auto thumbnail m-3 w-50"
                  />
                  <div className="card-body">
                    <div className="card-title h5 text-center">
                      {" "}
                      Samsung M52
                    </div>
                    <a
                      href="http://localhost:3000/electronics/mobiles"
                      className="btn-primary btn w-50 d-block mx-auto"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/584179-4-1.jpg"
                    alt=""
                    className="d-block mx-auto thumbnail m-2 p-1"
                  />
                  <div className="card-body">
                    <div className="card-title h5 text-center">Samsung L 3</div>
                    <a
                      href="http://localhost:3000/homeandfashion/fridges"
                      className="btn-primary btn w-50 d-block mx-auto"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="card">
                  <img
                    src="https://assets.mspimages.in/c/tr:w-370,h-330,c-at_max/562285-167-1.jpg"
                    alt="#"
                    className="d-block mx-auto m-5 thumbnail"
                  />
                  <div className="card-body">
                    <div className="card-title h5 text-center">
                      LG 2 Ton 3 Star Window A/C
                    </div>
                    <a
                      href="http://localhost:3000/homeandfashion/airconditioners"
                      className="btn-primary btn w-50 d-block mx-auto"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://i.pinimg.com/474x/67/f8/b6/67f8b6791dc20b192dabac88e6a7fceb.jpg"
                    className="card-img-top w-75 mx-auto m-2 mt-3"
                    alt="#"
                  />
                  <div className="card-body">
                    <div className="card-title h5 text-center">
                      Boldness Within
                    </div>
                    <a
                      href="http://localhost:3000/homeandfashion/fashion/femaledress"
                      className="btn-primary btn w-50 d-block mx-auto"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-lg-5">
        <div className="row ">
          <div className="col-lg col-sm-3">
            <div className="card">
              <img
                src="https://www.91-img.com/pictures/144171-v3-oppo-a53s-5g-mobile-phone-medium-1.jpg?tr=q-80"
                alt="#"
                className="card-img thumbnail w-75 m-1  d-block mx-auto"
              />
              <div className="card-body">
                <div className="card-title h5 text-center">Oppo A53s 5G</div>
                <a
                  href="http://localhost:3000/electronics/mobiles"
                  className="btn btn-primary w-50 d-block mx-auto"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-3">
            <div className="card">
              <img
                src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/582800-28-1.jpg"
                alt="#"
                className="card-img d-block w-75 m-1 mx-auto"
              />
              <div className="card-body">
                <div className="card-title h5 text-center">LG L 4</div>
                <a
                  href="http://localhost:3000/homeandfashion/fridges"
                  className="btn btn-primary w-50 d-block mx-auto"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-3">
            <div className="card">
              <img
                src="https://assets.mspimages.in/c/tr:w-370,h-330,c-at_max/564205-296-1.jpg"
                alt="#"
                className="card-img d-block m-4 p-5 mx-auto"
              />
              <div className="card-body">
                <div className="card-title h5 text-center">
                  Voltas 1.5 Ton 3 Star Split A/C
                </div>
                <a
                  href="http://localhost:3000/homeandfashion/airconditioners"
                  className="btn btn-primary w-50 d-block mx-auto"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-3">
            <div className="card">
              <img
                src="https://usercontent.one/wp/www.hephzee.com/wp-content/uploads/2019/12/787ea55e0eb71090d490c0c88ef5d285.jpg"
                className="card-img-top w-50 mx-auto m-4"
                alt="#"
              />
              <div className="card-body">
                <div className="card-title h5 text-center m-3">
                  ALL TIME BLAZER
                </div>
                <a
                  href="http://localhost:3000/homeandfashion/fashion/femaledress"
                  className="btn btn-primary w-50 d-block mx-auto"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
