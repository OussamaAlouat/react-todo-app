import React from 'react'
import ActivitiesList from "./ActivitiesList";
import SearchBar from "./SearchBar";
import './App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        activities: []
    };
  }


  onRemove = (item) => {
    const provisionalActivities = this.state.activities;
    this.setState({activities: provisionalActivities.filter((val) => val.id !== item.id)})
  };

  setActivity = term => {
    this.setState(state => {
      const activities = [...state.activities, term];
      return {
        activities
      }
    });
  };

  onComplete = term => {
    const provisionalActivities = this.state.activities;
    const data = provisionalActivities.map((val) => {
      val.completed = val.id === term.id ? true : val.completed;
      return val
    });

    this.setState({
      activities: data
    });
  };

  render() {
    return (
      <div className=" ui container app">
        <ActivitiesList 
          onComplete={this.onComplete} onRemove={this.onRemove}
          activitiesToDo={this.state.activities}
        />

        <SearchBar onClick={this.setActivity}/>
      </div>
    )
  }

};
export default App;