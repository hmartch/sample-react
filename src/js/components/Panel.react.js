import React from 'react';

import Heading from './Heading.react.js';
import SubHead from './SubHead.react.js';
import Details from './Details.react.js';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {panel_topic: 'intro'};
    this.doParentChange = this.doParentChange.bind(this);
  }

  doParentChange(value) {
    this.setState({panel_topic: value});
  }

  render() {
    return (
      <div className="panel" id={this.state.panel_topic}>
        <div className="flex-row">
          <div className="headings">
            <Heading
              panel_topic={this.state.panel_topic} />
            <SubHead
              panel_topic={this.state.panel_topic} />
          </div>
          <Details parentChange={this.doParentChange} panel_topic={this.state.panel_topic} />
        </div>
      </div>
    )
  }
}

module.exports = Panel;
