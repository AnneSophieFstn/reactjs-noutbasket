import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Matchs from "../pages/Matchs.jsx";
import Evenements from "../pages/Evements.jsx";
import Navbar from "./Navbar.jsx";
import App from "../App.js";

export default function Navigation() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/matchs" element={<Matchs />} />
        <Route path="/evenements" element={<Evenements />} />
      </Routes>
    </Router>
  );
}
