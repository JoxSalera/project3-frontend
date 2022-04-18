import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Itineraries from "./pages/Itineraries";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
