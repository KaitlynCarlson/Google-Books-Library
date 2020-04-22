import React from "react";
import "./style.css";
function Search({ handleInputChange, searchBook, name, value }) {
  return (
    <form id="discoverForm">
      <div className="form-group">
        <label for="bookSearch">Uncharted worlds and words await you</label>
        <input
          type="text"
          className="form-control"
          id="bookSearch"
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder="Book Title"
        />
      </div>
      <button type="submit" onClick={searchBook} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Search;
