import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Child extends Component {
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
  componentDidMount() {
    console.log(this);
  }
}

class UrlParameters extends Component {
  render() {
    return (
      <div>
        <Link to="/aa">aa</Link>
        <Link to="/bb">bb</Link>
        <Link to="/cc">cc</Link>
        <Route path="/:id" component={Child}></Route>
      </div>
    );
  }
}

export default UrlParameters;
