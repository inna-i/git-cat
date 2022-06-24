import React, { useEffect, useState } from "react";

import List from "../List";
import { fetchFollowers } from "../../services/fetchData";
import columns from "./followersListConfig";

function FollowersList() {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFollowers();
      setFollowers(data);
    };

    getData();
  }, []);

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
