import React from 'react'

const ActivitiesList = (props) =>  {
    const activitiesToDo = props.activitiesToDo.map((activity) =>{
       return <li key={activity.id}>{activity.value}}</li>
    });
    return <div>{activitiesToDo}</div>
};
export default ActivitiesList;