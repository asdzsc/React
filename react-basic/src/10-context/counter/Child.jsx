import React, { Component } from "react";
import ChildHood from "./ChildHood.jsx";
import { CountConsumer } from "./Count";
export class Child extends Component {
  render() {
    return (
      <>
        <CountConsumer>
          {({ count }) => {
            return <div>{count}</div>;
          }}
        </CountConsumer>
        <ChildHood></ChildHood>
      </>
    );
  }
}

export default Child;
