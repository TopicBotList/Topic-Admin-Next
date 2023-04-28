import input from "@replit/clui-input";
import { useEffect, useState } from "react";
import $ from "jquery";
import { useRouter } from "next/router";
export default function Bar() {
  const [value, setValue] = useState("");
  const [selection, setSelection] = useState([]);
  const [search, setSearch] = useState(false);
  const [sections, setSections] = useState([]);
  const router = useRouter();
  const rootCommand = {
    commands: {
      open: {
        description: "Open a specfic page",
        run: () => {
          setValue("open >");
          update({ value: "open >", index: 6 });
        },
        commands: {
          "> home": {
            description: "Go to the homepage",
            run: (args) => {
              router.push("/");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
          "> bots": {
            description: "Navigate to the bots page",
            run: () => {
              router.push("/bots");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
          "> servers": {
            description: "Navigate to the servers page",
            run: () => {
              router.push("/servers");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
          "> staff": {
            description: "List Of Staff Working For TopicList",
            run: () => {
              router.push("/staff");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
          "> Partners": {
            description: "List Of Partners For TopicList & TopicServers",
            run: () => {
              router.push("/partner");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
          "> Status": {
            description: "Status Page",
            run: () => {
              router.push("/status");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
        },
      },
      bots: {
        description: "Run actions on bots",
        commands: {
          "> unapproved": {
            description: "View unapproved bots",
            run: () => {
              router.push("/bots/unapproved");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
          "> approved": {
            description: "View approved bots",
            run: () => {
              router.push("/bots/approved");
              setValue("");
              setSearch(false);
              update({ value: " ", index: 6 });
            },
          },
        },
        run: () => {
          setValue("bots >");
          update({ value: "bots >", index: 6 });
        },
      },
    },
  };

  const update = input({
    command: rootCommand,
    onUpdate: (updates) => {
      if (updates.options[0]) {
        if (updates.options[0].searchValue) {
          setSelection(updates.options);
        }
      } else {
        setSelection([]);
      }
    },
  });
  useEffect(() => {
    const sectionsz = value.split(">");
    setSections(sectionsz);
    if (value in rootCommand.commands) {
      update({ value: value.substring(0, value.length - 1), index: 6 });
    } else {
      const nsectionz = sectionsz;
      if (nsectionz.length > 1) {
        var change = nsectionz[nsectionz.length - 2];
        var newstr = "";
        change.substring(0, change.length - 1);
        change += " >";
        nsectionz.map((section, index) => {
          if (index + 1 == nsectionz.length) {
            newstr += change;
          } else {
            newstr += section + " >";
          }
        });
        update({ value: newstr, index: 6 });
      } else {
        update({ value: value, index: 6 });
      }
    }
  }, [value]);
  return (
    <div className="">
      {search && (
        <div
          className="h-screen w-screen fixed bg-black/20 top-0 left-0 z-[3]"
          onClick={() => setSearch(false)}
        />
      )}
      <div className="relative flex flex-col items-center w-screen">
        <div
          onClick={() => {
            setSearch(true);
            $(".topicclui").trigger("focus");
          }}
          className="h-[55px] flex items-center bg-black/90 border-2 border-blue-800 z-[3] w-[500px] rounded-lg px-4 text-white"
        >
          {sections.map((section, index) => {
            if (index + 1 != sections.length) {
              return (
                <div
                  onClick={() => {
                    var newsect = sections;
                    newsect = newsect.filter((item) => item !== section);
                    setSections(newsect);
                    var sectionstr = "";
                    newsect.map((section, index) => {
                      if (index + 1 == newsect.length) {
                        sectionstr += section;
                      } else {
                        sectionstr += section + " >";
                      }
                    });
                    setValue(sectionstr);
                    if (sectionstr == "") {
                      setSelection([]);
                    }
                    update({ value: sectionstr, index: 6 });
                  }}
                  className="cursor-pointer mx-1 rounded-lg bg-zinc-900 flex items-center h-[35px] px-2 border-2 border-transparent hover:border-blue-800"
                >
                  {section}
                </div>
              );
            }
          })}
          <input
            placeholder="🔍 Navigate, search, and run commands"
            className="ml-2 topicclui bg-transparent text-white min-w-[290px]"
            value={
              sections.length > 0 ? sections[sections.length - 1] : sections[0]
            }
            onChange={(e) => {
              if (sections.length > 1) {
                var sectionstr = "";
                const newsection = sections;
                newsection[newsection.length - 1] = e.target.value;
                newsection.map((section, index) => {
                  if (index + 1 == newsection.length) {
                    sectionstr += section;
                  } else {
                    sectionstr += section + ">";
                  }
                });
                setValue(sectionstr);
              } else {
                setValue(e.target.value);
              }
            }}
          ></input>
        </div>
        {search && (
          <div className="py-4 px-4 h-[300px] bg-black border-2 border-blue-800 z-[3] lg:w-[80vw] w-full absolute top-[70px] rounded-lg overflow-auto">
            {selection.length > 0 ? (
              <>
                <p className="w-full text-lg font-semibold text-white/70 mb-3">
                  Results
                </p>
                {selection.map((cmd) => {
                  return (
                    <>
                      <div
                        key={cmd}
                        onClick={() => {
                          cmd.data.run();
                          $(".topicclui").trigger("focus");
                        }}
                        className="cursor-pointer flex items-center p-4 py-2 border-2 hover:border-blue-800 border-transparent text-white rounded-lg"
                      >
                        <div className="text-lg font-semibold bg-zinc-900/50 rounded-lg p-2">
                          {cmd.value}
                        </div>
                        <div className="text-md text-white/70 ml-3 font-semibold">
                          {cmd.data.description}
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <div className="text-white h-full w-full flex flex-col items-center">
                <p className="w-full text-lg font-semibold text-white/70 mb-3">
                  Query not found. Here are some suggestions:
                </p>
                {Object.keys(rootCommand.commands).map(function (key) {
                  return (
                    <div
                      key={key}
                      onClick={() => {
                        rootCommand.commands[key].run();
                        $(".topicclui").trigger("focus");
                      }}
                      className="w-full cursor-pointer flex items-center p-4 py-2  border-2 hover:border-blue-800 border-transparent text-white rounded-lg"
                    >
                      <div className="text-lg font-semibold bg-zinc-900/50 rounded-lg p-2">
                        {key}
                      </div>
                      <div className="text-md text-white/70 ml-3 font-semibold">
                        {rootCommand.commands[key].description}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
