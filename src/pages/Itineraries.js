import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import service from "../api/apiHandler";
import "./Itineraries.css";
import { AuthContext } from "../context/auth.context";

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [searchParams] = useSearchParams();
  const { logOutUser, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const getItineraries = async () => {
      try {
        const q = searchParams.get("q");
        const data = await service.searchItineraries(q);
        console.log("the data i get from searchItineraries is ", data);
        setItineraries(data);
      } catch (err) {
        console.error(err);
      }
    };
    getItineraries();
  }, [searchParams]);

  const allItineraries = itineraries.map((itinerary) => {
    return (
      <div className="Itineraries" key={itinerary._id}>
        <Link to={`/itineraries/${itinerary._id}`}>
          <h3>{itinerary.name}</h3>
        </Link>
        <p>
          {itinerary.tags.map((tag) => {
            return (
              <div className="tagsCard" key={tag._id}>
                <span>#{tag.name} </span>
              </div>
            );
          })}
        </p>
      </div>
    );
  });

  return (
    <div className="ItinerariesList">
      <h1>Itineraries</h1>
      {allItineraries}
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Log out</button>
        </>
      )}
      <Link to="/new-itinerary">
        <button>Create a new Itinerary</button>
      </Link>
    </div>
  );
};

export default Itineraries;
