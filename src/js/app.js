// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppParent from '../js/components/AppParent.react.js';
import Splash from '../js/components/Splash.react.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppParent}>
      {/* add the routes here */}
      <IndexRoute component={Splash}/>
    </Route>
  </Router>
), document.getElementById('root'));
