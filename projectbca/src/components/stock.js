import axios from "axios";
import React, { useEffect, useState } from "react";
import "./crypto.css";
import { HiOutlineSearch } from "react-icons/hi";
import { Navigate } from "react-router-dom";

export default function Stock() {
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState("");
  const fetchStock = () => {
    axios
      .get(
        "https://fcsapi.com/api-v3/stock/latest?id=63541,63542,63543,63544,63545,63546,63547,63548,63549,63550,63551,63552,63553,63554,63555,63556,63557,63558,63559,63560,63561,63562,63563,63564,63565,63566,63567,63568,63569,63570,63571,63572,63573,63574,63575,63576,63577,63578,63579,63580,63581,63582,63583,63584,63585,63586,63587,63588,63589,63590,63591,63592,63593,63594,63595,63596,63597,63598,63599,63600,63601,63602,63603,63604,63605,63606,63607,63608,63609,63610,63611,63612,63613,63614,63615,63616,63617,63618,63619,63620,63621,63622,63623,63624,63625,63626,63627,63628,63629,63630,63631,63632,63633,63634,63635,63636,63637,63638,63639,63640,63641,63642,63643,63644,63645,63646,63647,63648,63649,63650,63651,63652,63653,63654,63655,63656,63657,63658,63659,63660,63661,63662,63663,63664,63665,63666,63667,63668,63669,63670,63671,63672,63673,63674,63675,63676,63677,63678,63679,63680,63681,63682,63683,63684,63685,63686,63687,63688,63689,63690,63691,63692,63693,63694,63695,63696,63697,63698,63699,63700,63701,63702,63703,63704,63705,63706,63707,63708,63709,63710,63711,63712,63713,63714,63715,63716,63717,63718,63719,63720,63721,63722,63723,63724,63725,63726,63727,63728,63729,63730,63731,63732,63733,63734,63735,63736,63737,63738,63739&access_key=qBJLO7y2C7vgbLEm8lIcb"
      )
      .then((r) => {
        console.log(r);
        setStock(r.data.response);
      });
  };
  useEffect(() => {
    fetchStock();
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = stock.filter(
    (coin) =>
      coin.s.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="stockb">
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
                <th>Company</th>
                <th style={{ textAlign: "right" }}>
                  <span>Price</span>
                </th>
                <th style={{ textAlign: "right" }}>24h Change in %</th>
                <th style={{ textAlign: "right" }}>24h Change in price</th>
                <th style={{ textAlign: "right" }}>Currency symbol</th>
                <th style={{ textAlign: "right" }}>Exchange</th>
                <th style={{ textAlign: "right" }}>Country</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin) => {
                let profit = parseFloat(coin.cp) >= 0;
                let profit1 = parseFloat(coin.ch) >= 0;
                return (
                  <tr onClick={() => Navigate(`/stock/${coin.s}`)}>
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
                      <p className="coin-marketcap">{coin.ccy}</p>
                    </td>
                    <td align="right">
                      <p className="coin-marketcap">{coin.exch}</p>
                    </td>
                    <td align="right">
                      <p className="coin-marketcap">{coin.cty}</p>
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
