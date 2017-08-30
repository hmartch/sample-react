jest.dontMock('../../src/js/components/AppParent.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import AppParent from '../../src/js/components/AppParent.react.js';
const _appParent = shallow(<AppParent />);

import GlobalFooter from '../../src/js/components/GlobalFooter.react.js';

describe('<AppParent />', () => {
  it('should exist', () => {
    expect(_appParent).toBeTruthy();
  });

  it('renders an <GlobalFooter /> component', () => {
    expect(_appParent.find(GlobalFooter)).toHaveLength(1);
  });
});