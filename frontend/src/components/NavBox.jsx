const NavContainer = () => {
  return (
    <div class="mt-6 h-[12rem] w-[28rem] px-8 py-8 opacity-65 bg-white rounded-lg flex flex-col justify-between">
      <div class="grid grid-cols-2 gap-4">
        <a href='/month' class="rounded-md bg-red-500 px-5 py-2 text-2xl font-large text-black shadow-md transition duration-150 ease-in-out hover:bg-rose-500 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-600">
          Profile
        </a>
        <a class="rounded-md bg-red-500 px-5 py-2 text-2xl font-large text-black shadow-md transition duration-150 ease-in-out hover:bg-rose-500 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-600">
          About Us
        </a>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <a class="rounded-md bg-red-500 px-5 py-2 text-2xl font-large text-black shadow-md transition duration-150 ease-in-out hover:bg-rose-500 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-600">
          Insurance
        </a>
        <a class="rounded-md bg-red-500 px-5 py-2 text-2xl font-large text-black shadow-md transition duration-150 ease-in-out hover:bg-rose-500 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-600">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default NavContainer;
