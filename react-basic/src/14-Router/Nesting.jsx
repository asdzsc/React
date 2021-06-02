import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

const Rendering = () => {
  return <div>Rendering</div>;
};
const Comp = () => {
  return <div>Comp</div>;
};
const Child = (props) => {
  console.log(props);
  let { url } = props.match;
  console.log(url);
  return (
    <>
      <h1>Child</h1>
      <hr />
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering</Link>
        </li>
        <li>
          <Link to={`${url}/comp`}>comp</Link>
        </li>
      </ul>
      <Route path={`${url}/rendering`} component={Rendering}></Route>
      <Route path={`${url}/comp`} component={Comp}></Route>
    </>
  );
};

class Nesting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <Link to="/child/rendering">child</Link>
          <li></li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route path="/child" component={Child}></Route>
      </div>
    );
  }
}

export default Nesting;
