import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    //只做一次
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    count: 0,
  };

  //   handleClick(e) {
  //     // console.log(e.target);
  //     this.setState({
  //       count: 1,
  //     });
  //     console.log(this.state.count);
  //   }
  // 传参
  //   handleClick(arg) {
  //     console.log(arg);
  //   }
  // 函数事件柯里化 进行传参
  handleClick = (arg) => {
    return (e) => {
      console.log(e.target, arg);
      //   console.log(this.state.count);
    };
  };
  render() {
    return (
      <div>
        {/* bind 直接在组件内定义一个非箭头函数 会重新创建fun 损耗性能 */}
        {/* <button onClick={this.handleClick.bind(this)}>更新</button> */}
        {/*  */}
        {/* <button onClick={() => this.handleClick("xx")}>更新</button> */}
        <button onClick={this.handleClick("xx")}>更新</button>
      </div>
    );
  }
}

export default App;
