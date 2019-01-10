import React from 'react'
import ActivitiesList from "./ActivitiesList";

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
    };

    render() {
        return (
            <div>
                <ActivitiesList activitiesToDo={this.state.activities}/>
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