import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../style/Reset.css";

const Forget = () => {
  let navi = useNavigate();
  const initialState = {
    email: "",
  };
  const onSubmitHandler = (value, { resetForm }) => {
    axios({
      method: "post",
      url: "https://parisairwaysguna.onrender.com/ParisAirways/v1/resetPassword",
      data: {
        value,
      },
    });
    resetForm("");
    navi("/ParisAirways/v1/loginPage");
  };
  const validate = yup.object({
    email: yup.string().email("Email Is Not Valid").required("Required"),
  });

  return (
    <>
      <div className="container-fluid" id="bg_One">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 mt-5">
            <h5 className="text-center text-white text-one fw-bold">
              Let's find your ParisAirways account
            </h5>
            <h6 className="text-center text-two text-danger fw-bold">
              What's your email?
            </h6>
            <div>
              <Formik
                initialValues={initialState}
                onSubmit={onSubmitHandler}
                validationSchema={validate}
              >
                {({ errors, touched }) => (
                  <Form className="d-flex gap-3 align-items-center">
                    <div className="w-100">
                      <Field
                        type="text"
                        name="email"
                        className="form-control form-control-lg border border-5 rounded-5"
                        placeholder="🔎 Enter Your Email"
                      />
                    </div>
                    <div className="">
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <h6 className="text-white mt-2">
              Back To{" "}
              <Link to="/ParisAirways/v1/loginPage" className="text-danger">
                Signin
              </Link>
            </h6>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
};

export default Forget;
