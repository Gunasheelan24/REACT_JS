import React from "react";
import { PiPinterestLogoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <>
      <div className="container-fluid p-3 bg-indico">
        <div className="row">
          <div className="col-sm-12 d-flex align-items-center justify-content-between">
            <div className="d-flex gap-2 align-items-center">
              <PiPinterestLogoDuotone className="display-6 text-white h2" />
              <h1 className="text-white text-font">ParisAirWays</h1>
            </div>
            <div className="d-flex  gap-2">
              <div className="d-flex gap-2 align-items-center">
                <div className="d-flex  flex-column align-items-end">
                  <h5 className="text-white">
                    <Link
                      to="/ParisAirways/v1/loginPage"
                      className="text-info d-none d-sm-block"
                    >
                      HomePage
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5  bg-black">
        <div className="row p-5 mb-5">
          <div className="col-sm-12 p-5 mb-5 text-white text-center mt-5">
            <h1 className="mt-5">PAYMENT SUCCESSFULL</h1>
            <p>YOUR TICKET HAS BEEN SEND TO YOUR EMAIL</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
