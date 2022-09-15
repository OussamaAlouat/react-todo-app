import React from 'react'
import uuid from 'uuid/v4'
import './SearchBar.css'

class SearchBar extends React.Component {
  state = {term: '', isButtonDisabled: true};

  onClick = (event) => {
    if (!this.state.term) {
      this.setState({isButtonDisabled: true})

      console.log('There are an error');
    } else {
      const activity = {
        id: uuid(),
        value: this.state.term,
        completed: false
      };

      this.props.onClick(activity);
      this.setState({term: '', isButtonDisabled: true});
    }
  };

  onChange = (event) => {
    if (this.state.isButtonDisabled) {
      this.setState({ term: event.target.value, isButtonDisabled: false });
    } else {
      this.setState({ term: event.target.value })
    }
  };

  render() {
    return (
      <div>
        <div className="ui input focus">
          <label className="ui right pointing label al-self"> Input the activity to do </label>
          <input className="mini ui"
            placeholder="Activity"
            type="text"
            value={this.state.term}
            onChange={event => this.onChange(event)}
          />
        </div>
        <button
          style={{ marginLeft: '0.3rem' }}
          className="small ui button"
          onClick={this.onClick}
          disabled={this.state.isButtonDisabled}
        >
          Add
        </button>
      </div>
    );
  }
}

export default SearchBar;