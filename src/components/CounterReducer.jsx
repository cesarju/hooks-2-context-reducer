import { useReducer } from "react";

export default function CounterReducer() {
  // const [cont, setCont] = useState(0);

  function reducer(state, action) {
    switch (action.type) {
      case "sum": {
        return { ...state, cont: state.cont + 1 };
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, { cont: 0 });

  return (
    <div>
      <h2>{state.cont}</h2>
      <button
        onClick={() => {
          dispatch({ type: "sum" });
        }}
      >
        +
      </button>
      <button>-</button>
    </div>
  );
}
