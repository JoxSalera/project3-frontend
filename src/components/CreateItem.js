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
          placeholder="description"
        />
        <span>Address: </span>
        <input
          type="text"
          value={props.items[props.index].street}
          id="street"
          placeholder="street"
        />
        <br />
        <input
          type="text"
          value={props.items[props.index].streetNumber}
          id="streetNumber"
          placeholder="streetNumber"
        />
        <br />
        <input
          type="text"
          value={props.items[props.index].postCode}
          id="postCode"
          placeholder="postCode"
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
