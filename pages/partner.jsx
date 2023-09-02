import { FaHandshake } from "react-icons/fa";

export default function Staff() {
  return (
    <>
      <div className="w-full flex flex-col py-2 relative">
        <div className="flex items-center bg-blue-900/10 p-2">
          <img
            src={"https://cdn.infinitybots.gg/images/png/Infin2.png"}
            className={"h-[120px] w-[120px] rounded-lg"}
          />
          <div className="flex flex-col h-[100px] ml-2">
            <p className="font-bold text-3xl">InfinityBots</p>
            <p className="font-semibold text-sm text-white/70">
              We make it easier for you to advertise and grow your Discord Bots
              using our bot packs, vanity link's, stylish widget's and more.
            </p>
            <div className="h-full" />
            <div className="flex items-center">
              <FaHandshake className="text-2xl text-yellow-400/70" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-1 rounded-full bg-blue-700 mr-2 mb-2">
          <p className="text-xs text-white">therealtoxicdev</p>
        </div>
      </div>
    </>
  );
}
