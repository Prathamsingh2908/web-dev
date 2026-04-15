import React from "react";

const App = () => {
  const numbers = [1, 2, 3, 4, 5];
};

return (
  <main>
    {numbers.map((number) => (
      <ul>
        <li>{number}</li>
      </ul>
    ))}
  </main>
);

export default App;
