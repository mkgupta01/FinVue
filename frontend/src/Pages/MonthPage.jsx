
import NavContainer from "../components/NavBox";
import MonthContainer from "../components/MonthBox";
import MonthGraphContainer from "../components/MonthGraphBox";

const MonthPage = () => {
  return (
    <div class="flex flex-row justify-between px-24 py-10 ">
      <div class="flex justify-evenly px-4">
        <MonthContainer/> 
      </div>
      <div class="flex flex-col justify-evenly">
        <MonthGraphContainer />
        <NavContainer />
      </div>
    </div>
  );
};

export default MonthPage;
