import React from 'react';

import Heading from './Heading.react.js';
import SubHead from './SubHead.react.js';
import Details from './Details.react.js';

class Panel extends React.Component {
  render() {
    return (
      <div className="panel" id={this.props.panel_topic}>
        <div className="flex-row">
          <div className="headings">
            <Heading
              panel_topic={this.props.panel_topic} />
            <SubHead
              panel_topic={this.props.panel_topic} />
          </div>
          <Details panel_topic={this.props.panel_topic} />
        </div>
      </div>
    )
  }
}

module.exports = Panel;
