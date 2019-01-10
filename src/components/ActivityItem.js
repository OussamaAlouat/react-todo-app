import React from 'react'

class ActivityItem extends React.Component {
    render() {
        return (
            <div className="item" >
                <div className="content">
                    <i className="large tasks middle aligned icon"></i>
                    {this.props.activity.value}
                </div>
            </div>
        );
    }
}
export default ActivityItem;