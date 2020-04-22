import React from "react";
import "./style.css";
import API from "../../utils/API";
function SavedBooks(props) {
  return (
    <span>
      {props.saved.length > 0 ? (
        props.saved.map((book) => (
          <div className="card" key={book._id}>
            <div className="card-header">Written by: {book.author}</div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <img alt="Book Cover" src={book.image} />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <button
                    type="button"
                    id={book._id}
                    className="btn btn-primary moreButton"
                    onClick={() => window.open(book.link)}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    id={book._id}
                    className="btn btn-danger moreButton"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="lead" id="noResults">
          No Results to Display
        </p>
      )}
    </span>
  );
}
export default SavedBooks;
