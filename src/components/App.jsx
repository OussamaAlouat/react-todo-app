import React from 'react'
import ActivitiesList from "./ActivitiesList";
import SearchBar from "./SearchBar";
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        activities: [],
        title: 'REACT TODO APP',
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
      if(val.id === term.id) {
        val.completed = !val.completed;
      } 

      return val
    });

    this.setState({
      activities: data
    });
  };

  render() {
    return (
      <div className=" ui container app">
        <h2 className='title'>{ this.state.title }</h2>
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