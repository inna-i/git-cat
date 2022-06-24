import { GITHUB_API, USERNAME } from "../config/constants";

export async function fetchUser() {
    const USERS_URL = `${GITHUB_API}/${USERNAME}`;

    try {
        let res = await fetch(USERS_URL);

        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

export async function fetchFollowers() {
    const FOLLOWERS_URL = `${GITHUB_API}/${USERNAME}/followers`;

    try {
        let res = await fetch(FOLLOWERS_URL);

        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

export async function fetchRepos() {
    const REPO_URL = `${GITHUB_API}/${USERNAME}/repos`;

    try {
        let res = await fetch(REPO_URL);

        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchSubscriptions() {
    const SUBSCRIPTION_URL = `${GITHUB_API}/${USERNAME}/subscriptions`;

    try {
        let res = await fetch(SUBSCRIPTION_URL);

        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
