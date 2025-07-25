import { INCREMENT, DECREMENT } from "./Actions";

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default: {
      return state;
    }
  }
}
