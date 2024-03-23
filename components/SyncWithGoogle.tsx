import googleImage from "data-base64:~assets/google.png"
import profileImage from "data-base64:~assets/profile.png"
import React from "react"

import Cross from "./Icons/Cross"

interface props {
  onSignIn: () => void
}

function SyncWithGoogle({ onSignIn }: props) {
  return (
    <div className="w-[519px]">
      <div className="w-full flex justify-between items-center rounded-[10px] border-b-[1px] text-center border-[#00000014] p-4">
        <div className="flex justify-start items-center gap-3">
          <img
            src={googleImage}
            alt="Profile image"
            className="w-[24px] h-[24px] overflow-hidden rounded-full"
          />
          <p className="font-medium text-[18px] text-black">
            Sign in with Google
          </p>
        </div>
        {/* Cross */}
        <button>
          <Cross />
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
