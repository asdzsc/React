import React, { Component } from "react";

const data = "<h1>hello</h1>";

// 函数组件
const Home = () => {
  return <div>Home</div>;
};
export class App extends Component {
  render() {
    return (
      <>
        {/* <div>{data}</div> */}
        {/* dangerouslySetInnerHTML允许动态设置innerHTML */}
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
        <label htmlFor="abc">
          abc
          <input type="text" id="abc" />
        </label>

        {true && <Home></Home>}
      </>
    );
  }
}

export default App;
