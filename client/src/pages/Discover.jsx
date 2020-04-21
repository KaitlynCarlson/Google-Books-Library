import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Search from "../components/Search/Search";
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
        {/* <Search
          name="search"
          value={this.state.search}
          onChange={this.handleInputChange}
        /> */}
      </React.Fragment>
    );
  }
}
export default Discover;
