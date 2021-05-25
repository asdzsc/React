import React, { Component, Fragment } from "react";

// 类组件
// export default class Child extends Component {
//   // 静态属性
//   //   static defaultProps = {
//   //     title: "default value",
//   //   };
//   render() {
//     return <div>child {this.props.title}</div>;
//   }
// }
// Child.defaultProps = {
//   title: "default value",
// };

// 函数式组件/无状态组件
const Child = (props) => {
  return (
    <>
      <div>child {props.title}</div>
      {props.children}
    </>
  );
};
// props默认值
Child.defaultProps = {
  title: "default value",
};

export default Child;
