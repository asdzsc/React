import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  //   NavLink,
  Switch,
  withRouter,
} from "react-router-dom";

import "./style.css";
const Home = (props) => {
  return <div>Home </div>;
};

const Profile = (props) => {
  return <div>Profile </div>;
};
class About extends Component {
  render() {
    return <div>About </div>;
  }
  componentDidMount() {
    console.log(this);
  }
}

class DashBord extends Component {
  render() {
    return <div>DashBord </div>;
  }
  componentDidMount() {
    console.log(this);
  }
}

@withRouter
class MyLink extends Component {
  state = {
    navList: [
      {
        id: "0",
        name: "home",
      },
      {
        id: "2",
        name: "about",
      },
      {
        id: "3",
        name: "dashbord",
      },
      {
        id: "4",
        name: "profile",
      },
    ],
  };

  handleClick(path) {
    // console.log(this.props.location);
    let { history } = this.props;
    return (e) => {
      history.push("/" + path);
      //   console.log();
    };
    // console.log("ss");
  }
  render() {
    // console.log();
    let { pathname } = this.props.location;
    return (
      <>
        {this.state.navList.map((v) => {
          let { id, name } = v;
          return (
            <li key={id} onClick={this.handleClick(name)}>
              {pathname === "/" + name ? ">" : ""} {name}
            </li>
          );
        })}
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <MyLink></MyLink>
          {/* activeClassName也需要精确匹配 */}
          {/* <li>
            <NavLink activeClassName="select" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="select" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="select" to="/dashbord">
              Dashbord
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="select" to="/profile">
              Profile
            </NavLink>
          </li> */}
        </ul>
        <Switch>
          {/* component 可以渲染任何组件  */}
          <Route exact path="/home" component={Home}></Route>
          {/* render 只能渲染函数式组件 渲染类组件的时候需要返回一个函数并把props传入进去  */}
          <Route
            path="/about"
            render={(props) => <About {...props}></About>}
          ></Route>
          {/* children 只能渲染函数式组件 渲染类组件的时候需要返回一个函数并把props传入进去 
        children 在任何路由下都会匹配的到 但是加上 Switch 包裹后变成排他性路由就不会渲染
         组件只挂载一次 可以通过prop.match.path获取到当前路由  */}
          <Route
            path="/dashbord"
            children={(props) => <DashBord {...props}></DashBord>}
          ></Route>

          <Route path="/profile">
            <Profile></Profile>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
