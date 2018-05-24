import React from 'react'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import {Switch, Route } from 'react-router-dom'
import Home from './Home'
import * as C from '../utils/Constants'
import Store, { history } from '../ReduxStore'


class Main extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={C.PATHS.HOME} component={Home} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Main