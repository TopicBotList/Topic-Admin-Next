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
      <div className="w-full bg-blue-900 text-white flex flex-col py-2 relative">
        <div className="flex items-center p-3">
          <div className="flex flex-col ml-3">
            <p className="font-bold text-4xl">Topic Status</p>
            <p className="font-semibold text-lg">
            Check our service status
            </p>
          </div>
        </div>
        <div className="bg-blue-800 text-white py-2 text-center font-semibold uppercase tracking-wider">
          Operational
        </div>
      </div>
      <div className="container mx-auto my-12">
        <div className="flex flex-wrap -mx-3">
          {statusData.map((server) => (
            <div key={server.name} className="w-full md:w-1/3 px-3 mb-6">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-lg font-semibold">{server.name}</h2>
                <p className={`mt-2 text-sm font-semibold text-${server.status === 'Online' ? 'green' : server.status === 'Degraded Performance' ? 'yellow' : 'red'}-500`}>{server.status}</p>
                <p className="mt-2 text-sm">{server.description}</p>
                {server.url && (
                  <a href={server.url} className="text-blue-500 hover:text-blue-600">{server.url}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
