// Jest

import React from 'react';
import ReactDOM from 'react-dom';
import { App, gets } from './App';

console.log("------", typeof getCakes);
console.log("------", getCakes());

// Jest Mock Function
jest.mock('cakes'); // src/__mocks__/Cakes.js

// Assertion for a promise must be returned.
it('works with promises on mock functions', () => {
  expect.assertions(1);

  return getCakes().then(data => expect(data.token).toEqual('mytoken'));
  // return expect(Promise.resolve({token: 'myjwt'}).resolves.toEqual({token: 'myjwt'}));
});



describe("Cake component with API call", function () {
  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({token: 'myjwt'}));
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
