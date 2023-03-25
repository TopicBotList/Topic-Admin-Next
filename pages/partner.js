import { FaCrown, FaHandshake, FaPaintBrush, IoBanSharp, FaPaintRoller, FaUser, FaUserCog } from "react-icons/fa";

export default function Staff(){
return(<>
    <div className="w-full flex flex-col py-2">
        <div className="flex items-center bg-blue-900/10 p-3">
            <img src={'https://beta.diswidgets.org/ibl.png'} className={'h-[150px] w-[150px] rounded-lg'}></img>
            <div className="flex flex-col h-[130px] ml-3">
                <p className="font-bold text-4xl">InfinityBots</p>
                <p className="font-semibold text-lg text-white/70">We make it easier for you to advertise and grow your Discord Bots using our bot packs, vanity link's, stylish widget's and more.</p>
                <div className={'h-full'}/>
                <div className="flex items-center">
                    <FaHandshake className="text-3xl text-yellow-400/70"/>

                </div>
            </div>
            
        </div>
    </div>
    </>)
}