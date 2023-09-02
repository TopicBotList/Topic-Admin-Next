import PartnerCard from "../components/Layout/Team/TeamLayout";

export default function Team() {
  const teamMembers = [
    // Members here:
    {
      name: "Maya Rose",
      pfp: "https://styles.redditmedia.com/t5_4wr4f2/styles/profileIcon_mp7lvbjw2d281.jpg?width=256&height=256&crop=256:256,smart&s=4ac91e07c3a6b3688b1a8195b60c5835de288756",
      bio: "Maya, CEO of RSenterprise. Verified bot developer. Passionate about development and programming. RelationShip Status: Single <3.",
      link1: "https://discordinflux.xyz/Maya",
      link2: "https://x.com/ranveersoni98",
      link1Title: "DiscordInflux",
      link2Title: "X",
      link1Icon: "fa-icon-class-for-link1",
      link2Icon: "fa-icon-class-for-link1",
    },
    {
      name: "Toxic Dev",
      pfp: "https://cdn.discordapp.com/avatars/510065483693817867/a_5b8b978d724408fa66bc880d1ecc8d17.gif?size=1024",
      bio: "Curious by nature self-taught full-stack software developer who is always aiming for improvement. currently working at Infinity Bot List as a Founder/Owner, FrontEnd Designer/Engineer and Community Manager with a strong background in project management, project planning and customer relations.",
      link1: "https://x.com/TheRealToxicDev",
      link2: "https://infinitybots.gg/",
      link1Title: "X",
      link2Title: "Infinity Bot List",
      link1Icon: "fa-icon-class-for-link1",
      link2Icon: "fa-icon-class-for-link1",
    },
    {
      name: "ZeroTwo",
      pfp: "https://cdn.discordapp.com/avatars/899722893603274793/758c524681f073dd21be48edcd88db9f.png?size=1024",
      bio: "What if we exchanged our public key? 👉 👈",
      link1: "https://x.com/ZeroTwo02332598",
      link2: "https://github.com/zerotwo36",
      link1Title: "X",
      link2Title: "Github",
      link1Icon: "fa-icon-class-for-link1",
      link2Icon: "fa-icon-class-for-link1",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center px-10 3xl:px-0">
        <div className="max-w-7xl w-full">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5">
              <div className="hidden lg:block relative">
                <i className="fa fa-users hidden lg:block text-5xl text-primary" />
              </div>
              <div>
                <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-8xl text-left">
                  Our Team
                </h1>
              </div>
            </div>
          </div>
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
              {teamMembers.map((teamMember, index) => (
                <PartnerCard key={index} {...teamMember} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 mt-10">
              {/* Display a message when there are no team members */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
