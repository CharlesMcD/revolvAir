// NOTE : LES TESTS NE PASSENT PAS, VOIR
// https://github.com/facebook/jest/issues/2081 POUR PLUS D'INFO


import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
