import React, { useEffect, useState } from "react";
import myimg from "../images/myimg.jpg";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
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
      history.push("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <form method="GET" className="text-capitalize">
              <div className="row mt-5">
                <div className="col-md-4">
                  <img
                    src={myimg}
                    alt="myimg"
                    height="250px"
                    width="250px"
                    className="img img-thumbnail"
                  />
                </div>
                <div className="col-md-6 order-1 order-md-0 ">
                  <h1>{userData.name}</h1>
                  <p className="text-primary">({userData.work})</p>
                  <p>
                    Rankings: <b>1/10</b>
                  </p>
                  <ul className="nav nav-tabs">
                    <li className="nav-item mr-4">
                      <a
                        aria-controls="home"
                        href="#home"
                        id="home-tab"
                        data-toggle="tab"
                        role="tab"
                        className="text-dark active"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profile"
                        id="profile-tab"
                        aria-controls="profile"
                        data-toggle="tab"
                        role="tab"
                        className="text-dark"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 order-0 order-md-1">
                  <input type="submit" name="addmore" value="Edit Profile" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4 order-1 order-md-0">
                  <h4>
                    <b>WORK LINKS:</b>
                  </h4>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006020027512"
                    target="blank"
                  >
                    Facebook
                  </a>
                </div>
                <div className="col-md-8 order-0 order-md-1">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="home"
                      role="tab"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">{userData._id}</label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">
                            {userData.name}
                          </label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">
                            {userData.email}
                          </label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">
                            {userData.phone}
                          </label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">
                            {userData.work}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade show"
                      id="profile"
                      role="tab"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">Expert</label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Hourly Rate</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">10$/hr</label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Total Projects</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">100+</label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>English Level</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">Expert</label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Availability</label>
                        </div>
                        <div className="col-md-6">
                          <label className="text-primary">6 Months</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
