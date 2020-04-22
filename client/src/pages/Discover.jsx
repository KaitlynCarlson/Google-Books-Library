import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Results from "../components/Results/Results";
import API from "../utils/API";
class Discover extends React.Component {
  state = {
    results: {},
    search: "",
  };
  searchBook = (event) => {
    event.preventDefault();

    API.getTitles(this.state.search)
      .then((results) => console.log(results))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.setState({ books: {}, title: "" });
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <Jumbotron
          name="search"
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          searchBook={this.searchBook}
        />
        <Results />
      </React.Fragment>
    );
  }
}
export default Discover;
