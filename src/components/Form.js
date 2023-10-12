import React, { useState } from "react";

// Define a functional component called Form that takes handleSubmit and history as props
const Form = ({ handleSubmit, history }) => {
  // Define the searchEntry state variable using the useState hook
  const [searchEntry, setSearchEntry] = useState("");

  // Define a function called updateSearchInput that updates the searchEntry state variable
  const updateSearchInput = e => {
    setSearchEntry(e.target.value);
  };

  // Render the form component
  return (
    <form
      className="search-form"
      onSubmit={e => handleSubmit(e, history, searchEntry)}
    >
      {/* Render an input element with type text */}
      {/* When the value of the input changes, call the updateSearchInput function */}
      {/* Set the value of the input to the searchEntry state variable */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
      />

      {/* Render a button element with type submit */}
      {/* Set the className of the button based on the searchEntry value */}
      {/* Disable the button if the searchEntry is empty or contains only whitespace */}
      <button
        type="submit"
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
      >
        {/* Render an SVG icon */}
      </button>
    </form>
  );
};

// Export the Form component as the default export of this module
export default Form;
