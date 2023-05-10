import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';


const Planet = (props) => {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}/`)
      .then((serverResponse) => {
        // console.log(serverResponse)
        setPlanet(serverResponse.data);
        // console.log(serverResponse.data)
      })
      .catch( err => {
        console.log("***********ERROR************", err)
      navigate("/asdad")});
  }, [id]);
  return (
    <div className="card p-3">
    <h5 className="card-header">{planet?.name}</h5>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Diameter: {planet?.diameter}</li>
      <li className="list-group-item">Climate: {planet?.climate}</li>
      <li className="list-group-item">Terrain: {planet?.terrain}</li>
      <li className="list-group-item">Population: {planet?.population}</li>
    </ul>
  </div>
  )
}

export default Planet