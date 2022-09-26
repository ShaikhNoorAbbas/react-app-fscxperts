import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Context/cryptocontext";
import { SingleCoin } from "../config/api";
import CoinInfo from "./coininfo";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "./crypto";
import { Breadcrumb } from "react-bootstrap";

import "./graph.css";
export default function Graph() {
  let { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, currencysymbol } = CryptoState();
  const [loading, setLoading] = useState(false);
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    setLoading(false);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <>
      {!coin | loading ? (
        <div className="loading"></div>
      ) : (
        <div className="graphbody">
          <Breadcrumb className="breadcrumbs">
            <Breadcrumb.Item>Crypto</Breadcrumb.Item>
            <Breadcrumb.Item active>{coin?.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="crypto-container">
            <div className="crypto-bar">
              <img
                src={coin?.image.large}
                alt={coin?.name}
                className="crypto-image"
              />
              <p className="crypto-coin-name h1">{coin?.name}</p>
              <p className="crypto-coin-description h4 text-decoration-none">
                {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
              </p>
              <div className="crypto-marketdata">
                <span style={{ display: "flex" }}>
                  <p className="h3">Rank : </p>&nbsp;&nbsp;
                  <p className="h3">{coin?.market_cap_rank}</p>
                </span>
                <span style={{ display: "flex" }}>
                  <p className="h3">Current Price : </p>&nbsp;&nbsp;
                  <p className="h3">
                    {currencysymbol}{" "}
                    {numberWithCommas(
                      coin?.market_data.current_price[currency.toLowerCase()]
                    )}
                  </p>
                </span>
                <span style={{ display: "flex" }}>
                  <p className="h3">Market Cap : </p>&nbsp;&nbsp;
                  <p className="h3">
                    {currencysymbol}{" "}
                    {numberWithCommas(
                      coin?.market_data.market_cap[currency.toLowerCase()]
                        .toString()
                        .slice(0, -6)
                    )}
                    M
                  </p>
                </span>
              </div>
            </div>
            <CoinInfo coin={coin} />
          </div>
        </div>
      )}
    </>
  );
}
