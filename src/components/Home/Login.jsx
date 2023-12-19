import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Cookies, useCookies } from "react-cookie";
import Store from "../../context/createStore";
import { useState } from "react";

const Login = () => {
  const { userName, setuserName, profileState, setprofileState } =
    useContext(Store);

  const [True, setTrue] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  let navi = useNavigate();
  const initialValue = {
    email: "",
    password: "",
    isChecked: "",
  };
  const handleSubmit = async (value, { resetForm }) => {
    try {
      let signin = {
        name: value.name,
        email: value.email,
      };
      const data = await axios({
        method: "post",
        data: {
          value,
        },
        url: "https://parisairwaysguna.onrender.com/ParisAirways/v1/loginPage",
        withCredentials: true,
      });
      let cookie = new Cookies();
      setuserName(cookie.cookies);
      setprofileState(cookie.cookies.profile);
      setTrue(true);
      navi("/ParisAirways/v1/Secure/HomePage");
      resetForm("");
    } catch (error) {
      setPasswordError(error.response.data.message);
      setTimeout(() => {
        setPasswordError("");
      }, 2000);
    }
  };
  const validate = yup.object({
    email: yup.string().email("Invalid Email").required("Mandatory"),
    password: yup.string().required("Mandatory"),
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex flex-column justicy-content-center align-items-center w-100">
              <h1 className="text-primary mt-2 w-75 text-center">
                Welcome<span className="text-primary">back</span>
              </h1>
              <div className="text-center mt-4 w-100">
                <button className="btn border shadow-lg">
                  <FcGoogle /> Use Google Account
                </button>
              </div>
              <hr />
              <Formik
                initialValues={initialValue}
                onSubmit={handleSubmit}
                validationSchema={validate}
              >
                {({ errors, touched }) => (
                  <Form className="w-75">
                    <div className="form-floating mb-3">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <Field
                        type="password"
                        name="password"
                        className="form-control "
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      {(errors.password && touched.password) ||
                        (passwordError && (
                          <p className="text-danger">
                            {errors.password}
                            {passwordError}
                          </p>
                        ))}
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                      <div className="d-flex gap-2">
                        <Field
                          type="checkbox"
                          name="isChecked"
                          className="form-check-input"
                        />
                        <h6>Remember me</h6>
                      </div>
                      <div className="">
                        <Link to="/ParisAirways/v1/forgetPassword">
                          <h6>Forget Password?</h6>
                        </Link>
                      </div>
                    </div>
                    <div className="text-star mt-2 ">
                      <button type="submit" className="btn btn-danger w-50">
                        LogIn
                      </button>
                    </div>
                    <hr />
                    <div className="text-center">
                      <p>
                        Don't have an account yet?{" "}
                        <Link to="/ParisAirways/v1/singUpPage">Sign up</Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
