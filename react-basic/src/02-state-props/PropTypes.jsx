import React, { Component } from "react";
import propTypes from "prop-types";

let {
  string,
  number,
  element,
  instanceOf,
  oneOf,
  oneOfType,
  arrayOf,
  objectOf,
  shape,
} = propTypes;

class AAA extends Component {
  render() {
    return <div>AAA</div>;
  }
}

class BBB extends Component {
  render() {
    return <div>BBB</div>;
  }
}
const aaa = new AAA();
const bbb = new BBB();

class Child extends Component {
  static propTypes = {
    title(props, propName, componentName) {
      //   console.log(props);
      //   console.log(propName);
      //   console.log(componentName);
      if (props.title !== "hello") {
        return new Error();
      }
    },
  };
  render() {
    // console.log(this.props.title);
    return <div>child</div>;
  }
}

export default class Prop extends Component {
  render() {
    return (
      <>
        <div>Prop</div>
        <Child title={"hello"}></Child>
      </>
    );
  }
}
