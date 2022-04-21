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
        setItineraryItem(data.itineraryDetails);
        console.log(data);
        setItinerary(data.itinerary);
      } catch (err) {
        console.error(err);
      }
    };
    getItinerary();
  }, [itineraryId]);

  const item = itineraryItem.map((item) => (
    <div className="itemCard" key={item._id}>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      {/* <h3>{item.address}</h3> */}
      <h3>{item.picture}</h3>
    </div>
  ));

  const tags = itinerary?.tags
    ? itinerary.tags.map((tag) => {
        return (
          <div className="tagsCard" key={tag._id}>
            <span>#{tag.name} </span>
          </div>
        );
      })
    : null;

  return (
    <div>
      {item}
      {tags}
      <p>
        Created by{" "}
        <Link to={`/profile/${itinerary.creator?._id}`}>
          {itinerary.creator?.username}
        </Link>
      </p>
      <Link to="/">
        <button>Back to Itineraries</button>
      </Link>
      <Link to={`/edit-itinerary/${itineraryId}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default ItineraryOne;
