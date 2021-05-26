import React, { Component } from "react";

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      arr: [],
      options: [
        {
          value: "grapefruit",
          label: "葡萄柚",
        },
        {
          value: "lime",
          label: "酸橙",
        },
        {
          value: "coconut",
          label: "椰子",
        },
        {
          value: "mango",
          label: "芒果",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let indx = this.state.arr.indexOf(e.target.value);
    if (indx === -1) {
      this.state.arr.push(e.target.value);
    } else {
      this.state.arr.splice(indx, 1);
    }

    // let idx = this.state.arr.findIndex((i) => {
    //   return i === e.target.value;
    // });

    // if (idx >= 0) {
    //   this.state.arr.splice(idx, 1);
    // } else {
    //   this.state.arr.push(e.target.value);
    // }
    let arr = this.state.arr;
    this.setState([arr]);
  }

  handleSubmit(e) {
    alert("你喜欢的风味是: " + this.state.arr);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select
            multiple={true}
            value={this.state.arr}
            onChange={this.handleChange}
          >
            {this.state.options.map((item, index) => {
              return (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default FlavorForm;
