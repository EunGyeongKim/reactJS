import { useState, useEffect, useInsertionEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [resultCoin, setResultCoin] = useState(0);
  const [selectCoins, setselectCoins] = useState([]);
  const [dallors, setDallors] = useState(0);
  const dallorsOnChange = (event) => setDallors(event.target.value);

  const coinChange = (event) => setselectCoins(event.target.value);

  const onClick = (event) => {
    setResultCoin((preCoin) => selectCoins / dallors);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1> The coins! ({coins.length})</h1>

      {loading ? (
        <strong> loading..... </strong>
      ) : (
        <select onChange={coinChange}>
          <option value={1}>--- Select coin ---</option>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <div>
        <input
          value={dallors}
          onChange={dallorsOnChange}
          type="text"
          placeholder="input your dallors"
        ></input>
        <button onClick={onClick}> convert! </button>
        <text value={resultCoin}> convert : {resultCoin} </text>
      </div>
    </div>
  );
}
export default App;
