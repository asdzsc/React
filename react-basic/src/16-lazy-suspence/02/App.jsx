import React, { Component, lazy, Suspense } from "react";

// React通过 lazy 引入组件 Suspense加载组件 控制组件的懒加载
const Child = lazy(() => import("./Child"));

class App extends Component {
  state = {
    show: false,
  };
  handleClick = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>show</button>
        {/* fallback传入一个组件 */}
        <Suspense fallback={<div>loading...</div>}>
          {this.state.show && <Child></Child>}
        </Suspense>
      </div>
    );
  }
}

export default App;
