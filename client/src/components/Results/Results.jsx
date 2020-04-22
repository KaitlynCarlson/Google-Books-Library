import React from "react";
import "./style.css";
function Results(props) {
  return (
    <div className="jumbotron jumbotron-fluid" id="Jumbo">
      <div className="container">
        <h1 className="display-4">Results</h1>
      </div>
      <hr id="break" />
      <span>
        {props.results.length > 0 ? (
          props.results.map((book) => (
            <div className="card" key={book.id}>
              <div className="card-header">
                Written by: {book.volumeInfo.authors}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <img
                      alt="Book Image"
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                    />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-text">{book.volumeInfo.description}</p>
                    <button
                      type="button"
                      id={book.id}
                      className="btn btn-primary moreButton"
                      onClick={() =>
                        window.open(book.volumeInfo.canonicalVolumeLink)
                      }
                    >
                      View
                    </button>
                    <button
                      type="button"
                      id={book.id}
                      className="btn btn-success moreButton "
                    >
                      Save
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
    </div>
  );
}
export default Results;
