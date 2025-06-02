import { useReducer } from "react";
import styles from "./Blog.module.css";

const images = [
  {
    url: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=900",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=900",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=900",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=900",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=900",
    id: 5,
  },
  {
    url: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=900",
    id: 6,
  },
];

const initialState = { index: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return { index: state.index + 1 };
    case "prev":
      return { index: state.index - 1 };
  }
}

export default function Blog() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>This is Blog</h1>
      <img className={styles.image} src={`${images[state.index].url}`} alt="" />
      <button
        disabled={state.index == images.length - 1 ? true : false}
        onClick={() => dispatch({ type: "next" })}
      >
        Next
      </button>
      <button
        disabled={state.index == 0 ? true : false}
        onClick={() => dispatch({ type: "prev" })} 
      >
        Prev
      </button>
    </>
  );
}
