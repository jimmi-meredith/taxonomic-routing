import React from 'react'
import { Link } from 'react-router-dom'

import ranks from '../../data/ranks'

const RankList = ({ match }) => {
  const { rankName } = match.params
  const rankList = ranks[rankName]

  return (
    <div className='rank-list'>
      <h2>{rankName}</h2>
      <ul>
        {rankList.map((rankItem, key) => {
          return (
            <li key={key}>
              <Link to={`/rank/${rankName}/${rankItem.name}`}>{rankItem.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RankList
