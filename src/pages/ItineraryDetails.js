import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ItineraryDetails = () => {
  // The "{ userId }" must match with name of const variable defined in backend routes ("profile.routes.js")
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [itineraries, setItineraries] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      // Retrieving userId params from our backend
      const usersFetch = await axios.get(
        `http://localhost:5005/api/profile/${userId}`
      );
      setItineraries(usersFetch.data.itineraries);
      console.log(usersFetch.data);
      setUser(usersFetch.data.user);
    };
    fetchUsers();
  }, []);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p> Itineraries created by {user.username}</p>

      {itineraries.map((itinerary) => {
        return (
          <div className="ItineraryCard" key={itinerary._id}>
            <Link to={`/itineraries/${itinerary._id}`}>
              <img className="PreviewPic" src="/images/paris.jpg" alt="logo" />
            </Link>
            <h3>"{itinerary.name}"</h3>
            <h3>{itinerary.city}</h3>
            {itinerary.tags.map((tag) => {
              return (
                <div className="Tags" key={tag.name}>
                  <p>#{tag.name}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ItineraryDetails;
