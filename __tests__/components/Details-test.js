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

  it('renders a form tag"', () => {
    expect(_details.find('form')).toHaveLength(1);
  });

  it('renders 1 label tag when the panel_topic is "intro"', () => {
    const _details = shallow(<Details panel_topic="intro"/>);
    expect(_details.find('label')).toHaveLength(1);
  });

  it('renders 3 label tags when the panel_topic is "movies"', () => {
    const _details = shallow(<Details panel_topic="movies"/>);
    expect(_details.find('label')).toHaveLength(3);
  });

  it('renders 2 label tags with class "choice" when the panel_topic is "movies"', () => {
    const _details = shallow(<Details panel_topic="movies"/>);
    expect(_details.find('label.choice')).toHaveLength(2);
  });

  it('renders 1 input tag when the panel_topic is "intro"', () => {
    const _details = shallow(<Details panel_topic="intro"/>);
    expect(_details.find('input')).toHaveLength(1);
  });

  it('renders 2 input tags when the panel_topic is "movies"', () => {
    const _details = shallow(<Details panel_topic="movies"/>);
    expect(_details.find('input')).toHaveLength(2);
  });

});
