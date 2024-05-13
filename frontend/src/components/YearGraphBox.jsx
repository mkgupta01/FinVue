import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart } from '@mui/x-charts/BarChart';

const YearGraphContainer = () => {

  const [data, setData] = useState([]);
  const [graphMatrix, setGraphMatrix] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const id = localStorage.getItem("id");
        const res = await axios.get(`/api/v1/get-year/${id}`);
        const fetchedData = res.data.data;
        setData(fetchedData);

        // converting the data for graph purpose
        const series = Object.entries(fetchedData).map(([month, values]) => {
          const [value1, value2] = values.split('_').map(Number);
          return [month, value1, value2];
        });

        console.log(graphMatrix)
        setGraphMatrix(series);
      } catch (error) {
        console.log("Error in fetching data");
      }
    };

    fetchedData();
  }, [])

  return (
    <div className="h-72 w-[28rem] ml=6 px-8 py-4 opacity-65 z-10 bg-white rounded-lg">
      <h2 className="text-black font-extrabold text-4xl">Graph</h2>
      <div className="h-8">
        {/* <BarChart
          series={graphMatrix.map((e) => ({ data: [e[1], e[2]] }))}
          height={200}
          xAxis={[{ data: Object.keys(data), scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        /> */}
      </div>
    </div>
  );
};

export default YearGraphContainer;
