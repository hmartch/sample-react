// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppParent from '../js/components/AppParent.react.js';
import Page from '../js/components/Page.react.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppParent}>
      {/* add the routes here */}
      <IndexRoute component={Page}/>
    </Route>
  </Router>
), document.getElementById('root'));
