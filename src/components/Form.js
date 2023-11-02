import React, { useState } from "react";

const Form = () => {
  // initialize state/state of entire application :)
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    admin: false,
  });

  // !DRY/instead of having eventHandler for each input type
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    // case of checkbox
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    // !spread oldState & return newState/update old state
    // !using dynamic object properties
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={state.firstname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastname"
        id="lastname"
        value={state.lastname}
        onChange={handleChange}
      />

      <label htmlFor="admin">Admin</label>
      <input
        type="checkbox"
        name="admin"
        id="admin"
        checked={state.admin}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
};

export default Form;
