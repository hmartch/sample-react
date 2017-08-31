import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // = {name: "", moviequestion: false, moviename: ""};
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
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
    console.log({"name": this.state.name, "moviename": this.state.moviename});
    var data = {"name": this.state.name, "moviename": this.state.moviename};
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/visitors', data);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
  }

  render() {
    return (
      <div className="details">
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
      </div>
    )
  }
}

module.exports = Details;
