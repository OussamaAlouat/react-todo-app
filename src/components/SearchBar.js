import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''};

    onClick = (event) => {
        this.props.onClick(this.state.term)
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