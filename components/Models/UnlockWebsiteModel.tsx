import React, { Fragment } from "react"

import Alert from "~components/Icons/Alert"
import Cross from "~components/Icons/Cross"

interface props {
  onClose: () => void
  onSuccess: () => void
}

function UnlockWebsiteModel({ onClose, onSuccess }: props) {
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
              <Alert />
              <h2 className="text-[20px] font-semibold text-[#333333] text-center mt-3 max-w-[325px]">
                Are you sure you want to unblock{" "}
                <span className="text-[#1972F9]">www.facebook.com</span> site?
              </h2>
            </div>
            <div className="flex justify-center items-center gap-4 px-6 pb-6">
              <button
                onClick={onClose}
                className="w-[95px] h-[40px] flex justify-center items-center capitalize text-sm text-[#194494] border-[1px] border-[#194494] rounded-lg">
                Cancel
              </button>
              <button
                onClick={onSuccess}
                className="w-[95px] h-[40px] flex justify-center items-center capitalize text-sm text-white bg-[#194494] border-[1px] border-[#194494] rounded-lg">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  )
}

export default UnlockWebsiteModel
