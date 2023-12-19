import React from "react";
import "../../style/Ticket/View.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import imgOne from "../../../public/cycle.gif";
import Store from "../../context/createStore";

const View = () => {
  let { Details, setDetails } = useContext(Store);
  const navi = useNavigate();
  let FullDate = "";
  const state = {
    from: "",
    to: "",
    Date: FullDate,
  };
  const SubmitHandler = async (value, { resetForm }) => {
    try {
      let data = await axios({
        method: "get",
        url: `https://parisairwaysguna.onrender.com/ParisAirways/v1/${value.from}/${value.to}`,
      });
      resetForm("");
      setDetails(data.data.message);
      navi("/ParisAirways/v1/Secure/FlightDetails");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid bg-color">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <div className="h-100 w-100  d-flex flex-column justify-content-center align-content-center ">
              <h1 className="text-center text-white">ParisAirways</h1>
              <h5 className="text-center text-warning">
                Domestic and International Flights
              </h5>
              <Formik initialValues={state} onSubmit={SubmitHandler}>
                <Form className="d-flex flex-column align-items-center  justify-content-end w-100">
                  <div className="w-75">
                    <label
                      htmlFor="From"
                      className="text-white form-label h6 mt-3"
                    >
                      From
                    </label>
                    <Field
                      type="text"
                      className="form-control w-100  border-5"
                      placeholder="Enter City"
                      name="from"
                    />
                  </div>
                  <div className="w-75">
                    <label
                      htmlFor="From"
                      className="text-white form-label h6 mt-3"
                    >
                      To
                    </label>
                    <Field
                      type="text"
                      className="form-control w-100 border-5"
                      placeholder="Enter City"
                      name="to"
                    />
                  </div>
                  <div className="w-75">
                    <label
                      htmlFor="From"
                      className="text-white form-label h6 mt-3"
                    >
                      Departure
                    </label>
                    <Field
                      type="date"
                      name="Date"
                      className="form-control w-100 border-5"
                    />
                  </div>
                  <div className="d-flex justify-content-end w-75 mt-3  ">
                    <button className="btn btn-primary" type="submit">
                      BOOK NOW
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="w-100 right-Side d-none d-sm-block">
              <img
                src={imgOne}
                alt="cycle Logo"
                className="img img-fluid img-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
