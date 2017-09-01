import React from 'react';

import Panel from './Panel.react.js';

class Page extends React.Component {
  render() {
    return (
      <div className="pagecontent">
        <Panel />
      </div>
    )
  }
}

module.exports = Page;
