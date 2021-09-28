import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import "./HomeScreen.css";
import requests from "./Requests";
import Row from "./Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav(bar)*/}
      <Nav />
      {/* Banner*/}
      <Banner />
      {/* Row*/}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
