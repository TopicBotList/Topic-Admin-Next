import { FaCheckCircle, FaClipboard, FaRobot, FaServer, FaUser } from "react-icons/fa";

export default function App(){
 
  return(<>
  <div className="flex flex-col w-full h-full">
    <div className="flex items-center justify-center p-3">
      <div className="mx-2 h-[80px] w-[200px] rounded-lg bg-blue-800/10 flex items-center px-3">
        <div className="h-[50px] w-[50px] rounded-lg bg-blue-800/20 flex items-center justify-center text-2xl">
          <FaClipboard/>
        </div>
        <div className="ml-3 flex flex-col">
          <p className="text-sm font-semibold text-white/50">Unapproved Bots</p>
          <p className="text-lg font-semibold text-white">0</p>
        </div>
      </div>
      <div className="mx-2 h-[80px] w-[200px] rounded-lg bg-blue-800/10 flex items-center px-3">
        <div className="h-[50px] w-[50px] rounded-lg bg-blue-800/20 flex items-center justify-center text-2xl">
          <FaCheckCircle/>
        </div>
        <div className="ml-3 flex flex-col">
          <p className="text-sm font-semibold text-white/50">Approved Bots</p>
          <p className="text-lg font-semibold text-white">0</p>
        </div>
      </div>
      <div className="mx-2 h-[80px] w-[200px] rounded-lg bg-blue-800/10 flex items-center px-3">
        <div className="h-[50px] w-[50px] rounded-lg bg-blue-800/20 flex items-center justify-center text-2xl">
          <FaServer/>
        </div>
        <div className="ml-3 flex flex-col">
          <p className="text-sm font-semibold text-white/50">Servers</p>
          <p className="text-lg font-semibold text-white">0</p>
        </div>
      </div>
      <div className="mx-2 h-[80px] w-[200px] rounded-lg bg-blue-800/10 flex items-center px-3">
        <div className="h-[50px] w-[50px] rounded-lg bg-blue-800/20 flex items-center justify-center text-2xl">
          <FaUser/>
        </div>
        <div className="ml-3 flex flex-col">
          <p className="text-sm font-semibold text-white/50">Users</p>
          <p className="text-lg font-semibold text-white">0</p>
        </div>
      </div>
    </div>
    <div className="w-full flex items-center flex-col px-8 py-2">
      <div className="w-full overflow-hidden rounded-lg bg-blue-800/10">
        <p className="py-4 px-4 bg-blue-800/10 font-semibold text-lg">Today&apos;s announcements</p>
        <div className="h-[200px] py-2 overflow-auto">
          <div className="flex items-center px-4 h-[60px] w-full hover:bg-blue-800/20">
            <p className="font-semibold text-lg text-white/80">Announcement title</p>
            <p className="font-semibold ml-4 text-white/60">LLOOINGG announcement content</p>
          </div>
          <div className="flex items-center px-4 h-[60px] w-full hover:bg-blue-800/20">
            <p className="font-semibold text-lg text-white/80">Another Announcement title</p>
            <p className="font-semibold ml-4 text-white/60">Another LLOOINGG announcement content</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}
