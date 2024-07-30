import React, { useEffect, useState } from 'react';

import { GITHUB_API } from '../../config/constants';
import { UserContext } from '../../Context/UserContext';
import UserInfo from '../UserInfo';
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
            <div className="info-block">
                {/* <UserContext.Consumer>
                
                    {({ user }) => user && (
                        <ul>
                            <li>Recieved events: {events}</li>
                            <li>Followers: {user.followers}</li>
                            <li>Repos: {user.public_repos}</li>
                        </ul>
                    )}
                </UserContext.Consumer>                */}
            </div>
            <UserContext.Consumer>
                {
                    ({ user }) => user && (
                        <UserInfo
                            login={user.login}
                            avatar={user.avatar_url} />
                    )
                }
            </UserContext.Consumer>
        </header>
    );
}

export default Header;
