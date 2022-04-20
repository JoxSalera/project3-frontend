import { useState } from "react";

const AddItinerary = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    city: "",
    creator: "",
    image: "",
    tags: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // props.setCurrentSports([...props.currentSports, inputData]);
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
          value={inputData.title}
          id="title"
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
          value={inputData.creator}
          id="creator"
          placeholder="creator"
        />
        <input
          type="text"
          value={inputData.image}
          id="image"
          placeholder="image"
        />
        <input
          value={inputData.tags}
          id="tags"
          type="text"
          placeholder="tags"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddItinerary;
