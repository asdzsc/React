import React, { Component, createRef } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.ipt = createRef();
  }
  state = {
    textVal: "hello",
  };
  handleChangeVal(e) {
    this.setState({
      textVal: e.target.value,
    });
    console.log(this.state.textVal);
  }
  render() {
    return (
      //受控组件
      //<input value={this.state.textVal} onChange={this.handleChangeVal.bind(this)} type="text"/>
      //非受控组件
      <input
        type="text"
        onInput={this.handleChangeVal.bind(this)}
        ref={this.ipt}
      />
    );
  }
}

export default App;
