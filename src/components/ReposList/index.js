import React, { useEffect, useState } from 'react';

import List from '../List';
import { GITHUB_API, USERNAME } from '../../config/constants';

const columns = [{ name: 'Owner'}, { name:'Name'}, { name: 'Description'}];

function RepoList() {
    const [repos, setRepos] = useState(null);
    
    useEffect(() => {
        if (!repos) {
            fetch(`${GITHUB_API}/${USERNAME}/repos`)
                .then(res => res.json())
                .then(res => setRepos(res))
                .catch(e => console.error(e));
        }
    }, [repos]);
   
    return (      
        <List
            isLoading={!repos}
            title="Repositories"
            subTitle="List of active repositories"
            columns={columns}
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
