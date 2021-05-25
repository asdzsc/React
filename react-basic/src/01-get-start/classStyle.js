import React, { Component } from "react";

// classnames
import classNames from "classnames/bind";
import styles from "./style.css";

// css in js
import { DivContainer } from "./styledCss.js";

// const styles = {
//   fontSize: "30px",
//   color: "red",
// };

let cx = classNames.bind(styles);

class classStyle extends Component {
  render() {
    // return <div style={{ fontSize: "30px" }}>hello</div>; //行内样式
    // return <div style={styles}>hello</div>; //变量形式的样式
    //js逻辑
    let className = cx({
      div: false,
    });
    return (
      <>
        {/* //外部的样式 */}
        <div className={className}>hello</div>
        <DivContainer>word</DivContainer>
      </>
    );
  }
}

export default classStyle;
