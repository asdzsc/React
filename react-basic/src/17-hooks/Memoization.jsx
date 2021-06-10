import React, { useState } from "react";

import memoize from "memoize-one";
// 当依赖的数据该表的时候才会触发 相当于vue的computed
const getNewString = memoize((str) => {
  console.log(1000);
  return str + "word";
});

// 在函数式组件里 将memoize放到组件外侧
const Child = function (props) {
  return (
    <div>
      <h1>Child</h1>
      <div>{getNewString(props.title)}</div>
    </div>
  );
};

export default function Memoization() {
  let [title, setTitle] = useState("hello");
  return (
    <div>
      <div>{title}</div>
      <Child title={title}></Child>
      <button onClick={() => setTitle("hello+")}>change</button>
    </div>
  );
}
