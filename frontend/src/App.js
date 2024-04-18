import ParticleBackground from "./components/Particles";
import HomePage from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MonthPage from "./Pages/MonthPage";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <ParticleBackground
        id="particle"
        className="absolute inset-0 z-0 h-full w-full"
      />


      <Router>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/month" element={<MonthPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
