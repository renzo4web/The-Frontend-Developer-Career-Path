import React from "react";

const Form = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    location: "",
    vegetarian: false,
    kosher: false,
    lactose: false,
  });

  const handleChange = (event) => {};

  return (
    <div>
      <form>
        <fieldset>
          <legend>Travel Form</legend>

          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              value={fields.firstName}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </label>

          <br />

          <label htmlFor="lastName">
            last Name
            <input
              type="text"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              onBlur={handleChange}
            />
          </label>
          <br />

          <label htmlFor="age">
            Age
            <input
              type="number"
              name="age"
              onChange={handleChange}
              onBlur={handleChange}
              min="18"
              max="99"
              value={fields.age}
            />
          </label>

          <br />

          <label htmlFor="gender">
            Gender Male
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              onBlur={handleChange}
              value="Male"
              value={fields.gender}
              checked={fields.gender === "Male"}
            />
          </label>

          <label htmlFor="gender">
            Gender Female
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              onBlur={handleChange}
              value="Female"
              value={fields.gender}
              checked={fields.gender === "Female"}
            />
          </label>

          <br />

          <label htmlFor="location">
            Location
            <select value={fields.location} name="location" id="location">
              <option value="Argentina">Argentina</option>
              <option value="Mexico">Mexico</option>
              <option value="Peru">Peru</option>
            </select>
          </label>

          <br />

          <fieldset>
            <legend>Dietary Restrictions</legend>
            <label htmlFor="vegetarian">
              <input
                type="checkbox"
                name="vegetarian"
                id="vegetarian"
                checked={fields.vegetarian}
              />
            </label>
            <br />
            <label htmlFor="kosher">
              <input type="checkbox" name="kosher" id="kosher" onChange={} checked={fields.kosher} />
            </label>
            <br />
            <label htmlFor="lactose">
              <input type="checkbox" name="lactose" id="lactose" checked={fields.lactose} />
            </label>
            <br />
          </fieldset>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
