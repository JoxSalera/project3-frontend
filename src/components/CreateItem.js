import { useState, useEffect } from "react";

const CreateItem = (props) => {
  function handleChange(e) {
    const copyItems = JSON.parse(JSON.stringify(props.items));
    const item = copyItems[props.index];
    item[e.target.id] = e.target.value;

    props.setItems(copyItems);
  }

  return (
    <>
      <div>
        <h3>New Item</h3>
      </div>
      <form onChange={handleChange}>
        <input
          type="text"
          value={props.items[props.index].name}
          id="name"
          placeholder="title"
        />
        <input
          type="text"
          value={props.items[props.index].description}
          id="description"
          placeholder="Description"
        />
        <input
          type="text"
          value={props.items[props.index].address}
          id="address"
          placeholder="address"
        />
        <input
          type="text"
          value={props.items[props.index].picture}
          id="picture"
          placeholder="image"
        />
      </form>
    </>
  );
};

export default CreateItem;
