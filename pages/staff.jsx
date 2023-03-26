import { useState, useEffect } from "react";
import {  IoBanSharp, FaUserCog } from "react-icons/fa";

export default function Staff(){
    const [staffData, setStaffData] = useState([]);

    useEffect(() => {
        const staffIds = ["787241442770419722", "510065483693817867", "887549958931247137", "899722893603274793"];
        const fetchStaffData = async () => {
            const staff = [];
            for (const id of staffIds) {
                const res = await fetch(`https://discord.com/api/users/${id}`, {
                    headers: {
                        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
                    }
                });
                const data = await res.json();
                staff.push({
                    id: data.id,
                    name: data.username,
                    discriminator: data.discriminator,
                    avatarUrl: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`,
                    badges: ["crown", "userCog"]
                });
            }
            setStaffData(staff);
        };
        fetchStaffData();
    }, []);

    return(
        <>
            {staffData.map((staffMember, index) => (
                <div className="w-full flex flex-col py-2" key={index}>
                    <div className="flex items-center bg-blue-900/10 p-3">
                        <img src={staffMember.avatarUrl} className="h-[150px] w-[150px] rounded-lg" />
                        <div className="flex flex-col h-[130px] ml-3">
                            <p className="font-bold text-4xl">{staffMember.name}#{staffMember.discriminator}</p>
                            <p className="font-semibold text-lg text-white/70">Description goes here</p>
                            <div className="h-full" />
                            <div className="flex items-center">
                                {staffMember.badges.includes("crown") && <FaCrown className="text-3xl text-yellow-400/70" />}
                                {staffMember.badges.includes("paintBrush") && <FaPaintBrush className="text-3xl text-red-400/70" />}
                                {staffMember.badges.includes("paintRoller") && <FaPaintRoller className="text-3xl text-green-400/70" />}
                                {staffMember.badges.includes("user") && <FaUser className="text-3xl text-blue-400/70" />}
                                {staffMember.badges.includes("ban") && <IoBanSharp className="text-3xl text-red-400/70" />}
                                {staffMember.badges.includes("userCog") && <FaUserCog className="ml-3 text-3xl text-blue-400/70" />}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
