import React from 'react';

class Details extends React.Component {
  render() {
    if (this.props.panel_topic === 'intro') {
      var panel_details = (
        <label>What is your name?
          <input type="text" id="name" />
        </label>
      );
    }
    else if (this.props.panel_topic === 'movies') {
      var panel_details = (
        <label>Do you have a favorite movie?
          <label className="choice">Yes <input type="radio" name="fav-movie" value="Yes" /></label>
          <label className="choice">No <input type="radio" name="fav-movie" value="No" /></label>
        </label>
      );
    }

    return (
      <div className="details">
        <form>
          {panel_details}
        </form>
      </div>
    )
  }
}

module.exports = Details;
