import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };

    case "sub":
      return { count: state.count - 1 };
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ marginTop: 50 }}>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}

export default UseReducerHook;
