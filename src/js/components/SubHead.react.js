import React from 'react';

class SubHead extends React.Component {
  render() {
    if (this.props.panel_topic === 'intro') {
      var subhead = (
        <p>Tell me about yourself.</p>
      );
    }
    else if (this.props.panel_topic === 'result') {
      var subhead = (
        <p>Since you let me save your answers, here&apos;s some info about your favorite movie.</p>
      );
    }

    return (
      <div className="subhead">{subhead}</div>
    )
  }
}

module.exports = SubHead;
