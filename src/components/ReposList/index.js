import React, { useEffect, useState } from 'react';

import List from '../List';
import { GITHUB_API, USERNAME } from '../../config/constants';

function RepoList() {
    const [repos, setRepos] = useState(null);
    
    useEffect(() => {
        if (!repos) {
            fetch(`${GITHUB_API}/${USERNAME}/repos`)
                .then(res => res.json())
                .then(res => setRepos(res))
                .catch(e => console.error(e));
        }
    })
   
    return (      
        <List
            isLoading={!repos}
            title="Repositories"
            subTitle="List of active repositories"
            items={repos && repos.map(repo => ({
                id: repo.id,
                login: repo.owner.login,
                name: repo.name || '',
                description: repo.description || 'no description',
            }))}
        />      
    )
}

export default RepoList;
