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

  it('renders 3 div tags', () => {
    expect(_details.find('div')).toHaveLength(3);
  });

  it('renders 4 label tags', () => {
    expect(_details.find('label')).toHaveLength(4);
  });

  it('renders 2 label tags with class "choice"', () => {
    expect(_details.find('label.choice')).toHaveLength(2);
  });

  it('renders 1 input type=text tag', () => {
    expect(_details.find('input[type="text"]')).toHaveLength(1);
  });

  it('renders 2 input type=radio tags', () => {
    expect(_details.find('input[type="radio"]')).toHaveLength(2);
  });

});
