import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "../BarChart";
import LineChart from "../LineChart";

import DoughtnutChart from "../DoughtnutChart";
import PolarRadarChart from "../Polar-RadarChart";

export default function Charts() {
  const [dataa, setDataa] = useState([]);
  const [limitValue, setLimitValue] = useState(10);

  const getData = () => {
    axios
      .get(
        `https://blackcoffer-backend-59g9.onrender.com/data?limit=${limitValue}`
      )
      .then((res) => {
        setDataa(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [limitValue]);

  const labels = dataa.map((el) => {
    return el.source;
  });

  const Data = {
    labels: labels,
    datasets: [
      {
        label: "intensity",
        backgroundColor: "purple",
        borderColor: "black",
        data: dataa.map((el) => {
          return el.intensity;
        }),
      },
      {
        label: "relevance",
        backgroundColor: "teal",
        borderColor: "black",
        data: dataa.map((el) => {
          return el.relevance;
        }),
      },
      {
        label: "likelihood",
        backgroundColor: "orange",
        borderColor: "black",
        data: dataa.map((el) => {
          return el.likelihood;
        }),
      },
    ],
  };

  return (
    <>
      <div>
        Enter the limit:
        <input
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          type="number"
          value={limitValue}
          placeholder="10"
          onChange={(e) => setLimitValue(Number(e.target.value))}
        />
        <BarChart Data={Data} />
        <LineChart Data={Data} />
        <PolarRadarChart Data={Data} />
        <DoughtnutChart Data={Data} />
      </div>
    </>
  );
}
