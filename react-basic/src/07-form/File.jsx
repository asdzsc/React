import React, { Component, createRef } from "react";

export class File extends Component {
  constructor(props) {
    super(props);
    this.file = createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    console.log(this.file.current.files[0].name);
  }
  render() {
    return (
      <>
        <input type="file" ref={this.file} onChange={this.handleChange} />
      </>
    );
  }
}

export default File;
