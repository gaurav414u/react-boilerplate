import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import countReducer from './counter'
import pingReducer from './ping'

export default combineReducers({
  routing: routerReducer,
  counter: countReducer,
  ping: pingReducer
})