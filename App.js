import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, comboneReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger, logger } from 'redux-logger';

import { Router, Stack } from 'react-native-router-flux';

import reducer from './app/reducers';
import Routes from './app/routes/index';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            {Routes}
          </Stack>
        </Router>
      </Provider>
    );
  }
}