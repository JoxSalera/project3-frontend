import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Itineraries from "./pages/Itineraries";
import Profile from "./pages/Profile";
import AddItinerary from "./components/AddItinerary";
import OneItinerary from "./pages/OneItinerary";
// import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Itineraries />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="itineraries/:itineraryId" element={<OneItinerary />} />
        <Route path="/new-itinerary" element={<AddItinerary />} />
      </Routes>
    </div>
  );
}
export default App;
