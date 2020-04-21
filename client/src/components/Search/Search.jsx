import React from "react";
import "./style.css";
function Search(props) {
  return (
    <form id="discoverForm">
      <div className="form-group">
        <label for="bookSearch">Uncharted worlds and words await you</label>
        <input
          type="text"
          className="form-control"
          id="bookSearch"
          name="search"
          value={props.search}
          onChange={props.handleInputChange}
          placeholder="Book Title"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Search;
