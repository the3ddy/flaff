// dependencies
import React from 'react';
import { shallow } from 'enzyme';
// components
import Show from './Show';

// initialization
// let wrapped;
// beforeEach(() => {
//   wrapped = shallow(<Show />);
// });

// initialization
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

test('shows Show component', () => {
  const wrapper = setup();
  expect(wrapper.find('.showing').text()).toEqual('Show me something');
});
