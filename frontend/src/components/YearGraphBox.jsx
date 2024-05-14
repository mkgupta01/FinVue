import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart } from '@mui/x-charts/BarChart';
import sortDataByMonth from "../utilities/sortByMonth";

const YearGraphContainer = () => {

  const [data, setData] = useState([]);
  const [inVal, setInVal] = useState([]);
  const [outVal, setOutVal] = useState([]);
  const [labels, setLabel] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const id = localStorage.getItem("id");
        const res = await axios.get(`/api/v1/get-year/${id}`);
        const fetchedData = res.data.data;
        const sortedData = await sortDataByMonth(fetchedData);
        setData(sortedData);


        // converting the data for graph purpose
        const tempLabels = [];
        const tempInVal = [];
        const tempOutVal = [];

        for (const month in sortedData) {
            if (sortedData.hasOwnProperty(month)) {
                const [inValue, outValue] = data[month].split('_'); // Split the value by underscore
                tempLabels.push(month);
                tempInVal.push(parseInt(inValue));
                tempOutVal.push(parseInt(outValue));
            }
        }

        setLabel(tempLabels)
        setInVal(tempInVal)
        setOutVal(tempOutVal)

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

        <BarChart
          xAxis={[{ scaleType: 'band', data: labels}]}
          series={[{ data: inVal, label: "In" }, { data: outVal, label: "Out"}]}
          width={400}
          height={250}
        />

      </div>
    </div>
  );
};

export default YearGraphContainer;
