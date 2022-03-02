import * as types from './types'

// INCREMENT COUNTER BY 1
export const logtoken = (payload) => 
({
     type: types.LOGGED, 
     payload
 })