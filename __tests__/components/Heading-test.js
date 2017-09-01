jest.dontMock('../../src/js/components/Heading.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import Heading from '../../src/js/components/Heading.react.js';
const _heading = shallow(<Heading/>);

describe('<Heading />', () => {
  it('should exist', () => {
    expect(_heading).toBeTruthy();
  });

  it('renders a div with class "heading"', () => {
    expect(_heading.find('div.heading')).toHaveLength(1);
  });

  it('renders an h2 tag', () => {
    expect(_heading.find('h2')).toHaveLength(1);
  });

  it('renders the expected text when the panel_topic is "intro"', () => {
    const _heading = shallow(<Heading panel_topic="intro"/>);
    expect(_heading.find('h2').text()).toBe('Welcome.');
  });

  it('renders the expected text when the panel_topic is "result"', () => {
    const _heading = shallow(<Heading panel_topic="result"/>);
    expect(_heading.find('h2').text()).toBe('Thanks!');
  });
});
