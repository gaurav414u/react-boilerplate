import { GlobalActionTypes } from '../utils/Constants'
import CloudApi from '../utils/CloudApi'
import * as GlobalActions from '../actions/GlobalActions'

const cloudApi = new CloudApi() // singleton

const initialState = {
  pingResponse: "",
  working: false
}

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function pingReducer(state = initialState, action) {
  let nextState = { ...state }
  switch (action.type) {
    case GlobalActionTypes.PING_RESPONSE:
      nextState.pingResponse = action.data
      nextState.working = false
      return nextState
    case GlobalActionTypes.PING_REQUEST:
      nextState.pingResponse = ""
      nextState.working = true
      setTimeout(() => {
        cloudApi.pingCloud((res, error = null) => {
          action.asyncDispatch(GlobalActions.onPingResponse(res))
        })
      }, 2000)
      return nextState
    default:
      return state
  }
}