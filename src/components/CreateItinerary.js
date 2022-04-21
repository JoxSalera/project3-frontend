import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import service from "../api/apiHandler";
import CreateItem from "./CreateItem";

const CreateItinerary = () => {
  const itemTemplate = {
    name: "",
    description: "",
    address: "",
    picture: "",
  };

  const [inputData, setInputData] = useState({
    name: "",
    city: "",
    image: "",
    tags: [],
  });

  const [items, setItems] = useState([{ ...itemTemplate }]);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const { data } = await service.get("/tags");
        console.log(
          "The data I am getting for tags after destructuring through the service.get is ",
          data
        );
        setTags(data);
      } catch (err) {
        console.error(err);
      }
    };
    getTags();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const itineraryToCreate = { ...inputData, items: items };
      const { data, status } = await service.post(
        "new-itinerary",
        itineraryToCreate
      );
      if (status === 201) {
        console.log("Navigate");
        Navigate(`/itineraries/${data.newItinerary._id}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addItemForm = (e) => {
    e.preventDefault();
    if (items.length <= 7) setItems([...items, { ...itemTemplate }]);
  };

  function handleChange(e) {
    if (e.target.name) {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
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
          name="name"
          placeholder="title"
        />
        <input
          type="text"
          value={inputData.city}
          name="city"
          placeholder="city"
        />
        <input
          type="text"
          value={inputData.image}
          name="image"
          placeholder="image"
        />

        <select value={inputData.tags} name="tags" id="tags">
          {tags.map((tag) => (
            <option value={tag._id} key={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
        <div>
          {items.map((item, index) => (
            <CreateItem items={items} setItems={setItems} index={index} />
          ))}
        </div>
        <button onClick={addItemForm}>Add Item</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateItinerary;
