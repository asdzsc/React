import React from "react";
import ReactDom from "react-dom";

// import App from "./app";

// import App from "./01-get-start/classStyle";
import App from "./02-state-props/App";


// 函数组件
// const App = (props) => {
//   console.log(props);
//   let { title } = props;
//   return <div>hello word{title}</div>; //react 元素
// };

// 类组件 语法糖
// class App extends React.Component {
//   render() {
//     return <div>hello word {this.props.title}</div>;
//   }
// }

// React 元素 camel-case, React 组件 pascal-case
ReactDom.render( <
    App / > , //类的实例化 //React 组件
    document.querySelector("#root")
);