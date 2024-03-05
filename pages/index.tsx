import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaClipboard, FaServer, FaUser } from "react-icons/fa";
import { AiOutlineRobot, AiOutlineUsergroupAdd } from "react-icons/ai";

const StatCard = ({ icon, label, count }) => (
  <div className="mx-2 h-[80px] w-[200px] rounded-lg bg-blue-800/10 flex items-center px-3">
    <div className="h-[50px] w-[50px] rounded-lg bg-blue-800/20 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <div className="ml-3 flex flex-col">
      <p className="text-sm font-semibold text-white/50">{label}</p>
      <p className="text-lg font-semibold text-white">{count}</p>
    </div>
  </div>
);

const Announcement = ({ title, content }) => (
  <div className="flex items-center justify-between px-4 py-3 hover:bg-blue-800/20 border-b border-blue-800">
    <div>
      <p className="font-semibold text-lg text-white/80">{title}</p>
      <p className="text-white/60">{content}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [serversCount, setServersCount] = useState<number>(0);
  const [botsCount, setBotsCount] = useState<number>(0);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const responses = await Promise.all([
          fetch(`${apiUrl}/servnum`),
          fetch(`${apiUrl}/botnum`),
          fetch(`${apiUrl}/usernum`)
        ]);

        const data = await Promise.all(responses.map((res) => res.json()));

        setServersCount(data[0].total_servers);
        setBotsCount(data[1].total_bots);
        setUsersCount(data[2].total_user);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-center p-3">
          <StatCard icon={<AiOutlineRobot />} label="Unapproved Bots" count={0} />
          <StatCard icon={<FaCheckCircle />} label="Approved Bots" count={botsCount} />
          <StatCard icon={<FaServer />} label="Servers" count={serversCount} />
          <StatCard icon={<AiOutlineUsergroupAdd />} label="Users" count={usersCount} />
        </div>
        <div className="w-full flex items-center flex-col px-8 py-2">
          <div className="w-full overflow-hidden rounded-lg bg-blue-800/10">
            <p className="py-4 px-4 bg-blue-800/10 font-semibold text-lg">
              Today&apos;s announcements
            </p>
            <div className="h-[200px] py-2 overflow-auto">
              <Announcement title="Partners Update" content="All the partner will be managed from the Admin Panel." />
              <Announcement title="First Announcement" content="TopicAdmin Made By RanveerSoni." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
