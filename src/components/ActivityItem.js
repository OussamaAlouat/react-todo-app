import React from 'react'
import './ActivityItem.css'

class ActivityItem extends React.Component {

    onRemove = () => {
        const activityToRemove = this.props.activity;
        this.props.onRemove(activityToRemove)
    };

    render() {
        return (
            <div className="item">
                <div className="content">
                    <i className="large tasks middle aligned icon"></i>
                    <span className="ml-03r">{this.props.activity.value}</span>
                    <button style={{marginLeft: '0.3rem'}} className="mini ui button" onClick={this.onRemove}>Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default ActivityItem;