import { FaCrown, FaPaintBrush, FaPaintRoller, FaUser, FaUserCog } from "react-icons/fa";

export default function Profile(){
    return(<>
    <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
            <img src={'https://cdn.discordapp.com/avatars/787241442770419722/d57d6439f795238f3f58981ac4ab055c.png?size=1024'} className={'h-[150px] w-[150px] rounded-lg'}></img>
            <div className="flex flex-col h-[130px] ml-3">
                <p className="font-bold text-4xl">RanveerSoni</p>
                <p className="font-semibold text-lg text-white/70">Creator Of This Site And BotList</p>
                <div className={'h-full'}/>
                <div className="flex items-center">
                    <FaCrown className="text-3xl text-yellow-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>

                </div>
            </div>
            
        </div>
    </div>
    <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
            <img src={'https://cdn.topiclist.xyz/images/png/TopicList5.png'} className={'h-[150px] w-[150px] rounded-lg'}></img>
            <div className="flex flex-col h-[130px] ml-3">
                <p className="font-bold text-4xl">Username</p>
                <p className="font-semibold text-lg text-white/70">Short bio</p>
                <div className={'h-full'}/>
                <div className="flex items-center">
                    <FaCrown className="text-3xl text-yellow-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>

                </div>
            </div>
            
        </div>
    </div>
    <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
            <img src={'https://cdn.topiclist.xyz/images/png/TopicList5.png'} className={'h-[150px] w-[150px] rounded-lg'}></img>
            <div className="flex flex-col h-[130px] ml-3">
                <p className="font-bold text-4xl">Username</p>
                <p className="font-semibold text-lg text-white/70">Short bio</p>
                <div className={'h-full'}/>
                <div className="flex items-center">
                    <FaCrown className="text-3xl text-yellow-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>

                </div>
            </div>
            
        </div>
    </div>
    <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
            <img src={'https://cdn.topiclist.xyz/images/png/TopicList5.png'} className={'h-[150px] w-[150px] rounded-lg'}></img>
            <div className="flex flex-col h-[130px] ml-3">
                <p className="font-bold text-4xl">Username</p>
                <p className="font-semibold text-lg text-white/70">Short bio</p>
                <div className={'h-full'}/>
                <div className="flex items-center">
                    <FaCrown className="text-3xl text-yellow-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>
                    <FaUserCog className="ml-3 text-3xl text-blue-400/70"/>

                </div>
            </div>
            
        </div>
    </div>
    </>)
}