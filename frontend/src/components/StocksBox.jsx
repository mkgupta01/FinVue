const StocksContainer = () => {
  return (
    <div class="mt-6 h-[12rem] w-108 mx-4 px-8 py-4 opacity-65 bg-white rounded-lg">
      <div class="flex justify-between items-center">
        <h2 class="text-black font-extrabold text-3xl">Stocks</h2>
        <button class="relative bg-blue-700 text-white px-5 py-2 rounded">
          Add
        </button>
      </div>

      <ul class="mt-2 h-[7rem] w-104 bg-gray-200 rounded-lg py-3 pl-8">
        {/* <!-- Headers --> */}
        <li class="flex justify-between items-center text-base font-bold">
          <span class="w-1/4">Name</span>
          <span class="w-1/4">Price</span>
          <span class="w-1/4">Current Rate</span>
          <span class="w-1/4">P/L</span>
        </li>

        <li class="w-[28rem] my-2 flex justify-between items-center text-base border-t-2 border-black"></li>

        {/* <!-- Data --> */}
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">Suzlon</span>
          <span class="w-1/4">₹ 1000</span>
          <span class="w-1/4">₹ 500</span>
          <span class="w-1/4 text-green-500">₹ 500</span>
        </li>
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">EFZ</span>
          <span class="w-1/4">₹ 100</span>
          <span class="w-1/4">₹ 50</span>
          <span class="w-1/4 text-red-500">₹ 500</span>
        </li>
      </ul>
    </div>
  );
};

export default StocksContainer;
