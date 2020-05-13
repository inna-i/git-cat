import React, { useEffect, useState } from "react";
import "./style.css";

const url = 'https://api.github.com/users/inna-i/repos';

function RepoList() {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        if (!repos) {
            fetch(url)
                .then(res => res.json())
                .then(res => setRepos(res))
                .catch(e => console.error(e));
        }
    })
   
    return (
        <div className="list">
            <div className="list-header">
               <h3>Repositories</h3>
               <p>There is a list of user repos in GitHub</p>
            </div>
            <div className="list-items">
                {
                    repos && repos.map(repo => (
                        <div className="list-item" key={repo.id}>
                            <span>{repo.owner.login}</span>
                            <span>{repo.name}</span>
                            <span>{repo.description || 'no description'}</span>
                        </div>
                    ))
                }
            </div> 
        </div>
    )
}

export default RepoList;
