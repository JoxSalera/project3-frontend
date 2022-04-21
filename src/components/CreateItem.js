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
        <h3>Add an activity</h3>
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
          placeholder="Description of your activity"
        />
        <span>Address: </span>
        <input
          type="text"
          value={props.items[props.index].street}
          id="street"
          placeholder="Street"
        />
        <br />
        <input
          type="text"
          value={props.items[props.index].streetNumber}
          id="streetNumber"
          placeholder="Street number"
        />
        <br />
        <input
          type="text"
          value={props.items[props.index].postCode}
          id="postCode"
          placeholder="Postal code"
        />
        <input
          type="text"
          value={props.items[props.index].picture}
          id="picture"
          placeholder="Add an image"
        />
      </form>
    </>
  );
};

export default CreateItem;
