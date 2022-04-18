import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Itineraries from "./pages/Itineraries";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itineraries" element={<Itineraries />} />
      </Routes>
    </div>
  );
}
export default App;
