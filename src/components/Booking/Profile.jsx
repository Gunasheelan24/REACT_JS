import React, { useContext, useState } from "react";
import Header from "./Header";
import Store from "../../context/createStore";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navi = useNavigate();
  const { userName, setuserName, profileState, setprofileState } =
    useContext(Store);
  let cookie = new Cookies();
  const [file, setfile] = useState(null);
  async function handleChange(e) {
    setfile(e.target.files[0]);
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("photo", file);
      console.log(formData);
      let newPicture = await axios({
        method: "post",
        url: `https://parisairwaysguna.onrender.com/ParisAirways/v1/newprofile/${userName.email}`,
        data: formData,
      });
      setprofileState(
        `https://parisairwaysguna.onrender.com/${newPicture.data.profile}`
      );
      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  }
  async function logout() {
    try {
      let newPicture = await axios({
        method: "get",
        url: `/ParisAirways/v1/newprofile/logout`,
      });
      setuserName("");
      setprofileState("");
      cookie.remove("jwt");
      cookie.remove("email");
      cookie.remove("username");
      cookie.remove("id");
      cookie.remove("profile");
      navi("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-6 mt-5 d-flex flex-column">
            <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
              <h1 className="text-white">Your Account Setting</h1>
              <label className="form-lebel">Name</label>
              <input
                type="text"
                className="form-control"
                value={userName.username}
                disabled
              />
              <label className="form-label mt-2">Email address</label>
              <input
                type="text"
                className="form-control"
                value={userName.email}
                disabled
              />

              <div className="text-white d-md-flex  justify-content-md-between align-items-sm-center gap-sm-3 d-lg-flex d-sm-flex d-xxl-flex d-xl-flex justify-content-lg-start justify-content-xl-start justify-content-xxl-start align-items-lg-center align-items-xl-center align-items-xxl-center gap-lg-3 gap-xl-3 gap-xxl-3">
                <div className="h-100">
                  <img
                    src={profileState}
                    className="img img-fluid"
                    style={{
                      width: "70px",
                      height: "70px",
                      margin: "0",
                      objectFit: "cover",
                      verticalAlign: "middle",
                      borderRadius: "50%",
                      marginTop: "20px",
                    }}
                    alt="example profile"
                  />
                </div>
                <div className="h-25">
                  <input
                    type="file"
                    onChange={handleChange}
                    className="form-control-file"
                  />
                </div>
              </div>
              <div className=" text-end gap-2 d-flex justify-content-end">
                <button className="btn btn-info" type="submit">
                  Save Settings
                </button>
              </div>
            </form>
            <button onClick={logout} className="btn fw-bold btn-danger mt-4">
              LOGOUT
            </button>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
