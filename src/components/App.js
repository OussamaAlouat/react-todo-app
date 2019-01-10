import React from 'react'
import ActivitiesList from "./ActivitiesList";
import SearchBar from "./SearchBar";

class App extends React.Component {

    constructor () {
        super();
        this.state = {
            activities: []
        };
    }



    setActivity = term => {
        this.setState( state => {
           const activities = [...state.activities, term];
           return {
               activities
           }
        });
    };

    render() {
        return (
            <div>
                <ActivitiesList activitiesToDo={this.state.activities}/>
                <SearchBar onClick={this.setActivity}/>
            </div>
        )
    }

};
export default App;