import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import service from "../api/apiHandler";
import CreateItem from "../components/CreateItem";

const CreateItinerary = () => {
  const navigate = useNavigate();

  // STATES --------------------------------------------------------

  const itemTemplate = {
    name: "",
    description: "",
    street: "",
    streetNumber: 0,
    postCode: "",
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

  // useEffects --------------------------------------------------------

  useEffect(() => {
    const getTags = async () => {
      try {
        const { data } = await service.get("/tags");
        setTags(data);
      } catch (err) {
        console.error(err);
      }
    };
    getTags();
  }, []);

  // reformatting function for the items ----------------------------

  const reformatItems = (unformattedItems) => {
    const formattedItems = unformattedItems.map((item) => {
      const formattedItem = {
        name: item.name,
        description: item.description,
        picture: item.picture,
        address: {
          street: item.street,
          streetNumber: item.streetNumber,
          postCode: item.postCode,
        },
      };
      return formattedItem;
    });
    return formattedItems;
  };

  // handle functions -----------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedItems = reformatItems(JSON.parse(JSON.stringify(items)));
      const itineraryToCreate = { ...inputData, items: formattedItems };
      const { data, status } = await service.post(
        "new-itinerary",
        itineraryToCreate
      );
      if (status === 201) {
        console.log("Navigate");
        navigate(`/itineraries/${data.newItinerary._id}`);
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

        <select multiple value={inputData.tags} name="tags" id="tags">
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
