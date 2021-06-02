import React, { Component } from "react";
import { connect } from "react-redux";
import { putDataAction } from "./store/actionCreator";

// 映射store中的dispatch 到当前组件的Props上
const mapDispatchToProps = (dispatch) => {
  //   console.log(dispatch);
  return {
    putData(task) {
      dispatch(putDataAction(task));
    },
  };
};
@connect(null, mapDispatchToProps)
class Form extends Component {
  state = {
    task: "",
  };
  handleChange = (e) => {
    // console.log();
    this.setState({
      task: e.target.value,
    });
  };
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.putData(this.state.task);
      e.target.value = "";
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
  componentDidMount() {
    // console.log(this);
  }
}

export default Form;
