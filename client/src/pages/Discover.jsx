import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Results from "../components/Results/Results";
class Discover extends React.Component {
  state = {
    results: {},
    search: "",
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
          onChange={this.handleInputChange}
        />
        <Results />
      </React.Fragment>
    );
  }
}
export default Discover;
