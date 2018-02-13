import React from 'react'

import App from './components/App'
import * as C from './utils/Constants'
import { Route } from 'react-router-dom'

module.exports = {
    routes: (
        <Route path={C.PATHS.HOME} component={App} />
    )
}