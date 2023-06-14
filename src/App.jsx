import { createContext, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";

export const StoreProduct = createContext({});

function App() {
  const [cont, setCont] = useState(0);
  const [view, setView] = useState(false);

  const producto = "Poleras";

  return (
    <StoreProduct.Provider value={{ cont, producto }}>
      <h1>{producto}</h1>
      <button
        onClick={() => {
          setCont(cont + 1);
        }}
      >
        +
      </button>
      <span>{cont}</span>
      <button
        onClick={() => {
          setCont(cont - 1);
        }}
      >
        -
      </button>
      <button
        onClick={(event) => {
          setView(!view);
        }}
      >
        {view ? "Hiden" : "Show me"}
      </button>
      {view ? <Counter /> : <h1>Esta en la tienda</h1>}
    </StoreProduct.Provider>
  );
}

export default App;
