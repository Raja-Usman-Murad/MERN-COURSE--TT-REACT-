import React from "react";
import { NavLink } from "react-router-dom";
import errorimage from "../images/error.jpg";

const Error = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <div className="row mx-auto">
              <div className="col-md-12 col-12 align-items-center main_header_left mx-auto">
                <figure>
                  <img
                    src={errorimage}
                    alt="img"
                    className="img-fluid errorpageimg"
                    title="RAJA USMAN"
                  />
                </figure>
                <p>Welcome to Raja's App</p>
                <h1>Opps! Page not found</h1>
                <NavLink to="/">
                  <button className="btn mb-3 btn-success">Go Back</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;
