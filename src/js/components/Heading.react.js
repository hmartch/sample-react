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
    else if (this.props.panel_topic === 'movies') {
      var heading = 'Movies.';
    }

    return (
      <div className="heading"><h2>{heading}</h2></div>
    )
  }
}

module.exports = Heading;
