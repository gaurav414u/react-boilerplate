import { GlobalActionTypes } from '../utils/Constants'

const initialState = {
  count: 0
}

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function countReducer(state = initialState, action) {
  let nextState = { ...state }
  switch (action.type) {
    case GlobalActionTypes.INC:
      nextState.count += 1
      return nextState
    case GlobalActionTypes.DEC:
      nextState.count -= 1
      return nextState
    default:
      return state
  }
}