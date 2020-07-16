import React, { useEffect, useState } from "react";
import RepoDetail from "./RepoDetail";

const RepoDetailList = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchAllRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/supreetsingh247/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAllRepos();
  }, []);
  console.log(repos);
  return (
    <div>
      {repos.map((repo) => (
        <RepoDetail repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default RepoDetailList;
