import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import * as C from '../utils/Constants'

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={C.PATHS.HOME} component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Main