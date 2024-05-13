import ParticleBackground from "./components/Particles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MonthPage from "./Pages/MonthPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import YearPage from "./Pages/YearPage";
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <ParticleBackground
        id="particle"
        className="absolute inset-0 z-0 h-full w-full"
      />


      <Router>
        <div className="relative z-10">
          <Routes>
          {/* <----------------- AUTH PAGES ------------> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/year" element={<YearPage />} />
            <Route path="/month" element={<MonthPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
