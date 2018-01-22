import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const myCoords = createReducer({}, {
    
    [types.GET_MY_LOCATION](state, action) {
        return action.newCoords;
    },
});



