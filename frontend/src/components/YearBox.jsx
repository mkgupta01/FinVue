const YearContainer = () => {
  return (
    <div class="h-72 w-108 px-8 py-4 opacity-65 bg-white rounded-lg">
      <h2 class="text-black font-extrabold text-4xl">2023</h2>
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
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">Jan</span>
          <span class="w-1/4">₹ 1000</span>
          <span class="w-1/4">₹ 500</span>
          <span class="w-1/4 text-green-500">₹ 500</span>
        </li>
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">Jan</span>
          <span class="w-1/4">₹ 1000</span>
          <span class="w-1/4">₹ 500</span>
          <span class="w-1/4 text-green-500">₹ 500</span>
        </li>
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">Jan</span>
          <span class="w-1/4">₹ 1000</span>
          <span class="w-1/4">₹ 500</span>
          <span class="w-1/4 text-green-500">₹ 500</span>
        </li>
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">Jan</span>
          <span class="w-1/4">₹ 1000</span>
          <span class="w-1/4">₹ 500</span>
          <span class="w-1/4 text-green-500">₹ 500</span>
        </li>
        <li class="flex justify-between items-center text-base">
          <span class="w-1/4">Jan</span>
          <span class="w-1/4">₹ 1000</span>
          <span class="w-1/4">₹ 1500</span>
          <span class="w-1/4 text-red-500">₹ 500</span>
        </li>
      </ul>
    </div>
  );
};

export default YearContainer;
