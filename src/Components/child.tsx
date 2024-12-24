import { useStore } from "../store";

export function Child() {
  const { count } = useStore((state: { count: number }) => state);

  
  return (
    <div>
      <p>the count is: {count}</p>
    </div>
  );
}
