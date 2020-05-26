import React from 'react'
import { Link } from 'react-router-dom'

import species from '../../data/species'

const SpeciesList = ({ match }) => {
  const { rankName, rankItem } = match.params
  const speciesMatches = species.filter(item => item[rankName] === rankItem)

  return (
    <div className='species-list'>
      <h2>Species</h2>
      <ul>
        {speciesMatches.map((speciesItem, key) => {
          return <li key={key}>
            <Link to={`/species/${speciesItem.id}`}>{speciesItem.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default SpeciesList
