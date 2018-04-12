import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FluxApp from './utils/FluxApp'
import './styles/index.css'

// Initializing the fluxapp and the alt
let fluxApp = new FluxApp() // eslint-disable-line no-unused-vars
console.log("FluxApp initialized")

// This need to be after FluxApp creation because this will create stores which need alt instance
let Routes = require('./Routes')

// Disabling service worker for now
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        {Routes.routes}
    </BrowserRouter>
    ,
    document.getElementById('root')
)
// registerServiceWorker();
