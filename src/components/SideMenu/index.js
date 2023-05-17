import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUser, faUsers, faLink } from '@fortawesome/free-solid-svg-icons';

import UserInfo from '../UserInfo/index';
// User Context
import { UserContext } from "../../Context/UserContext";

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

function SideMenu() {
    return (
        <div className="side-menu">
            <UserContext.Consumer>
                {
                    ({ user }) => user && (
                        <UserInfo
                            login={user.login}
                            avatar={user.avatar_url} />
                    )
                }
            </UserContext.Consumer>

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

export default SideMenu;
