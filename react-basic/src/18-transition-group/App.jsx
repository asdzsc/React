import React, { useState, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import "animate.css";

// export default class App extends Component {
//   state = {
//     show: true,
//   };

//   handleClick = () => {
//     this.setState((prevstate) => ({ show: !prevstate.show }));
//   };
//   render() {
//     console.log(this.state.show);
//     return (
//       <div>
//         <CSSTransition
//           appear={true}
//           classNames={{
//             appear: "animate__animated",
//             appearActive: "animate__slideInDown",
//             enter: "animate__animated",
//             enterActive: "animate__fadeIn",
//             exit: "animate__animated",
//             exitActive: "animate__fadeOut",
//           }}
//           // classNames="my-node"
//           in={this.state.show}
//           timeout={1000}
//           mountOnEnter
//           unmountOnExit
//         >
//           <div>hello</div>
//         </CSSTransition>
//         <button onClick={this.handleClick}>show</button>
//       </div>
//     );
//   }
// }

export default function App() {
  const [state, setState] = useState(true);
  const handleClick = useCallback(() => {
    setState(!state);
  }, [state]);
  // const handleClick = useCallback(() => {
  //   setShow(!show);
  // }, [show]);
  return (
    <div>
      <CSSTransition
        // 页面第一次加载(刷新页面) appear触发
        appear={true}
        classNames={{
          appear: "animate__animated",
          appearActive: "animate__slideInDown",
          enter: "animate__animated",
          enterActive: "animate__fadeIn",
          exit: "animate__animated",
          exitActive: "animate__fadeOut",
        }}
        // classNames="my-node"
        in={state}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <div>hello</div>
      </CSSTransition>
      <button onClick={handleClick}>show</button>
    </div>
  );
}
