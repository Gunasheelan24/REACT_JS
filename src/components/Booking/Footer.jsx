import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../../style/footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-indica">
      <div className="row">
        <div className="col-sm-12 p-4 d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h1 className="text-white-50 ">ParisAirWays</h1>
            <ul className="d-flex gap-2 text-decor h5">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <div className="">
            <div className="d-flex justify-content-center gap-2 align-items-center">
              <input type="checkbox" className="form-check-input" />
              <label className="text-white">
                Stay Upto Date With ParisAirways
              </label>
            </div>
            <input
              type="text"
              className="form-control border border-3 mt-2"
              placeholder="Your Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
