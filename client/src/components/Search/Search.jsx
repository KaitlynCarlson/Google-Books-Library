import React from "react";
import "./style.css";
function Search() {
  return (
    <form id="discoverForm">
      <div class="form-group">
        <label for="bookSearch">Discover new books today</label>
        <input type="text" class="form-control" id="bookSearch" />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Search;
