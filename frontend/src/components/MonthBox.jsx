const MonthContainer = () => {
    return (
      <div class="h-[31rem] w-108 px-8 py-4 opacity-65 bg-white rounded-lg">
        <h2 class="text-black font-extrabold text-4xl">March</h2>
        <ul class="mt-2 h-[26rem] w-104 bg-gray-200 rounded-lg py-3 pl-8">
          {/* <!-- Headers --> */}
          <li class="flex justify-between items-center text-base font-bold">
            <span class="w-1/4">Date</span>
            <span class="w-1/4">In</span>
            <span class="w-1/4">Out</span>
            <span class="w-1/4">Comment</span>
          </li>
  
          <li class="w-[28rem] my-2 flex justify-between items-center text-base border-t-2 border-black"></li>
  
          {/* <!-- Data --> */}
          <li class="flex justify-between items-center text-base">
            <span class="w-1/4">1</span>
            <span class="w-1/4">₹ 1000</span>
            <span class="w-1/4">₹ 500</span>
            <span class="w-1/4 text-green-500">Shopping</span>
          </li>
          <li class="flex justify-between items-center text-base">
            <span class="w-1/4">4</span>
            <span class="w-1/4">₹ 1000</span>
            <span class="w-1/4">₹ 500</span>
            <span class="w-1/4 text-green-500">Dinner</span>
          </li>
          <li class="flex justify-between items-center text-base">
            <span class="w-1/4">7</span>
            <span class="w-1/4">₹ 1000</span>
            <span class="w-1/4">₹ 500</span>
            <span class="w-1/4 text-blue-500">Fees</span>
          </li>
          <li class="flex justify-between items-center text-base">
            <span class="w-1/4">9</span>
            <span class="w-1/4">₹ 1000</span>
            <span class="w-1/4">₹ 500</span>
            <span class="w-1/4 text-blue-500">Party</span>
          </li>
          <li class="flex justify-between items-center text-base">
            <span class="w-1/4">10</span>
            <span class="w-1/4">₹ 1000</span>
            <span class="w-1/4">₹ 1500</span>
            <span class="w-1/4 text-blue-500">Grocery</span>
          </li>

          <li class="w-[28rem] my-2 flex justify-between items-center text-base border-t-2 border-black"></li>

           {/* <---------TOTAL----------->  */}
           <li class="flex bottom-0 justify-between items-center text-base font-bold">
            <span class="w-1/4">Total</span>
            <span class="w-1/4">4000</span>
            <span class="w-1/4">6000</span>
            <span class="w-1/4">Loss</span>
          </li>

        </ul>
      </div>
    );
  };
  
  export default MonthContainer;
  