import React from "react";
import Nav from "./components/Nav/Nav";
import Discover from "./pages/Discover";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route exact path="/discover" component={Discover} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
