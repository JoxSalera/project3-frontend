import React from "react";
import { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import Button from "../components/Button";
import "aos/dist/aos.css";
import "./Itineraries.css";

const ItineraryOne = () => {
  const [itineraryItem, setItineraryItem] = useState([]);
  const [itinerary, setItinerary] = useState({});

  const { itineraryId } = useParams();

  // AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const getItinerary = async () => {
      try {
        const { data } = await service.get(`/itinerary/${itineraryId}`);
        setItineraryItem(data.itineraryDetails);
        setItinerary(data.itinerary);
        console.log(data.itinnerary, "la data reçu");
      } catch (err) {
        console.error(err);
      }
    };
    getItinerary();
  }, [itineraryId]);

  const item = itineraryItem.map((item) => (
    <div className="itemCard" key={item._id}>
      <div className="item-info part-left ">
        <h1>{item.name}</h1>
        <h3>{item.description}</h3>
      </div>
      {/* <h3>{item.address}</h3> */}

      <div className="image-container part-right">
        <img src={item.picture} alt={item.name} />
      </div>
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
    <>
      <div className="itinerary-container">
        <div className="itinerary-header">
          <div className="itinerary-title">
            <h2>{itinerary.name}</h2>
            <p>
              Created by{" "}
              <Link to={`/profile/${itinerary.creator?._id}`}>
                {itinerary.creator?.username}
              </Link>
            </p>
          </div>
        </div>
        <div>
          <div className="items-container">
            {item}
            {tags}
          </div>
          <div className="button itinerary-button">
            <Button text="Back to Itineraries" path="/"></Button>
            <Button
              text="Edit"
              path={`/edit-itinerary/${itineraryId}`}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItineraryOne;
