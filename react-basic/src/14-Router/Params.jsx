import React from "react";

import {
  Route,
  Switch,
  NavLink,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";

const Home = () => {
  let {
    state: { id },
  } = useLocation();
  console.log(id);
  return <div>home:{id}</div>;
};
const About = () => {
  let { id } = useParams();
  //   console.log(id);
  return <div>about:{id}</div>;
};
const Search = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  console.log(query);
  return <div>search:{query.get("id")}</div>;
};

const Params = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: "/home",
              state: {
                id: 13,
              },
            }}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/12">about</NavLink>
        </li>
        <li>
          <NavLink to="/search?id=14">search</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about/:id">
          <About></About>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Redirect
          exact
          from="/"
          to={{
            pathname: "/home",
            state: {
              id: 13,
            },
          }}
        ></Redirect>
      </Switch>
    </div>
  );
};

// class Params extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>
//             <NavLink
//               to={{
//                 pathname: "/home",
//                 state: {
//                   id: 13,
//                 },
//               }}
//             >
//               home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about/12">about</NavLink>
//           </li>
//           <li>
//             <NavLink to="/search?id:14">search</NavLink>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/home">
//             <Home></Home>
//           </Route>
//           <Route path="/about/:id">
//             <About></About>
//           </Route>
//           <Route path="/search">
//             <Search></Search>
//           </Route>
//           <Redirect from="/" to="/home"></Redirect>
//         </Switch>
//       </div>
//     );
//   }
// }

export default Params;
