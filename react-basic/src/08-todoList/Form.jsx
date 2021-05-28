import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleKeyUp(e) {
    // console.log(e);
    if (e.keyCode === 13) {
      this.props.onReciveData(this.state.val);
      this.setState({
        val: "",
      });
    }
  }
  handleChange(e) {
    this.setState({
      val: e.target.value,
    });
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.val}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
      </>
    );
  }
}

export default Form;
