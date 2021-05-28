import React, { Component, createRef } from "react";

export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ipt = createRef();
  }
  handleSubmit(e) {
    // console.log(this.ipt.current.value);
    alert("this value" + this.ipt.current.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" ref={this.ipt} defaultValue="abc" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
