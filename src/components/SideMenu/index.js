import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUser, faUsers, faLink } from '@fortawesome/free-solid-svg-icons';

import UserInfo from '../UserInfo/index';

import './style.css';

const links = [{
    to: '/repositories',
    label: 'Repositories',
    icon: faCodeBranch,
}, {
    to: '/subscriptions',
    label: 'Subscriptions',
    icon: faLink,
}, {
    to: '/followers',
    label: 'Followers',
    icon: faUsers,
}, {
    to: '/about',
    label: 'About',
    icon: faUser,
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
                                <NavLink className="nav-link" to={link.to}>
                                    <i className="nav-icon">
                                        <FontAwesomeIcon icon={link.icon} />
                                    </i>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default SideMenu;
