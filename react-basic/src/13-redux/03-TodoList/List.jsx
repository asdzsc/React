import React, { Component } from "react";

import { connect } from "react-redux";
import { loadDataAction, removeDataAction } from "./store/actionCreator";

// 映射store中的state 到当前组件的Props上
const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
// 映射store中的dispatch 到当前组件的Props上
const mapDispatchToProps = (dispatch) => {
  return {
    remove(index) {
      dispatch(removeDataAction(index));
    },
    loadData() {
      dispatch(loadDataAction());
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
  handleRemove = (i) => {
    return () => {
      this.props.remove(i);
    };
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((v, i) => {
            let { name, link } = v;
            return (
              <li key={link}>
                {name} <button onClick={this.handleRemove(i)}>删除</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    // console.log(this);
    this.props.loadData();
  }
}

// connect 第一次调用后的返回值是一个高阶组件
// export default connect(mapStateToProps)(TodoList);
export default List;
