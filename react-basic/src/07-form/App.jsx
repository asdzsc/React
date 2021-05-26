import React, { Component } from "react";

export class App extends Component {
  state = {
    name: "",
    intro: "",
    city: ["1", "2"],
  };
  handleName = () => {
    return (e) => {
      this.setState({
        name: e.target.value,
      });
    };
  };
  handleIntro = () => {
    return (e) => {
      this.setState({
        intro: e.target.value,
      });
    };
  };
  handleCity = () => {
    return (e) => {
      this.setState({
        city: e.target.value,
      });
    };
  };
  handleSubmit = () => {
    return (e) => {
      e.preventDefault();
      console.log(this.state.name);
      console.log(this.state.intro);
      console.log(this.state.city);
    };
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit()}>
        姓名：
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleName()}
        />
        <br />
        简介：
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.intro}
          onChange={this.handleIntro()}
        ></textarea>
        <select multiple value={this.state.city} onChange={this.handleCity()}>
          <option value="0">北京</option>
          <option value="1">上海</option>
          <option value="2">广州</option>
        </select>
        <br />
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default App;
