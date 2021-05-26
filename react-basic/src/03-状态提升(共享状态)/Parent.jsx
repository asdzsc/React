import React, { Component } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";

export class Parent extends Component {
  state = {
    data: "",
  };
  handleReciveData(data) {
    // console.log(data);
    this.setState({
      data,
    });
  }
  render() {
    return (
      <>
        {/* 改变this */}
        <Child1 onReciveData={this.handleReciveData.bind(this)}></Child1>
        <Child2 data={this.state.data}></Child2>
      </>
    );
  }
}

export default Parent;
