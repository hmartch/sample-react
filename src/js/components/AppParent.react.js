import React from 'react';

import GlobalFooter from './GlobalFooter.react.js';

class AppParent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}

        <GlobalFooter />
      </div>
    )
  }
}

module.exports = AppParent;
