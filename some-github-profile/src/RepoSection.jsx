import React from "react";
import RepoDetailList from "./RepoDetailList";

const RepoSection = () => {
  return (
    <div className="repo-section">
      <div className="repo-filter-header">
        <input
          className="repo-search-container"
          placeholder="Find a repository..."
        />
        <input placeholder="random" />
      </div>
      <div className="repo-list">
        <RepoDetailList />
      </div>
    </div>
  );
};

export default RepoSection;
