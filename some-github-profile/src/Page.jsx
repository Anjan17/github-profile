// Profile Link: https://api.github.com/users/supreetsingh247
// Other data link: https://api.github.com/users/supreetsingh247/repos
// Page mockup: https://github.com/supreetsingh247?tab=repositories

import React from "react";
import ProfileSection from "./ProfileSection";
import RepoSection from "./RepoSection";

const Page = () => (
  <div className="page">
    <div className="page-content">
      <ProfileSection />
      <RepoSection />
    </div>
  </div>
);

export default Page;
