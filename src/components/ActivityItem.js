import React from 'react'

class ActivityItem extends React.Component {
    render() {
        return (
            <div style={{width:'100%', alignItems:'center'}} >
                <i className="large tasks middle aligned icon"></i>
                <div className="content">
                    {this.props.activity.value}
                </div>
            </div>
        );
    }
}
export default ActivityItem;