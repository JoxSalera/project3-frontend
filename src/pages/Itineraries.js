import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import service from "../api/apiHandler";
import "./Itineraries.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [searchParams] = useSearchParams();

  // AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const getItineraries = async () => {
      try {
        const q = searchParams.get("q");
        const data = await service.searchItineraries(q);
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
          <p>
            {itinerary.tags.map((tag) => {
              return (
                // <div className="tagsCard" key={tag._id}>
                <span>#{tag.name} </span>
                // {/* </div> */}
              );
            })}
          </p>
        </Link>
      </div>
    );
  });

  return (
    <div className="wrapper">
      <h1>ITINERARIES</h1>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="ItinerariesList"
      >
        {allItineraries}
      </div>

      <Link to="/new-itinerary">
        <button className="create-btn">Create a new Itinerary</button>
      </Link>
    </div>
  );
};

export default Itineraries;
