import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
const NewChart = ({ Data }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Line Chart</h1>

      <div className="card">
        <Line data={Data} />
      </div>
    </>
  );
};

export default NewChart;
