import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedMovies = createReducer({}, {
    
    [types.SET_SEARCHED_MOVIE](state, action) {
        let newState = {}
        
        action.posts.forEach( function (posts, i) {
            let title = posts.title
            newState[i] = Object.assign({}, posts, { title });
        });
        return newState;
    },
});

export const movieCount = createReducer (0, {
    [types.ADD_MOVIE](state, action) {
        return state + 1;
    },
    [types.SET_SEARCHED_MOVIE](state, action) {
        return action.posts.length;
    }
})


