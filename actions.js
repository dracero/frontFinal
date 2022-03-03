import * as types from './types'

// STORAGER THE TOKEN VALUE
export const logtoken = (payload) => 
({
     type: types.LOGGED, 
     payload
 })