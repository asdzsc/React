import React, { Component } from "react";

import { Map, List, Seq, fromJS } from "immutable";

class App extends Component {
  render() {
    // let map1 = Map({
    //   a: 1,
    //   b: 2,
    // });
    // let map2 = map1.set("a", 100);
    // console.log(map1.get("a"));
    // console.log(map2.get("a"));
    // console.log(map1 === map2);//true

    // let map1 = Map({
    //   a: 1,
    //   b: 2,
    // });
    // let map2 = Map({
    //   a: 1,
    //   b: 2,
    // });
    // let map2 = map1.set("x", 0);

    // console.log(map1 === map2); //false
    // console.log(map1.equals(map2)); //true

    // const map1 = Map({
    //   a: 1,
    //   b: 2,
    // });
    // let mapCopy = map1;
    // mapCopy.set("a", 100);
    // console.log(map1 === mapCopy); //true
    // console.log(map1.get("a")); //1
    // console.log(mapCopy.get("a")); //1

    // let list = List(["a", "b", "c"]);
    // let list2 = list.push("d");
    // let list3 = list.unshift("-1");
    // console.log(list.toJS()); ["a", "b", "c"]
    // console.log(list2.toJS());["a", "b", "c","d"]
    // console.log(list3.toJS());["-1","a", "b", "c"]

    // let map1 = Map({
    //   a: 1,
    //   b: 2,
    //   c: 3,
    // });
    // let result = map1
    //   .map((v, k) => {
    //     return k.toUpperCase();
    //   })
    //   .join();
    // console.log(result);//X,Y,Z

    // let map1 = Map({
    //   a: 1,
    //   b: 2,
    //   c: 3,
    // });
    // let result = map1
    //   .flip() //反转value和key
    //   .map((v) => {
    //     return v.toUpperCase();
    //   })
    //   .join();
    // console.log(result); //X,Y,Z

    // let map1 = Map({
    //   a: 1,
    //   b: 2,
    //   c: {
    //     a: 1,
    //   },
    // });
    // let map2 = Map({
    //   a: 100,
    //   b: 200,
    //   c: {
    //     z: 100,
    //   },
    // });
    // let obj = {
    //   b: 300,
    // };
    //merge 浅合并 mergeDeep深合并
    // let map3 = map1.merge(map2);// a200 b200 c.z100
    // let map3 = map1.mergeDeep(map2);a200 b200 c.a1 c.z100
    // let map3 = map1.merge(map2, obj); //a200 b300 c.z100
    // console.log(map3.toJS());

    // let list1 = List(["a", "b"]);
    // let list2 = List(["c", "d"]);
    // let arr = ["e", "f"];
    // let list = list1.concat(list2, arr);
    // console.log(list.toJS());

    // let obj = { a: 1, b: 2, c: 3 };

    // Seq 惰性处理数据 可以提高效率
    // let seqObj = Seq(obj).map((v, k) => {
    //   console.log(v);
    //   //   return "www";
    // });

    // let mapObj = Map(obj);
    // mapObj.map((v, k) => {
    //   console.log(v);
    // });
    // console.log(seqObj.toJS());
    // console.log(mapObj.toJS());

    // let obj = {
    //   a: 10,
    //   b: [
    //     "a",
    //     {
    //       a: 5,
    //     },
    //   ],
    // };
    // // fromJs 可以把js对象转换成immutable对象
    // let js = fromJS(obj);
    //   console.log(js);

    let obj = {
      a: Map({
        a: 10,
        b: 20,
      }),
      b: List(["a", "b", "c"]),
    };

    //js对象可以和immutable对象混用 只有immutable对象包裹的才会数据共享
    console.log(obj);
    return <div>immutable</div>;
  }
}

export default App;
