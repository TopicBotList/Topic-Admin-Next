import React, { useState, useEffect } from "react";
import { FaCrown, FaUserCog } from "react-icons/fa";
import Image from "next/image";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/team`);
        const data = await response.json();

        const processedProfiles = data.map((profile) => ({
          username: profile.name,
          shortBio: profile.bio,
          Image: profile.avatar,
        }));

        setProfiles(processedProfiles);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col py-2">
      {error && <div>Error: {error}</div>}
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="flex items-center bg-blue-900/10 p-3 rounded-lg mb-4"
        >
          <Image
            src={profile.Image}
            className="rounded-lg"
            width={150}
      height={150}
            alt="Profile Picture"
          />
          <div className="ml-3">
            <p className="font-bold text-4xl">{profile.username}</p>
            <p className="font-semibold text-lg text-white/70">
              {profile.shortBio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
