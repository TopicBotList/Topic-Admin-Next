 import { useState } from "react";

  export default function Status() {
    const [statusData] = useState([
      {
        name: "DiscordInflux",
        status: "Online",
        description: "Working Fine Chief!",
        url: "https://discordinflux.xyz",
      },
      { name: "TopicList", status: "Online", description: "Working Fine Chief!", url: "https://topicist.xyz" },
      { name: "API", status: "Operational", description: "Working Fine Chief!", url: "https://api.topiclist.xyz" },
      { name: "Admin Panel", status: "Online", description: "Working Fine Chief!", url: "https://admin.topiclist.xyz" },
      { name: "Beta", status: "Online", description: "Working Fine Chief!", url: "https://beta.topiclist.xyz" },
      {
        name: "API",
        status: "Online",
        description: "Working Fine Chief!",
        url: "https://api.discordinflux.xyz",
      },
      {
        name: "Docs",
        status: "Online",
        description: "Working Fine Chief!",
        url: "https://docs.discordinflux.xyz",
      },
      {
        name: "Widget",
        status: "Online",
        description: "Working Fine Chief!",
        url: "https://widgets.discordinflux.xyz",
      },
      { name: "Ransoma", status: "Online", description: "Working Fine Chief!" },
      { name: "Ritono", status: "Online", description: "Working Fine Chief!" },
      {
        name: "Beta",
        status: "Online",
        description: "Working Fine Chief!",
        url: "https://beta.discordinflux.xyz",
      },
      { name: "Admin", status: "Online", description: "Working Fine Chief!" },
      {
        name: "Sysmanage",
        status: "Down",
        description: "Its Down Chief! maybe check back later?!",
        url: "https://sysmanage.topiclist.xyz",
      },
    ]);
  
    const getStatusColor = (status) => {
      switch (status) {
        case "Online":
          return "green";
        case "Degraded Performance":
          return "yellow";
        default:
          return "red";
      }
    };
  
    return (
      <>
        <div className="flex flex-col items-center">
          <p className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-8xl text-center">
           Status
          </p>
          <p className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text ">
            Check our service status
          </p>
        </div>
        <div className="text-transparent py-2 text-center font-semibold uppercase tracking-wider">
          <strong className="text-green-500">Operational</strong>
        </div>
        <div className="container mx-auto my-6">
          <div className="flex flex-wrap -mx-3">
            {statusData.map((server) => (
              <div key={server.name} className="w-full md:w-1/3 px-3 mb-6">
                <div className="bg-black rounded-lg shadow-lg p-4">
                  <h2 className="text-base font-semibold text-blue-500">
                    {server.name}
                  </h2>
                  <p
                    className={`mt-2 text-xs font-semibold text-${getStatusColor(
                      server.status,
                    )}-500`}
                  >
                    {server.status}
                  </p>
                  <p className="mt-2 text-xs text-blue-200">
                    {server.description}
                  </p>
                  {server.url && (
                    <a
                      href={server.url}
                      className="text-blue-500 hover:text-blue-600 text-xs"
                    >
                      {server.url}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  