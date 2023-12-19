import React from "react";
import Header from "./Header";
import Card from "./Card";
import Reviews from "./Reviews";
import Footer from "./Footer";
import "../../style/ShowAll.css";
import Navigator from "./Navigator";

const ShowAll = () => {
  return (
    <>
      <div className="background-image">
        <Header />
        <Navigator />
        <Card />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default ShowAll;
