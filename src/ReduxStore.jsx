import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const asyncDispatchMiddleware = store => next => action => {
  let syncActivityFinished = false
  let actionQueue = []

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)) // flush queue
    actionQueue = []
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction])

    if (syncActivityFinished) {
      flushQueue()
    }
  }

  const actionWithAsyncDispatch =
    Object.assign({}, action, { asyncDispatch })

  next(actionWithAsyncDispatch)
  syncActivityFinished = true
  flushQueue()
}


export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  asyncDispatchMiddleware,
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store