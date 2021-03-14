
import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Players from './screens/Players/Players'
import PlayerCreate from './screens/PlayerCreate/PlayerCreate'
import PlayerEdit from './screens/PlayerEdit/PlayerEdit'
import PlayerDetail from './screens/PlayerDetail/PlayerDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/add-player" component={PlayerCreate} />
        <Route exact path="/players/:id/edit" component={PlayerEdit} />
        <Route exact path="/players/:id" component={PlayerDetail} />
      </Switch>
    </div>
  )
}

export default App