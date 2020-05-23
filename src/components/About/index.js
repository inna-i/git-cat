import React from 'react';
import { UserContext } from '../../Context/UserContext';

import './style.css';

const detailFields = [{
    key: 'bio',
    label: 'Bio',
}, {
    key: 'html_url',
    label: 'GitHub page',
}, {
    key: 'company',
    label: 'Company',
}, {
    key: 'location',
    label: 'Location',
}, {
    key: 'email',
    label: 'Email',
}];

function About() {
    return (
        <UserContext.Consumer>
            {({ user }) => (
                <div className="about">
                    {
                        user && (<>
                            <div className="about-logo">
                                <img src={user.avatar_url} alt="your avatar" />
                            </div>
                            <div className="about-content">
                                <h2>{user.name}</h2>
                                <h4>Account details:</h4>
                                <ul>
                                    { detailFields.map(detail => (
                                        <li key={detail.key}>
                                            <b>{detail.label}:</b> {user[detail.key] ? user[detail.key] : `${detail.label.toLowerCase()} is not set`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>)
                    }

                </div>
            )}
        </UserContext.Consumer>
    );
}

export default About;
