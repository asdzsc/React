import React, { Component, createContext } from "react";

const { Provider, Consumer: CountConsumer } = createContext();
// createContext 默认属性
// const { Provider, Consumer: CountConsumer } = createContext({
//   count: 0,
//   increment: () => {
//     console.log("+");
//   },
//   decrement: () => {
//     console.log("-");
//   },
// });

class CountProvider extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  state = {
    count: 0,
  };
  increment(args) {
    this.setState({
      count: this.state.count + args,
    });
  }
  decrement(args) {
    this.setState({
      count: this.state.count - args,
    });
  }

  render() {
    return (
      <Provider
        value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
        }}
      >
        {/* 增强组件的功能 */}
        {this.props.children}
      </Provider>
    );
  }
}

export { CountProvider, CountConsumer };
