import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
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
      setUser(usersFetch.data.user);
    };
    fetchUsers();
  }, []);
  if (!user) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <p> {user.username}</p>
      <p>{itineraries[0].city}</p>
      <p>{itineraries[0].name}</p>
      <p>{JSON.stringify(itineraries[0].tags)}</p>

      {itineraries.map((itinerary) => {
        return (
          <div className="ItineraryCard" key={itinerary._id}>
            <Link to={`/itineraries/${itinerary._id}`}>
              <h3>{itinerary.name}</h3>
            </Link>
          </div>
        );
      })}

      {itineraries[0].tags.map((itinerary) => {
        return (
          <div className="ItineraryCard" key={itinerary._id}>
            <p>{itinerary.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
