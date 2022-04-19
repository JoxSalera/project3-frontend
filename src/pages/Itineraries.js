import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_ENDPOINT = "http://localhost:5005/api/itineraries";

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const getItineraries = async () => {
      try {
        const { data } = await axios.get(`${API_ENDPOINT}`);
        console.log({ data });
        setItineraries(data);
      } catch (err) {
        console.error(err);
      }
    };
    getItineraries();
  }, []);

  const allItineraries = itineraries.map((itinerary) => {
    return (
      <div className="Itineraries" key={itinerary._id}>
        <Link to={`/itineraries/${itinerary._id}`}>
          <h3>{itinerary.name}</h3>
        </Link>
      </div>
    );
  });

  return (
    <div className="ItinerariesList">
      <h1>Itineraries</h1>
      {allItineraries}
      <Link to="/new-itinerary">
        <button>Create a new Itinerary</button>
      </Link>
    </div>
  );
};

export default Itineraries;
