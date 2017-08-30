import React from 'react';

import Copyright from './Copyright.react.js';

class GlobalFooter extends React.Component {
  render() {
    return (
      <footer>
        <Copyright />
      </footer>
    )
  }
}

module.exports = GlobalFooter;