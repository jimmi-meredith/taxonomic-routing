import React from 'react'
import { Link, Route } from 'react-router-dom'

import ranks from '../../data/ranks'
import SpeciesList from './SpeciesList'

// match taken in as props so the params can be deconstructed
const RankItem = ({ match }) => {
  // deconstructing params to get new variables
  // must match the defnied route params
  const { rankName, rankItem } = match.params
  // filter ranks array from database to only contain items where the id matches the params id
  const rankDetails = ranks[rankName].filter(item => item.name === rankItem)[0]

  return (
    <div className='rank-list'>
      <h2>{rankName}</h2>
      <p>{rankDetails.description}</p>
      {/* link to previously defined route */}
      <Link to={`${match.url}/species`}>Show species</Link>
      <Route path='/rank/:rankName/:rankItem/species' component={SpeciesList} />
    </div>
  )
}

export default RankItem
