import { PolarArea, Radar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function PolarRadarChart({ Data }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pb-3">Radar Chart</h1>
      <div className="card">
        <Radar data={Data} />
      </div>
      <h1 className="text-3xl font-bold text-center pb-3">Polar Chart</h1>
      <div className="card">
        <PolarArea data={Data} />
      </div>
    </div>
  );
}
