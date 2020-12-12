import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({search, saveSearch, saveConsult}) => {

  const [ error, saveError ] = useState(false)

  const { city, country } = search;

  //function that places the elements in the state
  const handleChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //when user hit submit
  const handleSubmit = e => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      saveError(true)
      return;
    }

    saveError(false)

    saveConsult(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      {error ? <p className="error red darken-4">All fields are required</p> : null}
      <div className="input-field col s12" >
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          style={{marginTop: "1rem"}}
          onChange={handleChange}
          
        />

        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          style={{marginTop: "1rem"}}
          onChange={handleChange}
        >
          <option value="">-- Choose a Country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>

        <label htmlFor="country">Country: </label>
      </div>

      <div className="input-field col s12">
        <input 
          type="submit"
          value="Search Weather"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          style={{marginTop: "1rem"}}
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveConsult: PropTypes.func.isRequired
}
export default Form;
