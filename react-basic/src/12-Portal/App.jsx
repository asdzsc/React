import React, { Component } from "react";

import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(0);
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.count}
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
