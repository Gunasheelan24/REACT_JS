import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import Forget from "../Home/Forget";
import Reset from "../Home/Reset";
import ShowAll from "../Booking/ShowAll";
import Main from "../Main/Main";
import Flights from "../Booking/Flights";
import Store from "../../context/createStore";
import Booking from "../Booking/Booking";
import Profile from "../Booking/Profile";
import Protected from "./Protected";
import Success from "../../Success";
import FlightTable from "../Booking/FlightTable";

const Home = () => {
  const [Details, setDetails] = useState([]);
  const [booking, setbooking] = useState([]);
  const [profileState, setprofileState] = useState(null);
  const [userName, setuserName] = useState({});
  return (
    <Store.Provider
      value={{
        Details,
        setDetails,
        booking,
        setbooking,
        userName,
        setuserName,
        profileState,
        setprofileState,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ParisAirways/v1/loginPage" element={<Login />} />
          <Route path="/ParisAirways/v1/singUpPage" element={<Signup />} />
          <Route path="/ParisAirways/v1/forgetPassword" element={<Forget />} />
          <Route
            path="/ParisAirways/v1/resetPassword/:email"
            element={<Reset />}
          />
          <Route element={<Protected />}>
            <Route
              path="/ParisAirways/v1/Secure/HomePage"
              element={<ShowAll />}
              exact
            />
            <Route
              path="/ParisAirways/v1/Secure/FlightDetails"
              element={<Flights />}
            />
            <Route
              path="/ParisAirways/v1/Secure/Booking"
              element={<Booking />}
            />
            <Route
              path="/ParisAirways/v1/Secure/profile"
              element={<Profile />}
            />
            <Route
              path="/ParisAirways/v1/Secure/Success"
              element={<Success />}
            />
            <Route
              path="/ParisAirways/v1/Secure/flightList"
              element={<FlightTable />}
            />
          </Route>
        </Routes>
      </Router>
    </Store.Provider>
  );
};

export default Home;
