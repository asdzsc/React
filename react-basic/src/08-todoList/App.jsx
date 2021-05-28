import React, { Component } from "react";

import Form from "./Form";
import List from "./List";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handleData = this.handleData.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }
  handleData(e) {
    console.log(e);
    let taskObj = {
      id: Date.now(),
      taskName: e,
    };
    this.state.list.push(taskObj);
    this.setState({});
  }
  handleDel(id) {
    // console.log(id);
    let newList = this.state.list.filter((v) => {
      return v.id !== id;
    });
    // console.log(newList);
    this.setState({
      list: newList,
    });
  }
  render() {
    return (
      <>
        <Form onReciveData={this.handleData}></Form>
        <List list={this.state.list} onDel={this.handleDel}></List>
      </>
    );
  }
}

export default App;
