import React, { useReducer } from "react";

//this component was made for understanding react  useReducer hook in detail.

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, showtext: state.showtext };
      break;
    case "toggleview":
      return { count: state.count, showtext: !state.showtext };
      break;
    default:
      return state;
  }
};
export default function Increment() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showtext: true });
  // const update=()=>
  // {
  //     dispatch({type:"increment"});
  //     dispatch({type:"toggleview"});
  // }
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          dispatch({ type: "toggleview" });
        }}
      >
        increase
      </button>
      {state.showtext && <p>this is text</p>}
    </div>
  );
}
