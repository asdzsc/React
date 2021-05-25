import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  render() {
    return (
      <>
        <h1>app</h1>
        <Child title="parents"></Child>
      </>
    );
  }
}

export default App;
