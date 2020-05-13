import React from "react";
import UserInfo from "../UserInfo/index";
import "./style.css";
import { NavLink } from "react-router-dom";

const links = [{
    to: '/repositories',
    label: 'Repositories',
}, {
    to: '/subscriptions',
    label: 'Subscriptions',
}, {
    to: '/followers',
    label: 'Followers',
}, {
    to: '/about',
    label: 'About',
}]

class SideMenu extends React.Component {
    render() {
        return (
            <div className="side-menu">
                <UserInfo
                    login={this.props.user.login}
                    avatar={this.props.user.avatar_url} />

                <ul className="nav-tabs">
                    {
                        links.map(link => (
                            <li key={`${link.to}-item`} className="nav-item">
                                <NavLink className="nav-link" to={link.to}>{link.label}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default SideMenu;
