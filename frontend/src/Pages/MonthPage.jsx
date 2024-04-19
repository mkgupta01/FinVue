import YearGraphContainer from "../components/YearGraphBox";
import NavContainer from "../components/NavBox";
import MonthContainer from "../components/MonthBox";

const MonthPage = () => {
  return (
    <div class="flex flex-row justify-between px-24 py-10 ">
      <div class="flex justify-evenly">
        <MonthContainer/> 
      </div>
      <div class="flex flex-col justify-evenly">
        <YearGraphContainer />
        <NavContainer />
      </div>
    </div>
  );
};

export default MonthPage;
