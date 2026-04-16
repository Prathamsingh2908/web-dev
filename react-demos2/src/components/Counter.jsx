import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>you clicked {count} times</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;
