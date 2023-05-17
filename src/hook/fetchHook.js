import { useState, useEffect } from 'react';
import { GITHUB_API, USERNAME } from "../config/constants";

export const API = {
    user: `${GITHUB_API}/${USERNAME}`,
    followers: `${GITHUB_API}/${USERNAME}/followers`,
    repos: `${GITHUB_API}/${USERNAME}/repos`,
    subscriptions: `${GITHUB_API}/${USERNAME}/subscriptions`,
}

// custom hook
export const useFetch = (type) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(API[type])
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [type]);
  
    return [data];
};