import { useStore } from "../store";
export function Child() {
  const { count } = useStore((state) => state);
  return (
    <div>
      <p>the count is: {count}</p>
    </div>
  );
}
