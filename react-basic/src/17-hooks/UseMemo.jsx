import React, { useState, useMemo, memo } from "react";

const ChildHood = function (props) {
  return <div>Child Hood</div>;
};

const Child = memo(function ({ a, b, onAdd }) {
  console.log("child run");

  const Child1 = useMemo(() => () => <ChildHood a={a}></ChildHood>, [a]);
  const Child2 = useMemo(() => () => <ChildHood b={b}></ChildHood>, [b]);

  //   console.log(props);
  return (
    <div>
      <div>Child</div>
      <button onClick={onAdd}>add</button>
      <Child1></Child1>
      <Child2></Child2>
    </div>
  );
});

export default function UseCallback() {
  console.log("parent run");
  let [count, setCount] = useState(0);
  //   const handleAdd = () => {
  //     console.log("add.");
  //   };

  // useCallback 结合 memo避免子组件重复渲染
  const handleAdd = useMemo(() => {
    return () => {
      console.log("add.");
    };
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Child onAdd={handleAdd} a={"aaa"} b={"bbb"}></Child>
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
