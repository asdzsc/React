import React, { useState, useEffect, Component, useRef } from "react";

// export default function UseRef() {
//   // 函数组件的 Capture Value 特性
//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("count", count);
//     }, 3000); //输出1 0
//   }, [count]);
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count + 1)}>add</button>
//       <button onClick={() => setCount(count - 1)}>minus</button>
//     </div>
//   );
// }

// 类组件 的值都是 count是挂载在this变量上 保留的是一个引用值 每次访问都是获取最新的值
// class UseRef extends Component {
//   state = {
//     count: 0,
//   };
//   setCount() {
//     setTimeout(() => {
//       console.log("count", this.state.count); //输出0 0
//     }, 3000);
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.state.count}</div>
//         <button onClick={() => this.setCount(this.state.count + 1)}>add</button>
//         <button onClick={() => this.setCount(this.state.count - 1)}>
//           minus
//         </button>
//       </div>
//     );
//   }
// }

// export default UseRef;

export default function UseRef() {
  // 函数组件的 Capture Value 特性 UseRef可以创建一个引用 有效规避React hooks 中的 Capture Value
  //   let [count, setCount] = useState(0);

  let count = useRef(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("count", count);
  //     }, 3000); //输出1 0
  //   }, [count]);

  const handleClick = (num) => {
    count.current += num;
    setTimeout(() => {
      console.log("count", count.current);
    }, 3000); //输出0 0
  };
  return (
    <div>
      <div>{count.current}</div>
      <button onClick={() => handleClick(+1)}>add</button>
      <button onClick={() => handleClick(-1)}>minus</button>
    </div>
  );
}
