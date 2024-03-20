import profileImage from "data-base64:~assets/profile.png"
import React from "react"
import { FcGoogle } from "react-icons/fc"

interface props {
  onSignIn: () => void
}

function SyncWithGoogle({ onSignIn }: props) {
  return (
    <div className="w-[519px]">
      <div className="w-full flex justify-between items-center rounded-[10px] border-b-[1px] text-center border-[#00000014] p-4">
        <div className="flex justify-start items-center gap-3">
          <FcGoogle size={24} />
          <p className="font-medium text-[18px] text-black">
            Sign in with Google
          </p>
        </div>
        {/* Cross */}
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.9998 11.0001L10.9998 19.0001M10.9998 11.0001L18.9998 19.0001M28.3332 15.0001C28.3332 22.3639 22.3636 28.3334 14.9998 28.3334C7.63604 28.3334 1.6665 22.3639 1.6665 15.0001C1.6665 7.63628 7.63604 1.66675 14.9998 1.66675C22.3636 1.66675 28.3332 7.63628 28.3332 15.0001Z"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="my-3 px-6 py-3">
        <div className=" flex justify-start items-center gap-4">
          <img
            src={profileImage}
            alt="Profile image"
            className="w-[43px] h-[43px] overflow-hidden rounded-full"
          />
          <div>
            <p className="text-[16px] text-black font-medium">Alex Smith</p>
            <p className="text-[14px] text-[#666666] font-medium">
              alex.smith@gmail.com
            </p>
          </div>
        </div>
        <button
          onClick={onSignIn}
          className="bg-[#194494] whitespace-nowrap w-full h-[48px] text-white text-[16px] leading-[24px] text-lg rounded-[10px] mt-4 mb-6">
          Continue as Alex
        </button>
        <p className="text-[16px] text-[#666666]">
          To create your account, Google will share your name, email address,
          and profile picture.
        </p>
      </div>
    </div>
  )
}

export default SyncWithGoogle
