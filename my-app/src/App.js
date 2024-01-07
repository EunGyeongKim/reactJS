import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(() => {
    console.log("call the api");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>test</button>
    </div>
  );
}

export default App;
