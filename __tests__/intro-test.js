// NOTE : LES TESTS NE PASSENT PAS, VOIR
// https://github.com/facebook/jest/issues/2081 POUR PLUS D'INFO


import 'react-native';
import React from 'react';
import ReduxExample from '../app/containers/ReduxExample';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ReduxExample />).toJSON();
  expect(tree).toMatchSnapshot();
});