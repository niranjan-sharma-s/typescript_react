import React, { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = {
  type: string;
  payload: number;
};
const initialState = { count: 0 };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
    case "DECREMENT":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Counter : {state.count}
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
          Increment by 10
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
          DECREMENT by 10
        </button>
      </div>
    </>
  );
};

export default Counter;
