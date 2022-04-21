import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Itineraries from "./pages/Itineraries";
import OneItinerary from "./pages/OneItinerary";
import CreateItinerary from "./pages/CreateItinerary";
import EditItinerary from "./pages/EditItinerary";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import IsPrivate from "./components/IsPrivate";
import IsAnonymous from "./components/IsAnonymous";
// import Layout from "./components/Layout";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Itineraries />} />
        <Route path="/itineraries/:itineraryId" element={<OneItinerary />} />
        <Route
          path="/edit-itinerary/:itineraryId"
          element={<EditItinerary />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={
            <IsAnonymous>
              <LogIn />
            </IsAnonymous>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile self={true} />
            </IsPrivate>
          }
        />
        <Route
          path="/new-itinerary"
          element={
            <IsPrivate>
              <CreateItinerary />
            </IsPrivate>
          }
        />
        <Route path="/profile/:userId" element={<Profile />} />

      </Routes>
    </div>
  );
}
export default App;
