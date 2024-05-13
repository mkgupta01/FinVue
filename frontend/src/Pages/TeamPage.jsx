
const YearPage = () => {
  return (
    <div class="flex flex-col px-24 py-10">
      <div class="flex justify-evenly mx-4">
        <YearContainer/>
        <YearGraphContainer />
      </div>
      <div class="flex justify-evenly mx-4">
        <StocksContainer />
        <NavContainer />
      </div>
    </div>
  );
};

export default YearPage;
