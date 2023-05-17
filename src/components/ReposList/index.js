import React from "react";

import List from "../List";
import { useFetch } from "../../hook/fetchHook";

const columns = [{ name: "Owner" }, { name: "Name" }, { name: "Description" }];

function RepoList() {
  const [repos] = useFetch('repos');

  return (
    <List
      isLoading={!repos}
      title="Repositories"
      subTitle="List of active repositories"
      columns={columns}
      items={
        repos &&
        repos.map((repo) => ({
          id: repo.id,
          login: repo.owner.login,
          name: repo.name || "",
          description: repo.description || "no description",
        }))
      }
    />
  );
}

export default RepoList;
