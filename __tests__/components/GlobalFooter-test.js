jest.dontMock('../../src/js/components/GlobalFooter.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import GlobalFooter from '../../src/js/components/GlobalFooter.react.js';
const _globalFooter = shallow(<GlobalFooter/>);

import Copyright from '../../src/js/components/Copyright.react.js';

describe('<GlobalFooter />', () => {
  it('should exist', () => {
    expect(_globalFooter).toBeTruthy();
  });

  it('renders a footer', () => {
    expect(_globalFooter.find('footer')).toHaveLength(1);
  });

  it('renders a <Copyright /> component', () => {
    expect(_globalFooter.find(Copyright)).toHaveLength(1);
  });
});