import React from "react";

import { Link, Route } from "react-router-dom";
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches,
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus,
      },
      {
        path: "/tacos/cart",
        component: Cart,
      },
    ],
  },
];
function Sandwiches() {
  return <h2>Sandwiches</h2>;
}
function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

function Tacos(props) {
  let { routes } = props;
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>
      {routes.map((v) => {
        let { path } = v;
        return (
          <Route key={path} path={path}>
            <RouteWithSubRoutes {...props} route={v} />
          </Route>
        );
      })}
    </div>
  );
}
function RouteWithSubRoutes(props) {
  //   console.log(props);
  let { route } = props;
  return <route.component {...props} routes={route.routes} />;
}
export default function RouteConfig(props) {
  return (
    <div>
      <ul>
        {routes.map((v) => {
          let { path } = v;
          return (
            <li key={path}>
              <Link to={path}>{path.slice(1)}</Link>
            </li>
          );
        })}
      </ul>
      {routes.map((v) => {
        let { path } = v;
        return (
          <Route key={path} path={path}>
            <RouteWithSubRoutes {...props} route={v} />
          </Route>
        );
      })}
    </div>
  );
}
