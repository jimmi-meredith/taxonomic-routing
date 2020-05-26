import React from 'react'
import { Link } from 'react-router-dom'

import ranks from '../../data/ranks'

// Create variable of an array of the keys from the ranks object
const rankList = Object.keys(ranks)

const Nav = () => {
  return (
    <div className='nav'>
      <h2>Nav</h2>
      {rankList.map((rankName, key) => {
        return (
          <li key={key}>
            <Link to={`/list/${rankName}`}>{rankName}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Nav
