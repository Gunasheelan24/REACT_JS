import React from "react";
import "../../style/Card.css";
import ice from "../../../public/ice.jpg";
import taj from "../../../public/taj.jpg";
import kerala from "../../../public/kerala.jpg";
import thiru from "../../../public/tirupati.jpg";
import jaipur from "../../../public/jaipur.jpg";
import goa from "../../../public/goa.jpg";

const Card = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-4">
          <div className="p-4">
            <div className="card  border-0 shadow-lg ">
              <img
                src={ice}
                alt=""
                style={{ height: "520px", objectFit: "cover" }}
                className="img img-fluid hover-effect-right"
              />

              <div className="bg-full-color">
                <h6 className="p-2 card-year">March 20 2012</h6>
                <h5 className="p-2 city-name text-white">
                  Jammu and Kashmir, India
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4">
            <div className="card  border-0 shadow-lg">
              <img
                src={taj}
                alt=""
                style={{ height: "520px", objectFit: "cover" }}
                className="img img-fluid img-effect-center"
              />

              <div className="bg-full-color">
                <h6 className="p-2 card-year">May 05 2018</h6>
                <h5 className="p-2 city-name text-white">NewDelhi, India</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4">
            <div className="card  border-0 shadow-lg">
              <img
                src={kerala}
                alt=""
                style={{ height: "520px", objectFit: "cover" }}
                className="img img-fluid hover-effect"
              />

              <div className="bg-full-color">
                <h6 className="p-2 card-year">Jan 12 2022</h6>
                <h5 className="p-2 city-name text-white">
                  Cruise Alleppey, India
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4">
            <div className="card  border-0 shadow-lg ">
              <img
                src={thiru}
                alt=""
                style={{ height: "520px", objectFit: "cover" }}
                className="img img-fluid hover-effect-right"
              />

              <div className="bg-full-color">
                <h6 className="p-2 card-year">Dec 12 2023</h6>
                <h5 className="p-2 city-name text-white">
                  Tirmala Thirupath, India
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4">
            <div className="card  border-0 shadow-lg">
              <img
                src={jaipur}
                alt=""
                style={{ height: "520px", objectFit: "cover" }}
                className="img img-fluid img-effect-center"
              />

              <div className="bg-full-color">
                <h6 className="p-2 card-year">Jub 15 2012</h6>
                <h5 className="p-2 city-name text-white">
                  Patrika Gate,Jaipur,India
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4">
            <div className="card  border-0 shadow-lg">
              <img
                src={goa}
                alt=""
                style={{ height: "520px", objectFit: "cover" }}
                className="img img-fluid hover-effect"
              />
              <div className="bg-full-color">
                <h6 className="p-2 card-year">Feb 22 2020</h6>
                <h5 className="p-2 city-name text-white">South Goa, India</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
