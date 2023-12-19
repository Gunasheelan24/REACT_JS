import React, { useMemo, useState } from "react";
import Header from "./Header";
import { useContext } from "react";
import axios from "axios";
import Store from "../../context/createStore";
import "../../style/Ticket/Booking.css";
import { RxDotsVertical } from "react-icons/rx";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Booking = () => {
  const { Details, booking } = useContext(Store);
  const [adultCount, setAdultCount] = useState(1);
  const checkTotalPrice = booking[0].Airplane.Price;
  const result = checkTotalPrice * adultCount;
  async function bookingOne(datas) {
    try {
      let Session = await axios({
        method: "post",
        url: "https://parisairwaysguna.onrender.com/ParisAirways/v1/checkoutPage",
        data: {
          datas,
          result,
        },
      });
      const url = Session.data.url;
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header />
      <div className="">
        <div className="container-fluid ">
          <div className="row">
            {booking.map((data) => (
              <div className="col-sm-12 p-4 d-xl-flex d-md-flex gap-xl-4 gap-md-4 justify-content-md-around justify-content-xl-around">
                <div className="w-100 shadow-lg">
                  <div className="card p-2">
                    <div className="d-flex align-items-center gap-2 p-3">
                      <h1>{data.from}</h1>
                      <p>
                        <MdOutlineDoubleArrow className="h3 mt-4 text-primary" />
                      </p>
                      <h1>{data.to}</h1>
                    </div>
                    <div className="">
                      <div className="d-flex gap-3">
                        <p className="ms-3 text-center">
                          <span className="fw-bold">Flight Name:</span>{" "}
                          {data.Airplane.FlightName} Airways
                        </p>{" "}
                        <p className="text-center">
                          <span className="fw-bold">Number:</span>{" "}
                          {data.endcode}
                        </p>
                      </div>
                      <div className="p-2">
                        <div className="card bg-pri shadow-lg  p-2">
                          <div className="text-white p-2 d-flex justify-content-start gap-2 align-items-center">
                            <h6 className="">{data.Airplane.startTime}</h6>
                            <h6>
                              {data.from},{data.startPoint}
                            </h6>
                          </div>
                          <div className="text-white ms-4">
                            <RxDotsVertical />
                          </div>
                          <div className="text-white d-flex gap-2 mt-3">
                            <h6>{data.Airplane.endTime}</h6>
                            <h6>
                              {data.to}, {data.EndingPoint}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 shadow-lg">
                        <div className="col-sm-12">
                          <p>💼 Cabin Baggage: 7 Kgs (1 piece only)/ Adult </p>
                          <p>
                            🧳 Check In Baggage: 15 Kgs (1 piece only)/ Adult
                          </p>
                        </div>
                      </div>
                      <div className="p-2 d-flex justify-content-end align-items-center gap-1">
                        <label htmlFor="" className="h6 fw-bold form-label">
                          Adult:
                        </label>

                        <input
                          type="number"
                          max={5}
                          min={1}
                          onChange={(e) => setAdultCount(e.target.value)}
                          value={adultCount}
                          className="form-control shadow-lg border-warning w-25"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50">
                  <div className="card p-3 mb-4 shadow-lg">
                    <div className="d-flex p-1 justify-content-between">
                      <p>BASE FARE </p>
                      <p>₹{result}</p>
                    </div>
                    <div className="d-flex p-1 justify-content-between">
                      <p className="">Taxes and charges</p>
                      <p>₹{"Free"}</p>
                    </div>
                    <hr />
                    <div className="h6 d-flex justify-content-between">
                      <p> Total Amount </p>
                      <p>{result}</p>
                    </div>
                    <button
                      onClick={() => bookingOne(data)}
                      className="btn btn-info text-blue shadow-lg"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
