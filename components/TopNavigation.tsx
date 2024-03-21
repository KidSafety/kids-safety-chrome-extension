import React, { useState } from "react"
import { useLocation } from "react-router-dom"

import Profiles from "./Profiles"

const getPanelName = (route: string) => {
  switch (route) {
    case "/settings":
      return "Settings"
    case "/familyMember":
      return "Family Member"
    default:
      return "Dashboard"
  }
}

function TopNavigation() {
  const location = useLocation()
  const [toggleProfileDropdown, setToggleProfileDropdown] = useState(false)
  return (
    <div className="w-full h-[68px] border-b-[1px] border-[#F4F4F4] flex justify-between items-center px-4">
      {/* Panel name */}
      <h2 className="text-[20px] font-medium text-[#666666]">
        {getPanelName(location.pathname)}
      </h2>

      {/* profile */}
      <div className="flex justify-center items-center gap-6">
        <button>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="35"
              height="35"
              rx="5.5"
              stroke="#E6E6E6"
            />
            <path
              d="M15.3542 27C16.0593 27.6224 16.9856 28 18 28C19.0145 28 19.9407 27.6224 20.6458 27M24 14C24 12.4087 23.3679 10.8826 22.2427 9.75736C21.1174 8.63214 19.5913 8 18 8C16.4087 8 14.8826 8.63214 13.7574 9.75736C12.6322 10.8826 12 12.4087 12 14C12 17.0902 11.2205 19.206 10.3497 20.6054C9.61515 21.7859 9.24788 22.3761 9.26134 22.5408C9.27626 22.7231 9.31488 22.7926 9.46179 22.9016C9.59448 23 10.1926 23 11.3889 23H24.6112C25.8074 23 26.4056 23 26.5382 22.9016C26.6852 22.7926 26.7238 22.7231 26.7387 22.5408C26.7522 22.3761 26.3849 21.7859 25.6504 20.6054C24.7795 19.206 24 17.0902 24 14Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="20"
              y="4"
              width="8"
              height="8"
              rx="4"
              fill="#EF4D56"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>

        <Profiles
          setToggleProfileDropdown={setToggleProfileDropdown}
          toggleProfileDropdown={toggleProfileDropdown}
        />
      </div>
    </div>
  )
}

export default TopNavigation
