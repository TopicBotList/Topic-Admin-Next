import { useState, useEffect } from "react";
import { FaCrown, FaHandshake, FaPaintBrush, FaHammer, MdOutlinePersonRemove } from "react-icons/fa";

export default function Staff() {
  const [botInfo, setBotInfo] = useState(null);

  useEffect(() => {
    fetch("https://adminapi.topiclist.xyz/bot/info")
      .then((response) => response.json())
      .then((data) => setBotInfo(data));
  }, []);

  if (!botInfo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
          <img src={`https://cdn.discordapp.com/avatars/${botInfo.id}/${botInfo.avatar}.png`} className={'h-[150px] w-[150px] rounded-lg'}></img>
          <div className="flex flex-col h-[130px] ml-3">
            <p className="font-bold text-4xl">{botInfo.username}#{botInfo.discriminator}</p>
            <p className="font-semibold text-lg text-white/70">{botInfo.bio}</p>
            <div className={'h-full'}/>
            <div className="flex items-center">
              <FaHandshake className="text-3xl text-yellow-400/70" />
              <button className="ml-2 p-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none">
                <FaHammer className="mr-2" />
                Ban
              </button>
              <button className="ml-2 p-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none">
                <MdOutlinePersonRemove className="mr-2" />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}