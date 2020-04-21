import React from "react";
import Search from "../Search/Search";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid" id="Jumbo">
      <div className="container">
        <h1 className="display-4">Discover</h1>
        <p className="lead">Search books available on Google Play Store</p>
      </div>
      <hr id="break" />
      <Search />
    </div>
  );
}
export default Jumbotron;
