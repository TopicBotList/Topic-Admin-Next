import { useState } from "react"

export default function SidebarItem({icon, text, onClick}){
    const [hover, setHover] = useState(false)
    return <button onClick={onClick} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="w-full text-blue-600 font-semibold text-left text-xl rounded-lg p-3 flex items-center">
        <div className={`mr-2 rounded-lg p-3 ${hover? 'text-white' : 'text-blue-600'}`} style={{background: hover ? '#2563eb' : 'rgb(255, 255, 255, 0.03'}}>
            {icon}
        </div>
            <p className="text-white">{text}</p>
    </button>
}