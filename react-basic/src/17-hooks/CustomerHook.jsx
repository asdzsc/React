import React from "react";

// import useCount from "./useCount";
import useDataList from "./useDataList";
export default function CustomerHook() {
  console.log(useDataList(1));
  //   let [v, a, m] = useCount(0);
  return (
    <div>
      hello
      {/* <button onClick={() => a(1)}>+</button>
      <div>hello{v}</div>
      <button onClick={() => m(1)}>-</button> */}
    </div>
  );
}
