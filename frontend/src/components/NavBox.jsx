const NavContainer = () => {
  const but_style = "rounded bg-blue-500 px-4 py-2 text-center text-lg text-black hover:bg-blue-700"
  return (
    <div className="mt-6 h-[11rem] w-[28rem] px-8 py-8 opacity-65 bg-white rounded-lg flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-4">
        <a href='/profile' className={but_style}>
          Profile
        </a>
        <a href="/about" className={but_style}>
          About Us
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <a href="/year" className={but_style}>
          Year
        </a>
        <a className={but_style}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default NavContainer;
