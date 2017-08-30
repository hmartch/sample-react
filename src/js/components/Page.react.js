import React from 'react';

import Panel from './Panel.react.js';

class Page extends React.Component {
  render() {
    return (
      <div className="pagecontent">
        <Panel
          panel_topic="intro" />
        <Panel
          panel_topic="movies" />
      </div>
    )
  }
}

module.exports = Page;
