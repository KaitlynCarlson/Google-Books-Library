import React from "react";
import API from "../utils/API";
import LibraryContainer from "../components/Library/LibraryContainer";
class Library extends React.Component {
  state = {
    library: [],
  };
  componentDidMount() {
    this.showLibrary();
  }

  showLibrary = () => {
    API.getBooks()
      .then((res) =>
        this.setState({
          library: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.showLibrary())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <LibraryContainer
        saved={this.state.library}
        deleteBook={this.deleteBook}
      />
    );
  }
}
export default Library;
