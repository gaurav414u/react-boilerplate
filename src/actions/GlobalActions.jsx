import { GlobalActionTypes } from '../utils/Constants'

export function increaseCount() {
  return {
    type: GlobalActionTypes.INC
  }
}

export function decreaseCount() {
  return {
    type: GlobalActionTypes.DEC
  }
}

export function initiatePingRequest() {
  return {
    type: GlobalActionTypes.PING_REQUEST
  }
}

export function onPingResponse(response) {
  return {
    type: GlobalActionTypes.PING_RESPONSE,
    data: response
  }
}