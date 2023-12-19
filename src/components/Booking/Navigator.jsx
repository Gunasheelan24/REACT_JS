import React from "react";
import View from "./View";

const Navigator = () => {
  const token = true;
  return (
    <>
      {token === false ? (
        <div className="conatiner ms-4">
          <div className="row">
            <div className="col-sm-5">
              <h3 className="text-start display-1  text-white">Hello, </h3>
              <h4 className="text-start display-4  text-white">
                Please Sign in{" "}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <View />
      )}
    </>
  );
};

export default Navigator;
