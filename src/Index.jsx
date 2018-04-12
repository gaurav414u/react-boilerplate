import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css'

// Disabling service worker for now
// import registerServiceWorker from './registerServiceWorker';

import Routes from './Routes'

ReactDOM.render(
    <BrowserRouter>
        {Routes.routes}
    </BrowserRouter>
    ,
    document.getElementById('root')
)
// registerServiceWorker();
