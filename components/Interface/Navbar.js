import Image from "next/image";
import Bar from "components/CLUI";
import { FaHome, FaRobot, FaServer, FaHandshake, IoBanSharp, FaSignOutAlt, FaUser, FaCogs, FaGlobeAmericas } from 'react-icons/fa'
import SidebarItem from "components/SidebarItem";
import { useRouter } from "next/router";
export default function Navbar({children}){
    const router = useRouter()
    return(<>
    <div className="z-[3] fixed top-0 h-[80px] flex items-center">
        <Bar/>
    </div>
    <div className='flex flex-col items-center h-screen w-[270px] fixed top-0 left-[20px] z-[2]'>
        <div className="h-[90px] flex items-center">
            <Image src='https://cdn.topiclist.xyz/images/png/TopicList5.png' width='50px' height='50px' className="rounded-lg"/>
            <p className="text-3xl font-bold text-white ml-3">TopicList</p>
            
        </div>
        <div style={{height: 'calc(100vh - 180px)', background: 'rgb(255, 255, 255, 0.0)'}} className="w-[250px] flex flex-col rounded-lg border-2 border-blue-800 p-4 pt-[50px]">
            <SidebarItem onClick={()=> router.push('/')} text={'Home'} icon={<FaHome/>}/>
            <SidebarItem onClick={()=> router.push('/bots')} text={'Bots'} icon={<FaRobot/>}/>
            <SidebarItem onClick={()=> router.push('/servers')} text={'Servers'} icon={<FaServer/>}/>
            <SidebarItem onClick={()=> router.push('/staff')} text={'Staff'} icon={<FaUser/>}/>
            <SidebarItem onClick={()=> router.push('/partner')} text={'Partners'} icon={<FaHandshake/>}/>
            <SidebarItem onClick={()=> router.push('/status')} text={'Status'} icon={<FaCogs/>}/>
            <SidebarItem onClick={()=> router.push('/analytics')} text={'Analytics'} icon={<FaGlobeAmericas/>}/>

        </div>
    </div>
    <div className="flex flex-col items-center justify-center h-screen w-screen">
    <div style={{width: 'calc(100vw - 300px)', height: 'calc(100vh - 180px)', background: 'rgb(255, 255, 255, 0.0)'}} className=' rounded-lg ml-[300px] border-2 border-blue-800 overflow-y-hidden oveflow-x-hidden'>
        {children}
    </div>
    </div>

    </>)
}