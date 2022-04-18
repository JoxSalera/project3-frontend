import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const getItineraries = async () => {
      const { data } = await axios.get(`${API_URL / itineraries}`);
      setItineraries(data);
    };
    getItineraries();
  }, [itineraries]);

  return (
    <div className="ItinerariesList">
      <h1>Itineraries</h1>
      {itineraries.map((itinerary) => {
        return (
          <div className="ItineraryCard" key={itinerary._id}>
            <Link to={`/itineraries/${itinerary._id}`}>
              <h3>{itinerary.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Itineraries;
