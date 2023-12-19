import React from "react";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const Protected = () => {
  const navi = useNavigate();
  const cookie = new Cookies();
  const token = cookie.cookies.jwt;
  let Veryfi;
  let id;
  if (cookie.cookies.jwt) {
    const tokenVerified = jwtDecode(token);
    Veryfi = `j:\"${tokenVerified.id}"`;
    id = cookie.cookies.id;
  } else {
    useEffect(() => {
      return navi("/ParisAirways/v1/loginPage");
    }, []);
  }

  return (
    <>
      <div>
        {cookie.cookies.jwt ? (
          Veryfi === id ? (
            <Outlet />
          ) : (
            navi("/ParisAirways/v1/loginPage")
          )
        ) : null}
      </div>
    </>
  );
};

export default Protected;
