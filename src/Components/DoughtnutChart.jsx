import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
const DoughtnutChart = ({ Data }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Doughnut Chart</h1>
      <div className="card">
        <Doughnut data={Data} />
      </div>
    </>
  );
};

export default DoughtnutChart;
