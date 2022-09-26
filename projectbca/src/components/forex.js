import axios from "axios";
import React, { useEffect, useState } from "react";
import "./crypto.css";
import { HiOutlineSearch } from "react-icons/hi";

export default function Forex() {
  const [forex, setForex] = useState([]);
  const [search, setSearch] = useState("");
  const fetchForex = () => {
    axios
      .get(
        "https://fcsapi.com/api-v3/forex/latest?id=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200&access_key=lE4DT4urJjMmosSI4ggpv"
      )
      .then((r) => {
        console.log(r);
        setForex(r.data.response);
      });
  };
  useEffect(() => {
    fetchForex();
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = forex.filter((coin) =>
    coin.s.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="forexb">
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
                <th>Currency</th>
                <th style={{ textAlign: "right" }}>
                  <span>Price</span>
                </th>
                <th style={{ textAlign: "right" }}>24h Change in %</th>
                <th style={{ textAlign: "right" }}>24h Change in price</th>
                <th style={{ textAlign: "right" }}>Open</th>
                <th style={{ textAlign: "right" }}>High</th>
                <th style={{ textAlign: "right" }}>Low</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin) => {
                let profit = parseFloat(coin.cp) >= 0;
                let profit1 = parseFloat(coin.ch) >=0;
                return (
                  <tr>
                    <td>
                      <span>{coin.s}</span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <span>{coin.c}</span>
                    </td>
                    <td align="right">
                      <span
                        className="coin-style-percent"
                        style={{
                          color: profit > 0 ? "rgb(14,203,129)" : "red",
                        }}
                      >
                        {coin.cp}
                      </span>
                    </td>
                    <td align="right">
                      <span
                        className="coin-style-percent"
                        style={{
                          color: profit1 > 0 ? "rgb(14,203,129)" : "red",
                        }}
                      >
                        {coin.ch}
                      </span>
                    </td>
                    <td align="right">
                      <p className="coin-marketcap">{coin.o}</p>
                    </td>
                    <td align="right">
                      <p className="coin-marketcap">{coin.h}</p>
                    </td>
                    <td align="right">
                      <p className="coin-marketcap">{coin.l}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
