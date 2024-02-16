import { Bar } from "react-chartjs-2";

const BarChart = ({ Data }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Bar Chart</h1>
      <div className="card">
        <Bar data={Data} />
      </div>
    </>
  );
};

export default BarChart;
