import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Results from "../components/Results/Results";
import API from "../utils/API";
class Discover extends React.Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    this.setState({ results: {}, search: "" });
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  searchBook = (event) => {
    event.preventDefault();

    API.getTitles(this.state.search)
      .then((results) => this.setResults(results))
      .catch((err) => console.log(err));
  };
  setResults = (data) => {
    this.setState({ results: data.data.items });
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
        <Results results={this.state.results} /> :
      </React.Fragment>
    );
  }
}
export default Discover;
