import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faUser, faUsers, faLink } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/github-logo.png';

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
            <div className="side-menu-logo">
            <img src={logo} alt="github logo"/>
            <span>GitCat</span>
                
            </div>

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
