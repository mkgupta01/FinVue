
import StocksContainer from "../components/StocksBox";
import YearContainer from "../components/YearBox";
import NavContainer from "../components/NavBox";
import YearGraphContainer from "../components/YearGraphBox";

const YearPage = () => {
  return (
    <div class="flex flex-col px-20 py-10">
      <div class="flex justify-evenly">
        <YearContainer/>
        <YearGraphContainer />
      </div>
      <div class="flex justify-evenly">
        <StocksContainer />
        <NavContainer />
      </div>
    </div>
  );
};

export default YearPage;
