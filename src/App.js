import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Itineraries from "./pages/Itineraries";
import Profile from "./pages/Profile";
import CreateItinerary from "./pages/CreateItinerary";
import EditItinerary from "./pages/EditItinerary";
import OneItinerary from "./pages/OneItinerary";
// import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Itineraries />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/itineraries/:itineraryId" element={<OneItinerary />} />
        <Route path="/new-itinerary" element={<CreateItinerary />} />
        <Route
          path="/edit-itinerary/:itineraryId"
          element={<EditItinerary />}
        />
      </Routes>
    </div>
  );
}
export default App;
