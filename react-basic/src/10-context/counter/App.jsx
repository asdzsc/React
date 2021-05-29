import React, { Component } from "react";
import Child from "./Child";

import { CountProvider } from "./Count";

export class App extends Component {
  render() {
    return (
      <>
        <CountProvider>
          <Child></Child>
        </CountProvider>
      </>
    );
  }
}

export default App;
