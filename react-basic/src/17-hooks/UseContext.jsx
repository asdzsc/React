import React, { createContext, useContext } from "react";

let nameContext = createContext({ name: "zhangsan" });
let ageContext = createContext({ age: 18 });
// let { Provider, Consumer } = createContext();
// useContext 解决了 Consumer的层层嵌套获取值
export default function UseContext() {
  let name = useContext(nameContext);
  let age = useContext(ageContext);
  return (
    <div>
      {name.name}
      {age.age}
    </div>
  );
}
