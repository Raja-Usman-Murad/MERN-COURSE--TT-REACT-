import React, { useState, useEffect } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({});
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data, "data from contact front end");
      setUserData(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error, "unauthorized no token");
    }
  };
  useEffect(() => {
    userContact();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* TOP  */}
            <div className="row mt-5">
              <div
                className=" col-md-3 col-10 mx-auto d-flex flex-row justify-start p-3 mt-3"
                id="contact_top_divs"
              >
                <i className="zmdi zmdi-smartphone-android zmd zmdi-hc-2x"></i>
                <div className="d-flex flex-column justify-content-center align-items-start ml-3">
                  <p>Phone</p>
                  <p>03175001384</p>
                </div>
              </div>
              <div
                id="contact_top_divs"
                className=" col-md-3 col-10 mx-auto d-flex flex-row justify-content-start p-2 mt-3"
              >
                <i className="zmdi zmdi-email zmdi-hc-2x"></i>
                <div className="d-flex flex-column justify-content-center align-items-start ml-3">
                  <p>Email</p>
                  <p>usmankiyani501@gmail.com</p>
                </div>
              </div>
              <div
                id="contact_top_divs"
                className=" col-md-3 col-10 mx-auto d-flex flex-row justify-content-start p-2 mt-3"
              >
                <i className="zmdi zmdi-facebook zmdi-hc-2x"></i>
                <div className="d-flex flex-column justify-content-center align-items-start ml-3">
                  <p>Facebook</p>
                  <p>Raja Usman Kiyani</p>
                </div>
              </div>
            </div>
            {/* Center */}
            <div className="row mt-5">
              <div className="col-md-8 mx-auto">
                <h1 className="text-center">
                  Get in <span id="logohalfcolorchange">Touch</span>
                </h1>
                <form className="mt-3" method="GET">
                  <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                    <input
                      value={userData.name}
                      type="text"
                      className="form-control "
                      id="contactName"
                      name="contactName"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                    <input
                      value={userData.email}
                      type="email"
                      className="form-control "
                      id="conatctEmail"
                      name="conatctEmail"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                    <input
                      value={userData.phone}
                      type="number"
                      className="form-control "
                      id="conatctphone"
                      name="conatctphone"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="">
                    <textarea
                      name="contactMessage"
                      id="contactMessage"
                      cols="30"
                      rows="10"
                      className=" w-100 form-control w-50"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group ">
                    <button type="submit" className="btn btn-primary mt-4">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
