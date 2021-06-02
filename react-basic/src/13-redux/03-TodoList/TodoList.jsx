import React, { Component } from "react";
import List from "./List";
import From from "./Form";

class TodoList extends Component {
  render() {
    return (
      <div>
        <From></From>
        <List></List>
      </div>
    );
  }
}

export default TodoList;
