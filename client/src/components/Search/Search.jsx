import React from "react";
import "./style.css";
function Search(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="jumboSearchAndResults">
      <form id="discoverForm">
        <div className="form-group">
          <label for="bookSearch">Uncharted worlds and words await you</label>
          <input
            type="text"
            className="form-control"
            id="bookSearch"
            {...props}
            placeholder="Book Title"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Search;
