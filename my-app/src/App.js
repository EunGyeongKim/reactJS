import { useState, useEffect, useInsertionEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1> Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}> {showing ? "hide" : "show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
