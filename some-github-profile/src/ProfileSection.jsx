import React, { useEffect, useState } from "react";
import AddressItem from "./AddressItem";

const ProfileSection = () => {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/supreetsingh247"
        );
        const { avatar_url, ...rest } = await response.json();
        // const avatar_data = await fetch(avatar_url);
        // const avatar_image = await avatar_data.blob();
        // console.log(avatar_image);
        setProfileData({ avatar_url, ...rest });
      } catch (e) {
        console.log(e);
      }
    };
    fetchProfileData();
  }, []);

  const {
    login,
    avatar_url,
    name,
    company,
    location,
    public_repos,
    email,
    followers,
    following,
    bio,
  } = profileData;
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img
          src={avatar_url}
          style={{ borderRadius: "50%", height: "300px" }}
        />
      </div>
      <div className="name-details">
        <h3>{name}</h3>
        <span>{login}</span>
      </div>
      <div className="bio">{bio}</div>
      <button>Follow</button>
      <div className="following-and-rating">{`${followers} followers ${following} following`}</div>
      <AddressItem text={company} />
      <AddressItem text={location} />
      <AddressItem text={email || ""} />
    </div>
  );
};

export default ProfileSection;
