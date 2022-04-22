import service from "../api/apiHandler";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Profile.css";

const Profile = (props) => {
  // The "{ userId }" must match with name of const variable defined in backend routes ("profile.routes.js")
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [deleted, setDeleted] = useState(false);
  const [itineraries, setItineraries] = useState();
  const handleRemoveItinerary = async (e) => {
    const response = await service.delete(`/delete-itinerary/${e.target.id}`);
    setDeleted(true);
    console.log(response);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const fetchUsers = async () => {
      try {
        // manually sending token to backend
        // Retrieving userId params from our backend
        const { data } = await service.get(`/profile/${userId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setItineraries(data.itineraries);
        setUser(data.user);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchProfile = async () => {
      const { data } = await service.get(`/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setItineraries(data.userItinerary);
      setUser(data.user);
    };
    if (props.self) {
      fetchProfile();
    } else {
      fetchUsers();
    }
  }, [userId, deleted, props.self]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p> Itineraries created by {user.username}</p>

      {itineraries.map((itinerary) => {
        return (
          <div
            className="ItineraryCard"
            key={itinerary._id}
            style={{ backgroundImage: `url("${itinerary.image}")` }}
          >
            <Link to={`/itineraries/${itinerary._id}`}>
              {/* <img className="PreviewPic" src="/images/paris.jpg" alt="logo" /> */}
            </Link>
            {/* <Link to={`/edit-itinerary/${itinerary._id}`}>
              <button>Edit</button>
            </Link> */}
            <button onClick={handleRemoveItinerary} id={itinerary._id}>
              Delete
            </button>
            <h3>"{itinerary.name}"</h3>
            <h3>{itinerary.city}</h3>
            {itinerary.tags.map((tag) => {
              return (
                <div className="Tags" key={tag.name}>
                  <p className="Tags">#{tag.name}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      <Link to="/">
        <button>Back to Itineraries</button>
      </Link>
    </div>
  );
};

export default Profile;
