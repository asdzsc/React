import React, { useReducer } from "react";

const initState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
      };
    case "min":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleAdd = () => {
    dispatch({ type: "add" });
  };

  const handleMin = () => {
    dispatch({ type: "min" });
  };
  return (
    <div>
      <button onClick={handleAdd}>add</button>
      <div>{state.count}</div>
      <button onClick={handleMin}>min</button>
    </div>
  );
}
