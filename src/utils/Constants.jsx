import keyMirror from 'key-mirror'

export const PATHS = {
    HOME : '/home',
    PROFILE: '/profile'
}

export const GlobalActionTypes = keyMirror({
  INC: null,
  DEC: null,
  PING_REQUEST: null,
  PING_RESPONSE: null
})