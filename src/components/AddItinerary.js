import { useState, useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = "http://localhost:5005/api/tags";

const AddItinerary = () => {
  const [inputData, setInputData] = useState({
    name: "",
    city: "",
    image: "",
    tags: "",
  });

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const { data } = await axios.get(`${API_ENDPOINT}`);
        setTags(data);
      } catch (err) {
        console.error(err);
      }
    };
    getTags();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  }

  return (
    <>
      <div>
        <h1>New Itinerary</h1>
      </div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <input
          type="text"
          value={inputData.name}
          id="name"
          placeholder="title"
        />
        <input
          type="text"
          value={inputData.city}
          id="city"
          placeholder="city"
        />
        <input
          type="text"
          value={inputData.image}
          id="image"
          placeholder="image"
        />

        <select value={inputData.tags} name="tags" id="tags">
          {tags.map((tag) => (
            <option value={tag._id} key={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddItinerary;
