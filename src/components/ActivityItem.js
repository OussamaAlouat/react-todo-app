import React from 'react'
import './ActivityItem.css'

class ActivityItem extends React.Component {

    onRemove = () => {
        const activityToRemove = this.props.activity;
        this.props.onRemove(activityToRemove)
    };

    onComplete = () => {
        const activityToComplete = this.props.activity;
        this.props.onComplete(activityToComplete);
    };

    render() {
        return (
            <div className="item">
                <div className={this.props.activity.completed ? 'content completed' : 'content'}>
                    <i className="large tasks middle aligned icon"></i>
                    <span className="ml-03r">{this.props.activity.value}</span>
                    <div className="mini ui vertical animated button" tabIndex="0" onClick={this.onRemove}>
                        <div className="hidden content">Remove</div>
                        <div className="visible content">
                            <i className="ui trash alternate icon"></i>
                        </div>
                    </div>

                    <div className="mini ui vertical animated button" tabIndex="0" onClick={this.onComplete}>
                        <div className="hidden content">Done</div>
                        <div className="visible content">
                            <i className="ui check icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityItem;