import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../Booking/Header";
import "../../style/Ticket/card-flight.css";
import Store from "../../context/createStore";
import FlightTable from "./FlightTable";

const Flights = () => {
  let { Details, setbooking } = useContext(Store);
  return (
    <>
      {Details.length < 1 ? (
        <FlightTable />
      ) : (
        <>
          <Header />
          <div className="bg-all">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 mb-5">
                  {Details.map((data, ind) => (
                    <div
                      className="card border bg-ok border-2 border-bottom-0 mt-3"
                      key={ind}
                    >
                      <div className="d-flex rounded-3 h6 text-white p-4 justify-content-around align-items-center">
                        <div className="remove-height ">
                          <p className="text-center">
                            {data.Airplane.FlightName}
                          </p>
                          <p className="text-center">{data.endcode}</p>
                        </div>
                        <div className="remove-height ">
                          <p className="text-center">
                            {data.Airplane.startTime}
                          </p>
                          <p className="text-center">{data.from}</p>
                        </div>
                        <div className="remove-height d-none d-sm-block">
                          <p className="text-center"> {data.Airplane.total}</p>
                          <hr className="border border-2 border-primary" />
                          <p className="text-center">Non stop</p>
                        </div>
                        <div className="remove-height ">
                          <p className="text-center">{data.Airplane.endTime}</p>
                          <p className="text-center">{data.to}</p>
                        </div>
                        <div className="remove-height">
                          <p className="text-center">₹{data.Airplane.Price}</p>
                          <p className="text-center">For Adult</p>
                        </div>
                      </div>
                      <Link
                        to="/ParisAirways/v1/Secure/Booking"
                        onClick={() => setbooking([data])}
                        className="btn btn-primary fw-bold fw-normal fw-semibold"
                      >
                        Book
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Flights;
