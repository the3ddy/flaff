// dependencies
import React from 'react';
import { shallow } from 'enzyme';
// components
import App from './App';
import Show from '../show/Show';
import Header from '../header/Header';

// initialization
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

test('shows Show component', () => {
  expect(wrapped.find(Show).length).toEqual(1);
});

test('shows Header component', () => {
  expect(wrapped.find(Header).length).toEqual(1);
});
