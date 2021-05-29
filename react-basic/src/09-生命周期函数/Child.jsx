import React, { PureComponent } from "react";

// PureComponent 纯组件 过滤shouldComponentUpdate
export class Child extends PureComponent {
  state = {
    color: "",
    // 定义一个冗余的 state 来保存父组件传来的state 防止子组件修改状态不更新页面
    prveColor: "",
  };

  // 根据props 生成一个新的state  父组件和子组件修改state 都会触发
  static getDerivedStateFromProps(nextProps, prveState) {
    console.log(nextProps, prveState);
    if (nextProps.color === prveState.prveColor) {
      return null;
    } else {
      return {
        //浅拷贝 state
        color: nextProps.color,
        prveColor: nextProps.color,
      };
    }
  }

  //父组件发生变化的时候可以拿到最新的值
  // UNSAFE_componentWillReceiveProps(nextProps) {
  // console.log("UNSAFE_componentWillReceiveProps ", nextProps);
  // }
  // 是否要修改组件
  //   shouldComponentUpdate(nextProps, nextState) {
  //     //父组件发生变化的时候可以拿到最新的值和最新的状态
  //     return !(this.props.title === nextProps.title);
  //   }

  // 二次更新前调用
  // UNSAFE_componentWillUpdate() {
  // console.log("UNSAFE_componentWillUpdate ");
  // }
  render() {
    // console.log("child render");
    return <div>Child：{this.state.color}</div>;
  }

  // 在最近一次渲染输出（提交到 DOM 节点）之前调用 需要配合componentDidUpdate使用
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 组件能在发生更改之前进行 dom操作
    return 120;
  }

  // 组件更新完毕后
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("componentDidMount");
    console.log(prevProps, prevState, snapshot);
  }
  // 组件挂载完毕后
  componentDidMount() {
    // console.log("child componentDidMount");
    setTimeout(() => {
      this.setState({
        color: "blue",
      });
    }, 3000);
  }
  // 组件卸载完毕
  componentWillUnmount() {
    // console.log("child componentWillUnmount");
  }
}

export default Child;
