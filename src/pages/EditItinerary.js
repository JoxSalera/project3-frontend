import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../api/apiHandler";
import EditItem from "../components/EditItem";

const EditItinerary = () => {
  const { itineraryId } = useParams();
  const navigate = useNavigate();
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

  const reformatItems = (unformattedItems) => {
    const formattedItems = unformattedItems.map((item) => {
      const formattedItem = {
        _id: item._id,
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
  useEffect(() => {
    const getItinerary = async () => {
      try {
        const { data } = await service.get(`/itinerary/${itineraryId}`);
        setInputData(data.itinerary);
        setItems(data.itineraryDetails || []);
      } catch (err) {
        console.error(err);
      }
    };
    getItinerary();
  }, [itineraryId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const itineraryToEdit = {
        ...inputData,
        items: reformatItems(JSON.parse(JSON.stringify(items))),
      };
      console.log(itineraryToEdit, "heeeeeeeeeey");

      const { data, status } = await service.put(
        `/edit-itinerary/${itineraryId}`,
        itineraryToEdit
      );
      if (status === 201) {
        console.log("Navigate");
        navigate(`/itineraries/${itineraryId}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  function handleChange(e) {
    if (e.target.name) {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
    const addItemForm = (e) => {
      // e.preventDefault();
      // if (items.length <= 7) setItems([...items, { ...itemTemplate }]);
    };
  }
  return (
    <>
      <div>
        <h1>Edit Itinerary</h1>
      </div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <span>Itinerary Name: </span>
        <input
          type="text"
          value={inputData.name}
          name="name"
          placeholder="title"
        />
        <br />
        <span>City: </span>
        <input
          type="text"
          value={inputData.city}
          name="city"
          placeholder="city"
        />
        <br />
        <span>Picture: </span>
        <input
          type="text"
          value={inputData.image}
          name="image"
          placeholder="image"
        />
        <br />
        <span>Tags: </span>
        <select value={inputData.tags} name="tags" id="tags">
          {tags.map((tag) => (
            <option value={tag._id} key={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
        <br />
        <br />


    return (
      <>
        <div className="form-style-5">
          <h1>Edit Itinerary</h1>

        <div>
          {items.map((item, index) => (
            <EditItem items={items} setItems={setItems} index={index} />
          ))}

        </div>
        {/* <button onClick={addItemForm}>Add Item</button> */}
        <button type="submit">Edit</button>
      </form>
    </>
  );
};

export default EditItinerary;
