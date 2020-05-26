import React from 'react'

import ranks from '../../data/ranks'

const RankItem = ({ match }) => {
  const { rankName, rankItem } = match.params
  const rankDetails = ranks[rankName].filter(item => item.name === rankItem)[0]

  return (
    <div className='rank-list'>
      <h2>{rankName}</h2>
      <p>{rankDetails.description}</p>
    </div>
  )
}

export default RankItem
