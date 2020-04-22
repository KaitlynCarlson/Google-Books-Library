import React from "react";
import "./style.css";
import SavedBooks from "../SavedBooks/SavedBooks";
function LibraryContainer(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="libraryContainer">
      <div className="container">
        <h1 className="display-4">Library</h1>
        <p className="lead">Saved books</p>
      </div>
      <hr id="break2" />
      <SavedBooks saved={props.saved} />
    </div>
  );
}
export default LibraryContainer;
