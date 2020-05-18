import React from "react";
import "./style.css";

class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <img src={this.props.avatar} alt="user avatar" />
                <h1>{this.props.login}</h1>
            </div>
        );
    }
}

export default UserInfo;
