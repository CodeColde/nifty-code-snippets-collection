import React from "react";

function Form() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })

  // same function can be used to update multiple values in the state
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default Form;

// Credit: Harshmakadia