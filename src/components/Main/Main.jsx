import React from "react";
import "../../style/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="container-fluid bg-info">
        <div className="row">
          <div className="col-sm-12  d-flex justify-content-center p-5">
            <img
              src="https://i.pinimg.com/originals/d6/d1/e0/d6d1e0bbdd2eda8f44a2125154670e82.gif "
              className="img img-fluid img-sm"
              width={"45%"}
              style={{ borderRadius: "100px" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white" id="takeWidth">
        <div className="row">
          <div className="col-sm-12 mt-4">
            <h1 className="text-center mt-2 text-black">
              EXPLORE EXCITING DESTINATIONS
            </h1>
            <p className="text-center text-info-50 p-2">
              It is a long established fact that a render will be distracted by
              the readable content of a page when looking at it's layout
            </p>
            <div className="text-center mb-5">
              <Link to="/ParisAirways/v1/loginPage" className="btn btn-dark">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
