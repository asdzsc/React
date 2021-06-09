import React from "react";
import { useState, useEffect } from "react";
export default function UseEffect() {
  // constructor
  let [data, setData] = useState({
    count: 0,
  });

  // useEffect 相当于 组件挂载 更新都会触发
  // 第二个参数数组表示以来的数据更新触发 如果为空 只执行一次 那么更新的时候就不触发了
  useEffect(() => {
    //  componentWillMount
    // componentDidUpdate
    console.log("effect");
  }, []);

  //   useEffect(() => {
  //     console.log("effect");
  //   }, []);

  // 返回值为组件卸载
  useEffect(() => {
    //   componentDidMount
    console.log("mounted.");
    (async () => {
      let res = await loadData();
      console.log(res);
    })();
    //   componentWillUnmount
    return () => {
      console.log("unmount");
    };
  }, []);

  function loadData() {
    return fetch("/react-basic/public/position.json")
      .then((response) => {
        response.json();
      })
      .then((result) => {
        return result;
      });
  }

  function handleClick() {
    setData({
      count: data.count + 1,
    });
  }
  return (
    <div>
      <span>{data.count}</span>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
