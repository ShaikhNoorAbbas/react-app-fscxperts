import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { CoinList } from "../config/api";
const Crypto = createContext();
export default function CryptoContext({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [currencysymbol, setCurrencySymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    setCoins(data);
    setLoading(false);
  };
  useEffect(() => {
    if (currency === "INR") setCurrencySymbol("₹");
    else if (currency === "USD") setCurrencySymbol("$");
    else if (currency === "EUR") setCurrencySymbol("€");
    else if (currency === "RUB") setCurrencySymbol("₽");
    else if (currency === "CNY") setCurrencySymbol("¥");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{
        currency,
        currencysymbol,
        setCurrency,
        coins,
        loading,
        fetchCoins,
      }}
    >
      {children}
    </Crypto.Provider>
  );
}

export const CryptoState = () => {
  return useContext(Crypto);
};
