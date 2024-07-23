import { useReducer } from "react";

function dateCounterReducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + state.step };
    case "minus":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(dateCounterReducer, initialState);
  const { count, step } = state;

  const date = new Date("July 22 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - step);
    dispatch({ type: "minus" });
  };

  const inc = function () {
    // setCount((count) => count + step);
    dispatch({ type: "plus" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
