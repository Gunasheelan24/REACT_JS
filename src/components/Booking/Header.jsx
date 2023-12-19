import React, { useContext } from "react";
import { PiPinterestLogoDuotone } from "react-icons/pi";
import "../../style/Header.css";
import { Link } from "react-router-dom";
import Store from "../../context/createStore";

const Header = () => {
  let { userName, profileState } = useContext(Store);
  return (
    <>
      <div className="container-fluid p-3 bg-indico">
        <div className="row">
          <div className="col-sm-12 d-flex align-items-center justify-content-between">
            <div className="d-flex gap-2 align-items-center">
              <PiPinterestLogoDuotone className="display-6 text-white h2" />
              <h1 className="text-white text-font">ParisAirWays</h1>
            </div>
            <div className="d-flex gap-2">
              <div className="d-flex gap-2 align-items-center">
                {userName.username ? (
                  <div className="d-flex  flex-column align-items-end">
                    <h5 className="text-white">
                      <span className="text-info d-none d-sm-block">
                        {userName.username}
                      </span>
                    </h5>
                    <p className="text-secondary fw-bold">
                      <Link to="/ParisAirways/v1/Secure/profile">Settings</Link>
                    </p>
                  </div>
                ) : (
                  <h5 className="text-white">GUEST</h5>
                )}
                <img
                  src={profileState}
                  alt=""
                  className="img img-fluid"
                  style={{
                    width: "50px",
                    height: "50px",
                    margin: "0",
                    objectFit: "cover",
                    verticalAlign: "middle",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
