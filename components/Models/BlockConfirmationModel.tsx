import React, { Fragment } from "react"

import Tick from "~components/Icons/Tick"

interface props {
  onClose: () => void
}

function BlockConfirmationModel({ onClose }: props) {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-full max-w-[519px]">
          {/*content*/}
          <div className="border-0 rounded-[10px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="w-full flex justify-end items-end p-4">
              <button onClick={onClose}>
                <Tick />
              </button>
            </div>
            {/* Body */}
            <div className="w-full flex justify-center items-center flex-col p-6 pt-2   ">
              <Tick />
              <h2 className="text-[20px] font-semibold text-[#999999] text-center mt-3">
                Blocked Successfully!
              </h2>
              <p className="mt-2 text-center text-sm text-[#666666] max-w-[339px]">
                <span className="text-[#1972F9]">www.facebook.com</span> site
                has been added to the blocked list.
              </p>
              <button
                onClick={onClose}
                className="bg-[#194494] mx-auto max-w-[339px] whitespace-nowrap w-full h-[42px] text-white text-[16px] leading-[24px] text-lg rounded-[10px] mt-8">
                View Blocked Lits
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  )
}

export default BlockConfirmationModel
