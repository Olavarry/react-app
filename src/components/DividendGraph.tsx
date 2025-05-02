import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DividendGraphProps {
  dividendData: number[];
}

const DividendGraph = ({ dividendData }: DividendGraphProps) => {
  const data = {
    labels: ["1", "2", "3", "4", "5"], // Labels for the latest 5 items
    datasets: [
      {
        label: "Dividends",
        data: dividendData, // Dividend values
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DividendGraph;
