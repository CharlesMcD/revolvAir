import * as types from './types';

export function addMovie() {
    return {
        type: types.ADD_MOVIE,
    }
}

export function fetchMovies() {
    return (dispatch, getState) => {

        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(setSearchedMovies({posts: responseJson.movies}));
            })
            .catch((error) => {
            console.error(error);
            });
    }
}

export function setSearchedMovies({ posts }) {     // {posts} est equivalent a args.posts en ES6
    return {
        type: types.SET_SEARCHED_MOVIE,
        posts,
    }
}