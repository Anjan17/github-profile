import React from "react";

const RepoDetail = ({ repo }) => {
  const { name, description, ...rest } = repo;
  return (
    <div className="repo-details-wrapper">
      <div className="repo-details">
        <div className="repo-title">{name}</div>
        <div className="repo-other-details">{description}</div>
      </div>
    </div>
  );
};

export default RepoDetail;
