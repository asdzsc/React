import React, { Component } from "react";

// import { Map, List, Seq, fromJS, update, is, Range } from "immutable";

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

    // let obj = {
    //   a: Map({
    //     a: 10,
    //     b: 20,
    //   }),
    //   b: List(["a", "b", "c"]),
    // };

    //js对象可以和immutable对象混用 只有immutable对象包裹的才会数据共享
    // console.log(obj);

    // const obj = Map({ a: 1, b: 2, c: List(["a", "b"]) });
    // console.log(obj.toObject());
    // console.log(obj.toArray());
    // console.log(obj.toJS());

    // Map对象无法展开
    // let map1 = Map({ a: 1, b: 2, c: 3 });
    // console.log(map1);
    // const map2 = {
    //   ...map1,
    //   d: 4,
    // };
    // const map2 = Map({
    //   ...map1,
    //   d: 4,
    // });
    // console.log(map2.toJS());

    // List 可以展开
    // let list = List(["a", "b", "c"]);
    // const list1 = ["aa", ...list, "cc"];
    // console.log(list1);

    // let map1 = Map({
    //   a: 0,
    //   b: List(["a", Map({ f: 10 })]),
    //   c: Map({
    //     z: 10,
    //   }),
    // });
    // getIn 获取更深的值
    // let result = map1.get("b").get(1).get("f");
    // let result = map1.getIn(["b", 1, "f"]);

    //setIn 设置更深值 返回新的数据 原有的值不变
    // let result = map1.setIn(["b", 1, "f"], 20);

    // update 根据原值返回新值
    // let result = map1.update("a", (v) => {
    //   return v + 100;
    // });

    // update 根据更深数据的值返回新值
    // let result = map1.updateIn(["b", 1, "f"], (v) => {
    // return v + 100;
    // });
    // console.log(map1.toJS());
    // console.log(result.toJS());

    // const obj1 = Map({ a: 1, b: 2, c: 3 });
    // const obj2 = Map({ a: 1, b: 2, c: 3 });

    // console.log(obj1 === obj2); false
    // console.log(obj1.equals(obj2)); true
    // console.log(is(obj1, obj2)); true

    // Set 是去重后的数组
    // const map1 = Map({ a: 1, b: 2, c: 3 });
    // const map2 = Map({ a: 1, b: 2, c: 4 });

    // const set = new Set().add(map1);
    // const set = new Set().add(map2);
    // console.log(set.has(map2));

    // const list = List(["a", "b", "c"]);

    // updateIn 需要返回值
    // let result = list.updateIn([2], (v) => {
    //   return v + 1;
    // });
    // let result = list.withMutations((v) => {
    //   console.log(v.toJS());
    // });
    // let list2 = list.setIn([2], "ccc");
    // console.log(result.toJS());
    // console.log(list2.toJS());

    // const list = [1, 2, 3, 4, 5, 6, 7, 8];

    // let result = list
    //   .filter((v) => {
    //     // console.log(v);
    //     return v % 2 === 0;
    //   })
    //   .map((v) => {
    //     // console.log(v);
    //     return v * v;
    //   });

    // let result1 = Seq(list)
    //   .filter((v) => {
    //     console.log(v);
    //     return v % 2 === 0;
    //   })
    //   .map((v) => {
    //     console.log(v);
    //     return v * v;
    //   });

    // console.log(result);
    // 可以通过Seq的惰性来 计算输出值
    // console.log(result1.get(1));

    // Seq 只管每一步的操作
    // const map = Map({ a: 1, b: 2, c: 3 });
    // const lazySeq = Seq(map);
    // const newMap = lazySeq
    //   .flip()
    //   .map(key => key.toUpperCase())
    //   .flip();

    // console.log(newMap.toObject())

    // const { Range } = require('immutable');

    // const aRange = Range(1, Infinity)
    //   .skip(1000)
    //   .map(n => -n)
    //   .filter(n => n % 2 === 0)
    //   .take(1000)
    //   // -1001,-1002,-1003,-1004,...
    //   .reduce((r, n) => r * n, 1)
    return <div>immutable</div>;
  }
}

export default App;
