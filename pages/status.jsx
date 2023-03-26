import { useState } from "react";

export default function Status() {
  const [statusData, setStatusData] = useState([
    {
        name: "TopicList",
        status: "Online",
        description: "Undergoing Revamp (Ain't Comming Back Soon)",
        url: "https://topicist.xyz",
      },
      {
        name: "API",
        status: "Operational",
        description: "Working Fine Chef!",
        url: "https://api.topiclist.xyz",
      },
      {
        name: "Servers",
        status: "Online",
        description: "Working Fine Chef!",
        url: "https://servers.topiclist.xyz",
      },
      {
          name: "Admin Panel",
          status: "Online",
          description: "Working Fine Chef!",
          url: "https://admin.topiclist.xyz",
        }
  ]);

  return (
    <>
      <div className="w-full h-24 flex items-center justify-center bg-blue-900 text-white flex-col py-2 relative">
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl text-center">Topic Status</p>
          <p className="font-semibold text-sm text-center">
          Check our service status
          </p>
        </div>
      </div>
      <div className="bg-black text-white py-2 text-center font-semibold uppercase tracking-wider">
        Operational
      </div>
      <div className="container mx-auto my-6">
        <div className="flex flex-wrap -mx-3">
          {statusData.map((server) => (
            <div key={server.name} className="w-full md:w-1/3 px-3 mb-6">
              <div className="bg-black rounded-lg shadow-lg p-4">
                <h2 className="text-base font-semibold text-blue-500">{server.name}</h2>
                <p className={`mt-2 text-xs font-semibold text-${server.status === 'Online' ? 'green' : server.status === 'Degraded Performance' ? 'yellow' : 'red'}-500`}>{server.status}</p>
                <p className="mt-2 text-xs text-blue-200">{server.description}</p>
                {server.url && (
                  <a href={server.url} className="text-blue-500 hover:text-blue-600 text-xs">{server.url}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
