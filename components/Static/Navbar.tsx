import React from "react";
import Image from "next/image";
import Bar from "../CLUI";
import {
    FaHome,
    FaRobot,
    FaServer,
    FaHandshake,
    FaUser,
    FaUserCircle,
    FaCogs,
    FaGlobeAmericas,
    FaSignOutAlt,
} from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import { useRouter } from "next/router";

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    const router = useRouter();

    return (
        <>
            <div className="z-[3] fixed top-0 h-[80px] flex items-center">
                <Bar />
            </div>
            <div className="flex flex-col items-center h-screen w-[270px] fixed top-0 left-[20px] z-[2]">
                <div className="h-[90px] flex items-center">
                    <Image
                        src="https://cdn.topiclist.xyz/images/png/TopicList5.png"
                        width={50}
                        height={50}
                        alt="TopicList Logo"
                        className="rounded-lg"
                    />
                    <p className="text-3xl font-bold text-white ml-3">
                        TopicList
                    </p>
                </div>
                <div
                    style={{
                        height: "calc(100vh - 180px)",
                        background: "rgb(255, 255, 255, 0.0)",
                    }}
                    className="w-[250px] flex flex-col rounded-lg border-2 border-blue-800 p-4 pt-[50px]"
                >
                    <SidebarItem
                        onClick={() => router.push("/")}
                        text={"Home"}
                        icon={<FaHome />}
                    />
                    <SidebarItem
                        onClick={() => router.push("/bots")}
                        text={"Bots"}
                        icon={<FaRobot />}
                    />
                    <SidebarItem
                        onClick={() => router.push("/servers")}
                        text={"Servers"}
                        icon={<FaServer />}
                    />
                    <SidebarItem
                        onClick={() => router.push("/team")}
                        text={"Team"}
                        icon={<FaUser />}
                    />
                    <SidebarItem
                        onClick={() => router.push("/partner")}
                        text={"Partners"}
                        icon={<FaHandshake />}
                    />
                    <SidebarItem
                        onClick={() =>
                            router.push("https://status.topiclist.xyz")
                        }
                        text={"Status"}
                        icon={<FaCogs />}
                    />
                    <SidebarItem
                        onClick={() => router.push("/analytics")}
                        text={"Analytics"}
                        icon={<FaGlobeAmericas />}
                    />
                    <div style={{ height: "90px" }} />
                    <SidebarItem
                        onClick={() => router.push("/profile")}
                        text={"Profile"}
                        icon={<FaUserCircle />}
                    />
                    <SidebarItem
                        onClick={() => router.push("/logout")}
                        text={"Logout"}
                        icon={<FaSignOutAlt />}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <div
                    style={{
                        width: "calc(100vw - 300px)",
                        height: "calc(100vh - 180px)",
                        background: "rgb(255, 255, 255, 0.0)",
                    }}
                    className=" rounded-lg ml-[300px] border-2 border-blue-800 overflow-y-hidden overflow-x-hidden"
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export default Navbar;
