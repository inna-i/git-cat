import React, { useEffect, useState } from 'react';

import { GITHUB_API } from '../../config/constants';
import logo from '../../assets/github-logo.png';
import { UserContext } from '../../Context/UserContext';
import './style.css';


function Header() {
    const [events, setEvents] = useState(0);
 
    useEffect(() => {
        fetch(`${GITHUB_API}/inna-i/received_events`)
            .then(res => res.json())
            .then(res => setEvents(res.length))
            .catch(e => console.error(e))
    }, [events])

   
    return(
        <header>
            <div className="welcome-block">
                Welcome to
                <p>GitCat</p>
                <img src={logo} alt="github logo"/>
            </div>
            <div className="info-block">
                <UserContext.Consumer>
                    {({ user }) => user && (
                        <ul>
                            <li>Recieved events: {events}</li>
                            <li>Followers: {user.followers}</li>
                            <li>Repos: {user.public_repos}</li>
                        </ul>
                    )}
                </UserContext.Consumer>               
            </div>
        </header>
    );
}

export default Header;
