import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import ReduxExample from './ReduxExample';

class AppContainer extends React.Component {

    render() {
        return <ReduxExample {...this.props} />
    }
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        movieCount: state.movieCount,
        searchedMovies: state.searchedMovies,
        // Autres props a prendre dans le store general et a binder au state pour les utiliser ici...
    };
};

export default connect(() => mapStateToProps, mapDispatchToProps)(AppContainer);