import React from 'react'

import ranks from '../../data/ranks'

// Create variable of an array of the keys from the ranks object
const rankList = Object.keys(ranks)

const Nav = () => {
  return (
    <div className='nav'>
      <h2>Nav</h2>
      {rankList.map(rank => {
        return rank
      })}
    </div>
  )
}

export default Nav
