import React, { Component } from "react";
import hoc from "./hoc";
@hoc
class App extends Component {
  render() {
    return <div>App</div>;
  }
  componentDidMount() {
    console.log(this);
  }
}
export default App;
