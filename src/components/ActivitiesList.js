import React from 'react'

const ActivitiesList = (props) =>  {
    const activitiesToDo = props.activitiesToDo.map((activity) =>{
       return <li key={activity}>{activity}</li>
    });
    return <div>{activitiesToDo}</div>
};
export default ActivitiesList;