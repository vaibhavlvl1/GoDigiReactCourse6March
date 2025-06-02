import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Actions";

export default function Settings() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>This is Settings</h1>

      <h2>This is Count : {count}</h2>

      <button onClick={() => dispatch(increment())}>ADD</button>
      <button onClick={() => dispatch(decrement())}>SUB</button>
    </>
  );
}
