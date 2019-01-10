import React from 'react'
import uuid from 'uuid/v4'
class SearchBar extends React.Component {
    state = {term: ''};

    onClick = (event) => {

        const activity = {
            id: uuid(),
            value: this.state.term,
            completed: false
        };
        this.props.onClick(activity);
        this.setState({term: ''})
    };

    render() {
        return (
            <div>
            <input
                type="text"
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})}/>
                <button onClick={this.onClick}>Add</button>
            </div>
        );
    }
}

export default SearchBar;