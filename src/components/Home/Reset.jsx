import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/Forget.css";
import axios from "axios";

const Reset = () => {
  let navi = useNavigate();
  let { email } = useParams();
  let initialState = {
    password: "",
    confirmPassword: "",
  };
  let onSubmitHandler = async (value, { resetForm }) => {
    try {
      await axios({
        method: "post",
        url: `https://parisairwaysguna.onrender.com/ParisAirways/v1/verfyToken/${email}`,
        data: {
          value,
        },
      });
      resetForm("");
      navi("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const validationSchema = yup.object({
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <>
      <div className="container-fluid" id="bg_One">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <h2 className="text-center text-white-50">PICK A NEW PASSWORD</h2>
            <Formik
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {({ errors, touched }) => (
                <Form className="mt-3">
                  <label className="form-label text-white h5">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="form-control rounded-4"
                  />
                  {errors.password && touched.password && (
                    <p>{errors.password}</p>
                  )}
                  <label className="form-label text-white h5 mt-1">
                    confirmPassword
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Your confirmPassword"
                    className="form-control rounded-4"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p>{errors.confirmPassword}</p>
                  )}
                  <button type="submit" className="btn btn-primary mt-2">
                    Change Password
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
};

export default Reset;
