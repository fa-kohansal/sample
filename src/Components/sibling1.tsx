import { useStore } from "../store";
export function Sibling1() {
  const { count, increaseCount, decreaseCount } = useStore((state) => state);
  return (
    <div className="siblingOne">
      <h2>Sibling1</h2>
      <div className="counter">
        <button onClick={increaseCount}>+</button>
        <p>Count is: {count}</p>
        <button onClick={decreaseCount}>-</button>
      </div>
    </div>
  );
}
