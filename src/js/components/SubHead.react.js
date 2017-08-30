import React from 'react';

class SubHead extends React.Component {
  render() {
    if (this.props.panel_topic === 'intro') {
      var subhead = (
        <p>Tell me about yourself.</p>
      );
    }
    else if (this.props.panel_topic === 'movies') {
      var subhead = (
        <p>Do you have a favorite movie?</p>
      );
    }

    return (
      <div className="subhead">{subhead}</div>
    )
  }
}

module.exports = SubHead;
