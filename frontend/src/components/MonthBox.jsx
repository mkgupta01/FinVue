import { useEffect, useState } from "react";
import axios from "axios";
import AddExpense from "./AddExpense";

const MonthContainer = () => {
  const [data, setData] = useState([]);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [month, setMonth] = useState(localStorage.getItem('month'));

  const toggleAddExpense = () => {
    setShowAddExpense(!showAddExpense);
  };

  function calculateTotal(data, ind) {
    //takes array and index
    let total = 0;
    data.forEach((entry) => {
      const dataArr = entry.split("_");
      total += parseInt(dataArr[ind]);
    });
    return total;
  }

  const handleMonthChange = async (e) => {
    const newMonth = e.target.value;
    localStorage.setItem('month', newMonth);
    setMonth(newMonth); 
    window.location.reload();
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/get-data/${id}/${month}`);
        setData(res.data.expensesForMonth);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [month]);

  return (
    <div className="h-[31rem] w-108 px-8 py-4 opacity-65 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        
        <select className="text-black font-extrabold text-3xl" onChange={ handleMonthChange } value={month}>
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>


        <button
          className="relative bg-blue-700 text-white px-5 py-2 rounded"
          onClick={toggleAddExpense}
        >
          Add
        </button>
      </div>

      {showAddExpense && <AddExpense />}

      <ul className="mt-2 h-[26rem] w-104 bg-gray-200 rounded-lg py-3 pl-8">
        {/* <!-- Headers --> */}
        <li className="flex justify-between items-center text-base font-bold">
          <span className="w-1/4">Date</span>
          <span className="w-1/4">In</span>
          <span className="w-1/4">Out</span>
          <span className="w-1/4">Comment</span>
        </li>

        <li className="w-[28rem] my-2 flex justify-between items-center text-base border-t-2 border-black"></li>

        {/* <!-- Data --> */}
        {data.map((p) => {
          const dataArr = p.split("_");
          return (
            <li className="flex my-1 justify-between items-center text-base">
              <span className="w-1/4">{dataArr[1]}</span>
              <span className="w-1/4">₹{dataArr[2]}</span>
              <span className="w-1/4">₹{dataArr[3]}</span>
              <span className="w-1/4 text-blue-500">{dataArr[4]}</span>
            </li>
          );
        })}

        <li className="w-[28rem] my-2 flex justify-between items-center text-base border-t-2 border-black"></li>

        {/* <---------TOTAL----------->  */}

        <li className="flex bottom-0 justify-between items-center text-base font-bold">
          <span className="w-1/4">Total</span>
          <span className="w-1/4">{calculateTotal(data, 2)}</span>
          <span className="w-1/4">{calculateTotal(data, 3)}</span>
          <span
            className="w-1/4"
            style={{
              color:
                calculateTotal(data, 2) - calculateTotal(data, 3) > 0
                  ? "green"
                  : "red",
            }}
          >
            {Math.abs(calculateTotal(data, 2) - calculateTotal(data, 3))} (P/L)
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MonthContainer;
