import React from 'react'
import ActivityItem from "./ActivityItem";

const ActivitiesList = (props) =>  {
    const activitiesToDo = props.activitiesToDo.map((activity) =>{
       return <ActivityItem key={activity.id} activity={activity}></ActivityItem>
    });
    return <div className="ui list">{activitiesToDo}</div>
};
export default ActivitiesList;