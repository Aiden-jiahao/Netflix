import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav(bar)*/}
      <Nav />

      {/* Banner*/}
      <Banner />
      {/* Rows*/}
    </div>
  );
}

export default HomeScreen;
