jest.dontMock('../../src/js/components/Copyright.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import Copyright from '../../src/js/components/Copyright.react.js';
const _copyright = shallow(<Copyright/>);

describe('<Copyright />', () => {
  it('should exist', () => {
    expect(_copyright).toBeTruthy();
  });

  it('renders 1 div tag', () => {
    expect(_copyright.find('div')).toHaveLength(1);
  });
});