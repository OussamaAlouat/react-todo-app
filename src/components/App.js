import React from 'react'

class App extends React.Component {

    constructor () {
        super();
        this.state = {
            activities: [],
            currentActivity: ''
        };
    }



    setActivity = () => {
        this.setState( state => {
           const activities = [...state.activities, state.currentActivity];
           return {
               activities,
               currentActivity: ''
           }
        });

        console.log(this.state)
    };

    render() {

        const activitiesToDo = this.state.activities.map((val) => <li key={val}>{val}</li>)

        return (
            <div>
                <div>{activitiesToDo}</div>
                <input
                    type="text"
                    value={this.state.currentActivity}
                    onChange={event => this.setState({currentActivity: event.target.value})}
                />
                <button onClick={this.setActivity}>Add</button>
            </div>
        )
    }

};
export default App;