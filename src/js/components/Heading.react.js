import React from 'react';

class Heading extends React.Component {

  render() {
    if (this.props.panel_topic === 'intro') {
      var heading = (
        <span>
        Welcome.
        </span>
      );
    }
    else if (this.props.panel_topic === 'result') {
      var heading = 'Thanks!';
    }

    return (
      <div className="heading"><h2>{heading}</h2></div>
    )
  }
}

module.exports = Heading;
