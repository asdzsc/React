import React, { useState, useCallback, memo } from "react";

const Child = memo(
  function (props) {
    console.log("child run");
    return (
      <div>
        <div>Child</div>
        <button onClick={props.onAdd}>add</button>
      </div>
    );
  }
  //   () => {
  //     return false; /// false; 通过return 控制是否缓存子组件
  //   }
);

export default function UseCallback() {
  console.log("parent run");
  let [count, setCount] = useState(0);
  //   const handleAdd = () => {
  //     console.log("add.");
  //   };

  // useCallback 结合 memo避免子组件重复渲染
  const handleAdd = useCallback(() => {
    console.log("add.");
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Child onAdd={handleAdd}></Child>
      <button
        onClick={() => {
          setCount(100);
        }}
      >
        change count
      </button>
    </div>
  );
}
