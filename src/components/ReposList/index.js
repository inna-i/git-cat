import React, { useEffect, useState } from "react";

import List from "../List";
import { fetchRepos } from "../../services/fetchData";

const columns = [{ name: "Owner" }, { name: "Name" }, { name: "Description" }];

function RepoList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRepos();
      setRepos(data);
    };

    getData();
  }, []);

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
