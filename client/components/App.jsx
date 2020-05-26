import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Navigating the taxonomic ranks</h1>
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  )
}

export default App
