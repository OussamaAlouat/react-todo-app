import React from 'react'
import ActivityItem from "./ActivityItem";

const ActivitiesList = (props) => {
  const onRemove = (item) => {
    props.onRemove(item)
  };

  const onComplete = item => {
    props.onComplete(item)
  };

  const activitiesToDo = props.activitiesToDo.map((activity) => {
    return <ActivityItem onComplete={onComplete} onRemove={onRemove} key={activity.id} activity={activity}></ActivityItem>
  });

  return <div className="ui list">{activitiesToDo}</div>
};

export default ActivitiesList;