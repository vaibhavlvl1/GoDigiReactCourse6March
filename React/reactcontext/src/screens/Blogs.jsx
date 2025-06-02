import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/Action";

function Blogs() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => dispatch(increment())}>ADD</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
      <h1>This is Blogs</h1>
    </div>
  );
}

export default Blogs;
