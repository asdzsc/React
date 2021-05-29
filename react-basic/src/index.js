import React from "react";
import ReactDom from "react-dom";

// import App from "./app";

// import App from "./01-get-start/classStyle";
// import App from "./02-state-props/App";
// import App from "./02-state-props/PropTypes";
// import App from "./03-状态提升(共享状态)/Parent";
// import App from "./04-受控组件和非受控组件/App";
// import App from "./05-数据渲染/App";
// import App from "./06-event/App";
// import App from './07-form/App'
// import App from './07-form/Selects'
// import App from './07-form/Multipick'
// import App from './07-form/NameForm'
// import App from './07-form/File'
// import App from "./08-todoList/App";
// import App from "./09-生命周期函数/App";
// import App from "./10-context/App";
import App from "./10-context/counter/App";

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

// setTimeout(() => {
//   ReactDom.unmountComponentAtNode(document.querySelector("#root"));
// }, 5000);