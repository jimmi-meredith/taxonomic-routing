import React from 'react'

import ranks from '../../data/ranks'

const RankList = ({ match }) => {
  const { rankName } = match.params
  const rankList = ranks[rankName]
  return (
    <div className='rank-list'>
      <h2>{rankName}</h2>
      <ul>
        {rankList.map(rankItem => {
          return <li><Link to={`/rank/${rankName}/${rankItem.name}`}>{rankItem.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default RankList
