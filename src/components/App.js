import React from 'react'
import ActivitiesList from "./ActivitiesList";
import SearchBar from "./SearchBar";
import './App.css'
class App extends React.Component {

    constructor () {
        super();
        this.state = {
            activities: []
        };
    }


    onRemove = (item) => {
        const provisionalActivities = this.state.activities;
        this.setState({activities: provisionalActivities.filter((val)=> val.id !== item.id)})
    };

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
            <div className=" ui container app">
                <ActivitiesList onRemove={this.onRemove} activitiesToDo={this.state.activities}/>
                <SearchBar onClick={this.setActivity}/>
            </div>
        )
    }

};
export default App;