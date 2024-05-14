import { useEffect, useState } from "react";
import axios from "axios";
import sortDataByMonth from "../utilities/sortByMonth";

const YearContainer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const id = localStorage.getItem("id");
        const res = await axios.get(`/api/v1/get-year/${id}`);
        const sortedData = sortDataByMonth(res.data.data)
        setData(sortedData);
      } catch (error) {
        console.log("Error in fetching data");
      }
    };

    fetchedData();
  }, [])

  
  return (
    <div class="h-72 w-108 px-8 py-4 opacity-65 bg-white rounded-lg">
      <h2 class="text-black font-extrabold text-4xl">2024</h2>
      <ul class="mt-2 h-52 w-104 bg-gray-200 rounded-lg py-3 pl-8">
        {/* <!-- Headers --> */}
        <li class="flex justify-between items-center text-base font-bold">
          <span class="w-1/4">Month</span>
          <span class="w-1/4">In</span>
          <span class="w-1/4">Out</span>
          <span class="w-1/4">Save</span>
        </li>

        <li class="w-[28rem] my-2 flex justify-between items-center text-base border-t-2 border-black"></li>

        {/* <!-- Data --> */}

        {
          Object.entries(data).map(([month, value]) => {
            const dataArr = value.split("_");
            return (
              <li class="flex justify-between items-center text-base">
                <span class="w-1/4">{month}</span>
                <span class="w-1/4">₹ {dataArr[0]}</span>
                <span class="w-1/4">₹ {dataArr[1]}</span>
                <span class="w-1/4 font-bold">₹ {dataArr[0] - dataArr[1]}</span>
              </li>
            );
          })
        }
      </ul>

    </div>
  );
};

export default YearContainer;
