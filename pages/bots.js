import { FaHammer, MdOutlinePersonRemove } from "react-icons/fa";

export default function Staff(){
  return(
    <>
      <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
          <img src={'https://cdn.topiclist.xyz/images/png/TopicList5.png'} className={'h-[150px] w-[150px] rounded-lg'}></img>
          <div className="flex flex-col h-[130px] ml-3">
            <div className="flex items-center">
              <img src="https://cdn.discordapp.com/avatars/1234567890/abcdef1234567890abcdef1234567890.png?size=128" alt="Bot avatar" className="w-12 h-12 rounded-full"/>
              <h1 className="text-4xl font-bold ml-4">Bot username#1234</h1>
            </div>
            <p className="font-semibold text-lg text-white/70">Discord bot description goes here</p>
            <div className="h-full"></div>
            <div className="flex items-center space-x-4">
              <FaHandshake className="text-3xl text-yellow-400/70"/>
              <button className="flex items-center bg-red-600 px-2 py-1 rounded-lg text-white hover:bg-red-700">
                <FaHammer className="mr-2"/> Ban
              </button>
              <button className="flex items-center bg-yellow-600 px-2 py-1 rounded-lg text-white hover:bg-yellow-700">
                <MdOutlinePersonRemove className="mr-2"/> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
