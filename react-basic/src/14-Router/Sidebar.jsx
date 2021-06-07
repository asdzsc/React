import React, { Component } from "react";

import { Route, NavLink, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul>
          {routes.map((v) => {
            return (
              <li key={v.path}>
                <NavLink to={v.path}>
                  {v.path === "/" ? "home" : v.path.slice(1)}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* sidebar */}
        <Switch>
          {routes.map((v) => {
            return (
              <Route path={v.path} key={v.path} exact={v.exact}>
                {v.sidebar}
              </Route>
            );
          })}
        </Switch>
        {/* main */}
        <Switch>
          {routes.map((v) => {
            return (
              <Route path={v.path} key={v.path} exact={v.exact}>
                {v.main}
              </Route>
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default Sidebar;
