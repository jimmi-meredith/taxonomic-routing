import React from 'react'
import { Link, Route } from 'react-router-dom'

import ranks from '../../data/ranks'
import SpeciesList from './SpeciesList'

const RankItem = ({ match }) => {
  const { rankName, rankItem } = match.params
  const rankDetails = ranks[rankName].filter(item => item.name === rankItem)[0]

  return (
    <div className='rank-list'>
      <h2>{rankName}</h2>
      <p>{rankDetails.description}</p>
      <Link to={`${match.url}/species`}>Show species</Link>
      <Route path='rank/:rankName/:rankItem/:species' component={SpeciesList} />
    </div>
  )
}

export default RankItem
