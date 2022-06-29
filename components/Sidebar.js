import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon} from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/* Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1 rounded-full">
            <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"></Image>
        </div>

        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>

        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* Mini Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="https://toppng.com/uploads/preview/orihime-sky-flower-icon-circle-anime-girl-icon-11562944617lbguf3wuov.png" 
             alt="" className="h-10 w-10 rounded-full xl:mr-2" />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Temp Name</h4>
                <p className="text-gray-500">@fakeUserID</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>

    </div>
  )
}
