jest.dontMock('../../src/js/components/Page.react.js');

import React from 'react';
import {shallow} from 'enzyme';

import Page from '../../src/js/components/Page.react.js';
const _page = shallow(<Page/>);

import Panel from '../../src/js/components/Panel.react.js';

describe('<Page />', () => {
  it('should exist', () => {
    expect(_page).toBeTruthy();
  });

  it('renders a div with class pagecontent', () => {
    expect(_page.find('div.pagecontent')).toHaveLength(1);
  });

  it('renders 1 <Panel /> components', () => {
    expect(_page.find(Panel)).toHaveLength(1);
  });
});
