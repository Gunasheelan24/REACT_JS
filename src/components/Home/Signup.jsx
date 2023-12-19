import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import "../../style/Signup.css";

const Signup = () => {
  const navi = useNavigate();
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmitSignup = async (signUp, { resetForm }) => {
    try {
      await axios({
        method: "post",
        url: "https://parisairwaysguna.onrender.com/ParisAirways/v1/singUpPage",
        data: signUp,
      });
      navi("/ParisAirways/v1/loginPage");
      resetForm("");
    } catch (error) {
      console.log(error);
    }
  };

  const validation = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(6, "Password Must Contain 6 Digits"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex">
              <div
                className="w-50 d-none d-sm-block d-sm-none d-md-block"
                id="no-img"
              >
                <img
                  src="https://i.pinimg.com/564x/8a/54/a8/8a54a8d36d3af9bf6ed6d799af90f369.jpg"
                  alt=""
                  className="image-own img-fluid "
                />
              </div>
              <div
                id="Responsive"
                className="w-100  d-flex flex-column justify-content-center "
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <h3 className="text-blue" id="sign-up">
                    Sign Up
                  </h3>
                  <h6>
                    Already Have a Account{" "}
                    <Link className="log-in" to="/ParisAirways/v1/loginPage">
                      Login
                    </Link>{" "}
                  </h6>
                </div>
                <Formik
                  validationSchema={validation}
                  initialValues={initialValue}
                  onSubmit={onSubmitSignup}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <label htmlFor="YourName" className="form-label">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="What's Your Name"
                        className="form-control rounded-4"
                      />
                      {errors.name && touched.name && <p>{errors.name}</p>}
                      <label htmlFor="EmailAddress" className="form-label">
                        Email address
                      </label>
                      <Field
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        className="form-control rounded-4"
                      />
                      {errors.email && touched.email && <p>{errors.email}</p>}
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="form-control rounded-4"
                      />
                      {errors.password && touched.password && (
                        <p>{errors.password}</p>
                      )}
                      <label htmlFor="confirmPassword" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter confirmPassword"
                        className="form-control rounded-4"
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <p>{errors.confirmPassword}</p>
                      )}
                      <div className="text-center mt-2">
                        <Field type="checkbox" className="form-check-input" />{" "}
                        <label>
                          I agree to the{" "}
                          <span className="text-primary">terms & condtion</span>{" "}
                          and{" "}
                          <span className="text-primary">Privacy Policy</span>
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary mt-2">
                        Create Account
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
