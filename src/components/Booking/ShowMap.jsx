import React from "react";

const ShowMap = ({ e, i }) => {
  return (
    <>
      <tr key={i}>
        <td className="text-center">{e.Airplane.FlightName}</td>
        <td className="text-center">{e.from}</td>
        <td className="text-center">{e.to}</td>
      </tr>
    </>
  );
};

export default ShowMap;
