import React, { Component } from "react";

import { Route, NavLink, Redirect } from "react-router-dom";

class About extends Component {
  render() {
    return <div>about</div>;
  }
}

const Home = () => {
  return <div>home</div>;
};

class Redirects extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
      </div>
    );
  }
}

export default Redirects;
