import React from "react";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] },
];

const findId = (id) => {
  return PEEPS.find((item) => {
    return item.id === id;
  });
};

export default function RecursivePaths() {
  return (
    <Switch>
      <Route path="/:id">
        <Person />
      </Route>
      <Redirect from="/" to="/0"></Redirect>
    </Switch>
  );
}

function Person() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  let person = findId(parseInt(id));

  return (
    <>
      <h1>{person.name}的朋友：</h1>
      <ul>
        {person.friends.map((id) => {
          return (
            <li key={id}>
              <Link to={`${url}/${id}`}>{findId(id).name}</Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Person />
        </Route>
      </Switch>
    </>
  );
}
