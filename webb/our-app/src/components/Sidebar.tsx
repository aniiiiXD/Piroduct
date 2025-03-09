import React from 'react'
import { MoonIcon, SidebarCloseIcon } from 'lucide-react'

const Sidebar = () => {
  const favourites = ["Technical Docs", "Campaign Guidelines", "Important Rules"]
  const mainMenu = ["Dashboard", "Campaigns", "Messages", "Support Center", "Leads", "Archive"]

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg">
      <div className="flex h-full flex-col p-4">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold">Name</div>
          <button className="hover:bg-gray-100 p-2 rounded-lg">
            <SidebarCloseIcon size={23} />
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex-1">
          {/* Favorites */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">Favourites</h3>
            <ul className="space-y-2">
              {favourites.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-4">Main Menu</h3>
            <ul className="space-y-2">
              {mainMenu.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Extension Button */}
          <div className="mb-4">
            <button className="w-full bg-blue-50 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-100">
              <div className="text-sm">get the extension</div>
              <div className="font-semibold">Install Now</div>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full">photo</div>
              <div>
                <div className="font-semibold">Ani</div>
                <div className="text-sm text-gray-500">Bosss</div>
              </div>
            </div>
            <button className="hover:bg-gray-200 p-2 rounded-full">
              <MoonIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar