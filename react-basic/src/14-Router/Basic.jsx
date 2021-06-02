import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = (props) => {
  return <div>Home </div>;
};
const About = (props) => {
  return <div>About </div>;
};
const DashBord = (props) => {
  return <div>DashBord </div>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashbord">Dashbord</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/dashbord" component={DashBord}></Route>
      </Router>
    );
  }
}

export default App;
