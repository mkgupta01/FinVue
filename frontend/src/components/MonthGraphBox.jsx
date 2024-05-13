import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart } from '@mui/x-charts/PieChart';

const MonthGraphContainer = () => {
  const month = "Mar"
  const [TotalIn, setTotalIn] = useState(0);
  const [TotalOut, setTotalOut] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem('id')
      const res = await axios.get(`/api/v1/get-total/${id}/${month}`);
      setTotalIn(res.data.totalIn);
      setTotalOut(res.data.totalOut)
    }
    fetchData();
  }, [])

  return (

    <div className="h-72 w-[28rem] ml=6 px-8 py-4 opacity-65 z-10 bg-white rounded-lg">
      <h2 className="text-black font-extrabold text-4xl">Graph</h2>
      <div className="h-8">

        <PieChart
        colors={['green', 'brown']}
          series={[
            {
              data: [
                { id: 0, value: TotalIn, label: 'In' },
                { id: 1, value: TotalOut, label: 'Out' },
              ],
            },
          ]}
          width={400}
          height={200}
        />



      </div>
    </div>
  );
};

export default MonthGraphContainer;
