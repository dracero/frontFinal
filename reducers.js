import * as types from './types'

// INITIAL TIMER STATE
const initialTimerState = {
  token: "",
}

// TIMER REDUCER
const tokenreducer = (state = initialTimerState, action) => {
  switch (action.type) {
    case types.LOGGED:
      return {
        token: JSON.parse(action.payload),
      }
    default:
      return state
  }
}

export default tokenreducer