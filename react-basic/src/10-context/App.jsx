import React, { Component } from "react";

import { testContext, Provider, Consumer } from "./testContext";

// 类组件跨组件获取值
class ChildA extends Component {
  static contextType = testContext;
  render() {
    console.log(this);
    return (
      <>
        <div>ChildA：{this.context}</div>
        <ChildB></ChildB>
      </>
    );
  }
}
class ChildB extends Component {
  render() {
    return (
      <>
        <Consumer>
          {(value) => {
            return <div>{value}</div>;
          }}
        </Consumer>
        <div>ChildB</div>
        <ChildC></ChildC>
      </>
    );
  }
}
// 函数组件跨组件获取值
const ChildC = (props) => {
  return (
    <>
      <div>
        ChildC :
        <Consumer>
          {(value) => {
            return <div>{value}</div>;
          }}
        </Consumer>
      </div>
      <ChildD></ChildD>
    </>
  );
};

const ChildD = (props) => {
  return <div>ChildD</div>;
};

export class App extends Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA></ChildA>
      </Provider>
    );
  }
}

export default App;
