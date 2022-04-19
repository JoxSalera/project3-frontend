import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_ENDPOINT = "http://localhost:5005/api/itinerary";

const ItineraryOne = () => {
  const [itineraryItem, setItineraryItem] = useState([]);
  const [itinerary, setItinerary] = useState({});

  const { itineraryId } = useParams();

  useEffect(() => {
    const getItinerary = async () => {
      try {
        const { data } = await axios.get(`${API_ENDPOINT}/${itineraryId}`);
        setItineraryItem(data.itineraryItem);
        setItinerary(data.itinerary);
      } catch (err) {
        console.error(err);
      }
    };
    getItinerary();
  }, [itineraryId]);

  const tags = itinerary?.tags
    ? itinerary.tags.map((tag) => {
        return (
          <div className="tagsCard" key={tag._id}>
            <h3>{tag.name}</h3>
          </div>
        );
      })
    : null;

  const item = itineraryItem.map((item) => (
    <div className="itemCard" key={item._id}>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <h3>{item.addresse}</h3>
      <h3>{item.picture}</h3>
    </div>
  ));

  return (
    <div>
      {tags}
      {item}
      <Link to="/itineraries">
        <button>Back to Itineraries</button>
      </Link>
    </div>
  );
};

export default ItineraryOne;
