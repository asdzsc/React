import React, { Component } from "react";
import Child from "./Child";
export class App extends Component {
  // initialization 初始化阶段
  // 最先执行 只执行一次且一定会执行 初始化状态
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      color: "red",
    };
    this.staticState = {
      z: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}

  // mounting 挂载
  UNSAFE_componentWillMount() {
    this.staticState = {
      z: 2,
    };
    //组件未渲染之前的操作
    // console.log("UNSAFE_componentWillMount");
  }
  render() {
    //   父组件render执行 子组件肯定render执行
    // console.log("render");
    // console.log(this.staticState.z);
    return (
      <>
        {/* <div>生命周期函数{this.state.x}</div> */}
        <Child title={this.state.x} color={this.state.color}></Child>
      </>
    );
  }
  // 组件挂载完毕后
  componentDidMount() {
    // console.log("App componentDidMount");
    setTimeout(() => {
      this.setState({
        color: "green",
      });
    }, 2000);
  }
  // updating 更新阶段
}

export default App;
