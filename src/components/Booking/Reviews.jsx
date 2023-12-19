import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Reviews = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-2 mt-3">
            <div className="card p-3">
              <h1 className="text-center h3">ParisAirways</h1>
              <h1 className="text-center text-primary">
                What our Passanger's say about us.
              </h1>
              <div className="d-flex gap-3 justify-content-between">
                <div className="card p-5 w-100">
                  <div className="text-center">
                    <ImQuotesLeft />
                  </div>

                  <p>
                    parisairways economy class is really offering more beyond
                    typical economy class. Well trained and helpful staff, great
                    sence of hospitality and great attention to children and
                    babies. That is on top of the discipline in timing (you
                    can't expect a delay. Chennai Airport services is also world
                    class facilities).
                  </p>
                  <p className="text-end">-Sriram</p>
                </div>
                <div className="card p-5 w-100">
                  <div className="text-center">
                    <ImQuotesLeft />
                  </div>
                  <p>
                    I have traveled both business and economy and unlike many
                    airlines, their services are excellent all around.
                  </p>
                  <p className="text-end">-Nazleem</p>
                </div>
                <div className="card p-5 w-100">
                  <div className="text-center">
                    <ImQuotesLeft />
                    <p>
                      Our daytime flight was exceptional. The Club Cabin pods
                      are amazingly roomy and really comfortable. The cabin crew
                      were plentiful, polite and provided top class service
                      throughout the flight. The food was excellent as were the
                      wines. The entertainment with a great big screen was also
                      top class.
                    </p>
                    <p className="text-end">-GunaSheelan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
