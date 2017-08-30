import React from 'react';

class Details extends React.Component {
  render() {
    if (this.props.panel_topic === 'intro') {
      var panel_details = (
        <div>

        </div>
      );
    }
    else if (this.props.panel_topic === 'movies') {
      var panel_details = (
        <div>
          
        </div>
      );
    }

    return (
      <div className="details">{panel_details}</div>
    )
  }
}

module.exports = Details;
