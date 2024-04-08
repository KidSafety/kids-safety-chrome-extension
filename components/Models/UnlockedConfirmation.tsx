import React, { Fragment } from "react"

import Cross from "~components/Icons/Cross"
import Tick from "~components/Icons/Tick"

interface IUnlockedConfirmationProps {
  onClose: () => void
}

function UnlockedConfirmation({ onClose }: IUnlockedConfirmationProps) {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-full max-w-[519px]">
          {/*content*/}
          <div className="border-0 rounded-[10px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="w-full flex justify-end items-end p-4">
              <button onClick={onClose}>
                <Cross />
              </button>
            </div>
            {/* Body */}
            <div className="w-full flex justify-center items-center flex-col p-6 pt-2   ">
              <Tick />
              <h2 className="text-[20px] font-semibold text-[#999999] text-center mt-3">
                Unblock Successfully!
              </h2>
              <p className="mt-2 text-center text-sm text-[#666666] max-w-[339px]">
                Site has been unblocked successfully!
              </p>
              <button
                onClick={onClose}
                className="bg-[#194494] mx-auto max-w-[339px] whitespace-nowrap w-full h-[42px] text-white text-[16px] leading-[24px] text-lg rounded-[10px] mt-8">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  )
}

export default UnlockedConfirmation
