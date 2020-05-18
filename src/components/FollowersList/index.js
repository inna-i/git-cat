import React, { useEffect, useState } from 'react';

import List from '../List';
import { GITHUB_API, USERNAME } from '../../config/constants';

function FollowersList() {
    const [followers, setFollowers] = useState(null);
    
    useEffect(() => {
        if (!followers) {
            fetch(`${GITHUB_API}/${USERNAME}/followers`)
                .then(res => res.json())
                .then(res => setFollowers(res))
                .catch(e => console.error(e));
        }
    })
   
    return (      
        <List
            isLoading={!followers}
            title="Followers"
            subTitle="List of your followers"
            items={followers && followers.map(repo => ({
                id: repo.id,
                login: repo.login,
                name: repo.url || '',
                description: 'no description',
            }))}
        />      
    )
}

export default FollowersList;
