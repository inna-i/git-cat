import React from "react";
import "./style.css";

class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <img src={this.props.avatar} alt="user avatar" />
                <span className="user-login">{this.props.login}</span>
            </div>
        );
    }
}

export default UserInfo;
