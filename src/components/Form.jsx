import React, { useState } from "react";
import "../bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const [selectValue, setSelectValue] = useState("people");
  const [apiId, setApiId] = useState(1);

  const searchButt = (e) => {
    e.preventDefault();
    navigate(`/${selectValue}/${apiId}`);
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setApiId(e.target.value);
  };

  return (
    <>
      <form className="d-flex gap-5" onSubmit={searchButt}>
        <select
          className="form-select"
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option>Search for:</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label className="form-label">ID:</label>
        <input
          type="number"
          min="1"
          className="form-control"
          onChange={handleInputChange}
          value={apiId}
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>
    </>
  );
}

export default Form;