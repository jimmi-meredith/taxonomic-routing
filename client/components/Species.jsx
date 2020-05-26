import React from 'react'
import { Link } from 'react-router-dom'

import species from '../../data/species'

const Species = ({ match }) => {
  // id in params must be changed to a number
  const speciesId = Number(match.params.speciesId)
  const speciesDetails = species.filter(item => item.id === speciesId)[0]

  return (
    <div className='species'>
      <h2>{speciesDetails.name}</h2>
      <div>
        <p>{speciesDetails.description}</p>
        <img src={speciesDetails.photo}/>
      </div>
      <ul>
        <li>Kingdom: <Link to={`/rank/kingdoms/${speciesDetails.kingdom}`}>{speciesDetails.kingdom}</Link></li>
        <li>Phylum: <Link to={`/rank/phyla/${speciesDetails.phylum}`}>{speciesDetails.phylum}</Link></li>
        <li>Class: <Link to={`/rank/classes/${speciesDetails.class}`}>{speciesDetails.class}</Link></li>
        <li>Order: <Link to={`/rank/orders/${speciesDetails.order}`}>{speciesDetails.order}</Link></li>
        <li>Family: <Link to={`/rank/families/${speciesDetails.family}`}>{speciesDetails.family}</Link></li>
        <li>Genus: <Link to={`/rank/genera/${speciesDetails.genus}`}>{speciesDetails.genus}</Link></li>
      </ul>
    </div>
  )
}

export default Species
