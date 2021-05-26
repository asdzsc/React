import React, { Component } from "react";

export default class State extends Component {
  // 构造函数 定义state
  //   constructor(props) {
  //     // 调用父类的构造函数
  //     super(props);
  //     this.state = {
  //       isShow: true,
  //     };
  //   }

  // 直接定义state
  state = {
    isShow: true,
    count: 1,
    list: ["a", "b", "c"],
    // list: [<li key="a">a</li>, <li key="b">b</li>, <li key="c">c</li>],
  };

  render() {
    return (
      <>
        <div>
          {this.state.isShow ? <div>State{this.state.count}</div> : null}
          <ul>
            {this.state.list.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }

  componentDidMount() {
    // setTimeout(() => {
    //设置属性状态
    // this.setState(
    //   (prveState) => {
    //     // console.log(prveState);
    //     return {
    //       isShow: !prveState.isShow,
    //       count: prveState.count + 1,
    //     };
    //   返回新的state
    //   },
    //   () => {
    //     console.log(document.querySelector("#root").innerHTML);
    // dom 渲染完毕后进行dom操作
    //   }
    // );
    // console.log(document.querySelector("#root").innerHTML);
    // }, 3000);

    this.state.list.push("d");
    console.log(this.state.list);

    this.setState({});
    // this.forceUpdate() //组件将重新渲染。 调用 forceUpdate() 会导致组件跳过 shouldComponentUpdate()
  }
}
