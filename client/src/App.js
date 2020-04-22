import React from "react";
import Nav from "./components/Nav/Nav";
import Discover from "./pages/Discover";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Library from "./pages/Library";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route
            exact
            path="https://googlebookslibrary.herokuapp.com/discover"
            component={Discover}
          />
          <Route
            exact
            path="https://googlebookslibrary.herokuapp.com/library"
            component={Library}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
