import { FaCrown, FaHandshake, FaPaintBrush, FaPaintRoller, FaUser, FaUserCog } from "react-icons/fa";

export default function Staff(){
return(<>
    <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
            <img src={'https://cdn.topiclist.xyz/images/png/TopicList5.png'} className={'h-[150px] w-[150px] rounded-lg'}></img>
            <div className="flex flex-col h-[130px] ml-3">
                <p className="font-bold text-4xl">Partner name</p>
                <p className="font-semibold text-lg text-white/70">Partner's detail</p>
                <div className={'h-full'}/>
                <div className="flex items-center">
                    <FaHandshake className="text-3xl text-yellow-400/70"/>

                </div>
            </div>
            
        </div>
    </div>
    </>)
}