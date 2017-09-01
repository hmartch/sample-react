import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.doParentChangeFromChild = this.doParentChangeFromChild.bind(this);
  }

  doParentChangeFromChild(){ 
    this.props.parentChange('result');
  }

  handleNameInput(selected) {
    this.setState({name: selected.target.value});
  }

  handleChoice(selected) {
    if (selected.target.value === 'yes') {
      this.setState({moviequestion: true});
    }
    else {
      this.setState({moviequestion: false});
    }
  }

  handleMovieInput(selected) {
    if (this.state.moviequestion) {
      this.setState({moviename: selected.target.value});
    }
  }

  handleSave(selected) {
    console.log('save to db here');
    var data = '{"name": "' + this.state.name + '", "moviename": "' + this.state.moviename + '"}';
    console.log(data)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/visitors', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(data);

    xhr.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 201; // status 201 means entry was successfully created
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          console.log(xhr.responseText); // 'This is the returned text.'
        } else {
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
      }
    }
    this.doParentChangeFromChild();
  }

  render() {
    if (this.props.panel_topic === 'intro') {
      var details = (
        <form>
          <div>
            <label>What is your name?
              <input type="text" onChange={this.handleNameInput} />
            </label>

            {this.state.name ? (<p>Hi {this.state.name}!</p>) : null}
          </div>

          <div>
            <label>Do you have a favorite movie?
              <label className="choice" onClick={this.handleChoice}>Yes <input type="radio" name="fav-movie" value="yes" /></label>
              <label className="choice" onClick={this.handleChoice}>No <input type="radio" name="fav-movie" value="no" /></label>
            </label>
          </div>

          {this.state.moviequestion ? (
            <div>
              <label>What is your favorite movie?
                <input type="text" onChange={this.handleMovieInput} />
              </label>
            </div>
          ) : null}

          {this.state.moviename ? (
            <div>
              <p>If you let me save your answers, I&apos;ll find some info about the movie.</p>
              <input type="button" value="Sure, save it." onClick={this.handleSave} />
            </div>
          ) : null}
        </form>
      );
    }
    else if (this.props.panel_topic === 'result') {
      var details = (
        <p>Movie information</p>
      );
    }
    
    return (
      <div className="details">
        {details}
      </div>
    )
  }
}

module.exports = Details;
