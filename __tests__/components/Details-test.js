jest.dontMock('../../src/js/components/Details.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import Details from '../../src/js/components/Details.react.js';
const _details = shallow(<Details/>);

describe('<Details />', () => {
  it('should exist', () => {
    expect(_details).toBeTruthy();
  });

  it('renders a div with class "details"', () => {
    expect(_details.find('div.details')).toHaveLength(1);
  });

});
