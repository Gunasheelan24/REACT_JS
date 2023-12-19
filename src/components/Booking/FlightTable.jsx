import React, { useEffect, useState } from "react";
import Header from "../Booking/Header";
import axios from "axios";

const FlightTable = () => {
  const [flightState, setFlightState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://parisairwaysguna.onrender.com/User";
        let response = await fetch(url);
        const data = await response.json();
        setFlightState(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        {/* <Header /> */}
        <h1 className="text-danger p-4 text-center">
          Sorry Currently We Are Have Limited Flight Service
        </h1>
        <table className="table table-hover table-dark p-2">
          <thead>
            <tr>
              <th className="text-center">FLIGHT NAME</th>
              <th className="text-center">From</th>
              <th className="text-center">To</th>
            </tr>
          </thead>
          <tbody>
            {flightState.map((e, i) => (
              <tr key={i}>
                <td className="text-center">{e.Airplane.FlightName}</td>
                <td className="text-center">{e.from}</td>
                <td className="text-center">{e.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default FlightTable;
