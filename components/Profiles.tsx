import profileImage from "data-base64:~assets/profile.png"
import React from "react"

interface props {
  toggleProfileDropdown: boolean
  setToggleProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

function Profiles({ toggleProfileDropdown, setToggleProfileDropdown }: props) {
  return (
    <div className="relative">
      <button
        onClick={() => setToggleProfileDropdown(!toggleProfileDropdown)}
        className="flex justify-center items-center gap-2">
        <img
          src={profileImage}
          alt="Profile image"
          className="w-[32px] h-[32px] overflow-hidden rounded-full"
        />
        <div>
          <p className="text-[14px] text-[#333333] font-medium text-left">
            Robert Fox
          </p>
          <p className="text-[10px] text-[#666666] text-left">Kid</p>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6L8 10L12 6"
            stroke="#666666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* dropdown */}
      {toggleProfileDropdown && (
        <div className="rounded-[10px] shadow-dropdown bg-white absolute right-0 top-12 z-20">
          <div className="w-full min-w-[300px] flex justify-between items-center rounded-[10px] border-b-[1px] text-center border-[#00000014] p-4">
            <p className="font-medium text-[16px] text-black whitespace-nowrap">
              Switch Profiles
            </p>
          </div>
          <button
            onClick={() => setToggleProfileDropdown(!toggleProfileDropdown)}
            className="flex justify-start items-center gap-3 px-5 py-2 rounded-[10px] hover:bg-gray-300 w-full transition-all duration-300">
            <img
              src={profileImage}
              alt="Profile image"
              className="w-[32px] h-[32px] overflow-hidden rounded-full"
            />
            <p className="text-[14px] text-[#333333] font-medium text-left whitespace-nowrap">
              Hannah Hopper
            </p>
          </button>
          <button
            onClick={() => setToggleProfileDropdown(!toggleProfileDropdown)}
            className="flex justify-start items-center gap-3 px-5 py-2 rounded-[10px] hover:bg-gray-300 w-full transition-all duration-300">
            <img
              src={profileImage}
              alt="Profile image"
              className="w-[32px] h-[32px] overflow-hidden rounded-full"
            />
            <p className="text-[14px] text-[#333333] font-medium text-left whitespace-nowrap">
              John Wick
            </p>
          </button>
          <button
            onClick={() => setToggleProfileDropdown(!toggleProfileDropdown)}
            className="flex justify-start items-center gap-3 px-5 py-2 rounded-[10px] hover:bg-gray-300 w-full transition-all duration-300">
            <img
              src={profileImage}
              alt="Profile image"
              className="w-[32px] h-[32px] overflow-hidden rounded-full"
            />
            <p className="text-[14px] text-[#333333] font-medium text-left whitespace-nowrap">
              Mr Johnathan
            </p>
          </button>
        </div>
      )}
    </div>
  )
}

export default Profiles
