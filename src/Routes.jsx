import React from 'react'

import Home from './components/Home'
import * as C from './utils/Constants'
import { Route } from 'react-router-dom'

module.exports = {
    routes: (
        <Route path={C.PATHS.HOME} component={Home} />
    )
}