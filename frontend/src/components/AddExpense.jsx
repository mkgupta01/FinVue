import axios from "axios";
import { useState } from "react";

const AddExpense = () => {
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [inVal, setInVal] = useState(0);
  const [outVal, setOutVal] = useState(0);
  const [msg, setComment] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Handle submit function
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const id = localStorage.getItem("id");
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/add-data/${id}`, {
        month,
        date,
        inVal,
        outVal,
        msg,
      });
      window.location.reload();
    } catch (error) {
      alert("Error in enetering data");
    }
  };

  return (
    <>
      {showForm && (
        <div className="fixed  top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="relative border-black border-1 right-[16rem] bg-white rounded-lg p-8 shadow-2xl">
            <h2 className="text-black font-extrabold text-4xl mb-4">
              Add Expense
            </h2>

            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
              onClick={handleCloseForm}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_date"
                  className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Date
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                >
                  <option value="" disabled className="px-1">
                    Select Month
                  </option>
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
                <label
                  htmlFor="floating_month"
                  className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Month
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    value={inVal}
                    onChange={(e) => setInVal(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_in"
                    className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    In
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="number"
                    value={outVal}
                    onChange={(e) => setOutVal(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_out"
                    className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Out
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={msg}
                  onChange={(e) => setComment(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_comment"
                  className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Comment
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddExpense;
