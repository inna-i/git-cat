import React from "react";

import List from "../List";
import { useFetch } from "../../hook/fetchHook";
import columns from "./followersListConfig";

function FollowersList() {
  const [followers] = useFetch('followers');

  return (
    <List
      isLoading={!followers}
      title="Followers"
      subTitle="List of your followers"
      columns={columns}
      items={
        followers &&
        followers.map((repo) => ({
          id: repo.id,
          login: repo.login,
          name: repo.url || "",
          description: "no description",
        }))
      }
    />
  );
}

export default FollowersList;
