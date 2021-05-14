import React, { Fragment } from "react";

class Header extends React.Component {
  render() {
    return <div>header</div>;
  }
}

class Content extends React.Component {
  render() {
    return <div>Content</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      // 占位符
      <>
        <Header></Header>
        <Content></Content>
      </>
    );
  }
}
export default App;
