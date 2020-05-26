import React from 'react'
// import ability to link to previously defined routes
import { Link } from 'react-router-dom'

// importing ranks info from database
import ranks from '../../data/ranks'

// Create variable of an array of the keys from the ranks object
const rankList = Object.keys(ranks)

const Nav = () => {
  return (
    <div className='nav'>
      <h2>Nav</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {/* map over rankList array taken from ranks data */}
        {rankList.map((rankName, key) => {
          return (
            <li key={key}>
              <Link to={`/list/${rankName}`}>{rankName}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
