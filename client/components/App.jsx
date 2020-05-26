import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import RankList from './RankList'
import RankItem from './RankItem'
import Species from './Species'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Navigating the taxonomic ranks</h1>
        <div className='container'>
          <Route path='/' component={Nav} />
          <div className='content'>
            <Route exact path='/' component={Home} />
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
