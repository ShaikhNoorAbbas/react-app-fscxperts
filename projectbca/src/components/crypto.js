import React, { useState, useEffect } from "react";
import "./crypto.css";
import { HiOutlineSearch } from "react-icons/hi";
import { CryptoState } from "../Context/cryptocontext";
import { useNavigate } from "react-router-dom";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function Crypto() {
  const [search, setSearch] = useState("");
  const { currency, currencysymbol, coins, loading, fetchCoins } =
    CryptoState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchCoins();
  }, [currency]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      {!fetchCoins | loading ? (
        <div className="loading"></div>
      ) : (
        <div className="cryptob">
          <input
            type="text"
            className="searchc"
            placeholder="Search"
            onChange={handleChange}
          />
          <HiOutlineSearch className="searchcicon" />
          <div className="coin-app">
            <div className="table-responsive">
              <table className="table table-hover rounded-circle">
                <thead>
                  <tr className="coin-head">
                    <th>#</th>
                    <th>
                      <span style={{ marginLeft: "20px" }}>Coin</span>
                    </th>
                    <th style={{ textAlign: "right" }}>Price</th>
                    <th style={{ textAlign: "right" }}>24h Change</th>
                    <th style={{ textAlign: "right" }}>Total Volume</th>
                    <th style={{ textAlign: "right" }}>Market Capital</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin) => {
                    let profit = coin.price_change_percentage_24h >= 0;
                    return (
                      <tr onClick={() => navigate(`/crypto/${coin.id}`)}>
                        <td>
                          <span>{coin.market_cap_rank}</span>
                        </td>
                        <td className="coin-name">
                          <img
                            src={coin.image}
                            className="coin-image"
                            alt={coin.name}
                          />
                          <div className="coin-position">
                            <span>{coin.name}</span>
                            <span>{coin.symbol.toUpperCase()}</span>
                          </div>
                        </td>
                        <td align="right">
                          <p className="coin-price">
                            {currencysymbol}{" "}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                          </p>
                        </td>
                        <td align="right">
                          <span
                            className="coin-style-percent"
                            style={{
                              color: profit > 0 ? "rgb(14,203,129)" : "red",
                            }}
                          >
                            {profit && "+"}
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </span>
                        </td>
                        <td align="right">
                          <p className="coin-marketcap">
                            {currencysymbol}
                            {numberWithCommas(coin.total_volume)}
                          </p>
                        </td>
                        <td align="right">
                          <p className="coin-marketcap">
                            {currencysymbol}
                            {numberWithCommas(coin.market_cap)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
