import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

// Disabling service worker for now
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

ReactDOM.render(
    <BrowserRouter>
        {Routes.routes}
    </BrowserRouter>
    ,
    document.getElementById('root')
)
// registerServiceWorker();
