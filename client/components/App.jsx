import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// importing Components
import Nav from './Nav'
import Home from './Home'
import RankList from './RankList'
import RankItem from './RankItem'
import Species from './Species'

const App = () => {
  return (
    // Only need to use 'Router' once, and in the App component
    <Router>
      <div className='app'>
        <h1>Navigating the taxonomic ranks</h1>
        <div className='container'>
          {/* Defining the route paths for each component that needs a new page */}
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path='/' component={Home} />
            {/* params here must match deconstructed params in components */}
            <Route path='/list/:rankName' component={RankList} />
            <Route path='/rank/:rankName/:rankItem' component={RankItem} />
            <Route path='/species/:speciesId' component={Species} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
