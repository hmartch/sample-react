jest.dontMock('../../src/js/components/SubHead.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import SubHead from '../../src/js/components/SubHead.react.js';
const _subhead = shallow(<SubHead/>);

describe('<SubHead />', () => {
  it('should exist', () => {
    expect(_subhead).toBeTruthy();
  });

  it('renders a div with class subhead', () => {
    expect(_subhead.find('div.subhead')).toHaveLength(1);
  });

  it('renders a p tag with the expected text when the panel_topic is "intro"', () => {
    const _subhead = shallow(<SubHead panel_topic="intro"/>);
    expect(_subhead.find('p')).toHaveLength(1);
    expect(_subhead.find('p').text()).toBe('Tell me about yourself.');
  });

  it('renders a p tag with the expected text when the panel_topic is "movies"', () => {
    const _subhead = shallow(<SubHead panel_topic="movies"/>);
    expect(_subhead.find('p')).toHaveLength(1);
    expect(_subhead.find('p').text()).toBe('Let\'s talk about movies.');
  });
});
