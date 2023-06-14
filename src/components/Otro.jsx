import { useContext } from "react";
import { StoreProduct } from "../App";
export default function Otro() {
  const { cont, producto } = useContext(StoreProduct);
  return (
    <div>
      <h1>{cont}</h1>
      <h1>{producto}</h1>
    </div>
  );
}
