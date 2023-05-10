import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const People = (props) => {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/`)
      .then((serverResponse) => {
        // console.log(serverResponse)
        setPerson(serverResponse.data);
      })
      .catch( err => {
        console.log("***********ERROR************", err)
      navigate("/asdad")});
  }, [id]);

  return (
    <div className="card p-3">
      <h5 className="card-header">{person?.name}</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Height: {person?.height}</li>
        <li className="list-group-item">Mass: {person?.mass}</li>
        <li className="list-group-item">
          Hair Color: {person?.hair_color}
        </li>
        <li className="list-group-item">
          Skin Color: {person?.skin_color}
        </li>
      </ul>
    </div>
  );
};

export default People;
