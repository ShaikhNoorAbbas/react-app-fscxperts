import React, { useState, useEffect } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../Context/cryptocontext";
import axios from "axios";
import { Line } from "react-chartjs-2";

import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";
import { Button } from "react-bootstrap";
import "./coininfo.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function CoinInfo({ coin }) {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [loading, setLoading] = useState(false);
  const fetchHistoricalData = async () => {
    setLoading(true);
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricalData(data.prices);
    setLoading(false);
  };

  console.log(historicalData);

  useEffect(() => {
    fetchHistoricalData();
  }, [days, currency]);
  return (
    <div className="info-container">
      {!historicalData | loading ? (
        <div className="loading"></div>
      ) : (
        <>
          <Line
            data={{
              labels: historicalData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: historicalData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "rgb(83, 146, 247)",
                  backgroundColor: "rgb(83, 146, 247)",
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  grid: {
                    color: "rgb(255, 242, 242)",
                  },
                },
                x: {
                  grid: {
                    color: "rgb(255, 242, 242)",
                  },
                },
              },
              elements: {
                point: {
                  radius: 1,
                  backgroundColor: "#5392f7",
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <Button
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setLoading(false);
                  
                }}className="selectbutton"
                selected={day.value === days}
              >
                {day.label}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
