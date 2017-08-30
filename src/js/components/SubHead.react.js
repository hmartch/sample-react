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
        <p>Let&apos;s talk about movies.</p>
      );
    }

    return (
      <div className="subhead">{subhead}</div>
    )
  }
}

module.exports = SubHead;
