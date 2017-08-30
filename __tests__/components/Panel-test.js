jest.dontMock('../../src/js/components/Panel.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import Panel from '../../src/js/components/Panel.react.js';
const _panel = shallow(<Panel/>);

import Heading from '../../src/js/components/Heading.react.js';
import SubHead from '../../src/js/components/SubHead.react.js';
import Details from '../../src/js/components/Details.react.js';

describe('<Panel />', () => {
  it('should exist', () => {
    expect(_panel).toBeTruthy();
  });

  it('renders a div with class "panel"', () => {
    expect(_panel.find('div.panel')).toHaveLength(1);
  });

  it('renders a div with class "headings"', () => {
    expect(_panel.find('div.headings')).toHaveLength(1);
  });

  it('renders a div with class "flex-row"', () => {
    expect(_panel.find('div.flex-row')).toHaveLength(1);
  });

  it('renders a <Heading /> component', () => {
    expect(_panel.find(Heading)).toHaveLength(1);
  });

  it('renders a <SubHead /> component', () => {
    expect(_panel.find(SubHead)).toHaveLength(1);
  });

  it('renders a <Details /> component', () => {
    expect(_panel.find(Details)).toHaveLength(1);
  });
});
