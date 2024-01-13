import { useState, useEffect, useInsertionEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dallors, setDallors] = useState(0);
  const dallorsOnChange = (event) => {
    setDallors(event.target.value);
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
      <h1> The coins! {loading ? "" : `(${coins.length})`}</h1>

      <input
        value={dallors}
        onChange={dallorsOnChange}
        type="text"
        placeholder="input your dallors"
      ></input>

      {loading ? (
        <strong> loading..... </strong>
      ) : (
        <li>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              {dallors == "" ? "" : ` / ${dallors / coin.quotes.USD.price}`}
            </option>
          ))}
        </li>
      )}
    </div>
  );
}
export default App;
