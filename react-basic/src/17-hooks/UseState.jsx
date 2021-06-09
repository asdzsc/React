// import React, { Component } from "react";
// class UseState extends Component {
//   constructor(props) {
//     super(props);
//     //只做一次
//     this.handleClick = this.handleClick.bind(this);
//   }
//   state = {
//     count: 0,
//   };
//   handleClick() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button onClick={this.handleClick}>add</button>
//       </div>
//     );
//   }
// }

// export default UseState;

// useState
import React, { useState } from "react";

const UseState = (props) => {
  let [count, setCount] = useState(0);

  function handleClick() {
    // setCount(count + 1);
    setCount((count) => {
      return count + 1;
    });
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default UseState;
