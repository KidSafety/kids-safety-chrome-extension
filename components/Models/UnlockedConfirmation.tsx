import React, { Fragment } from "react"

import Cross from "~components/Icons/Cross"
import Tick from "~components/Icons/Tick"
import type { IDialogMode } from "~lib/types/blacklist"

interface IUnlockedConfirmationProps {
  mode: IDialogMode
  onClose: () => void
}

function UnlockedConfirmation({
  mode,
  onClose
}: Readonly<IUnlockedConfirmationProps>) {
  const renderTitle = () => {
    if (mode === "unlock") {
      return {
        title: "Unblock Successfully!",
        message: "Site has been unblocked successfully!"
      }
    }
    return {
      title: "Add to whitelist Successfully!",
      message: "Site has been added to whitelist successfully!"
    }
  }
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
                {renderTitle().title}
              </h2>
              <p className="mt-2 text-center text-sm text-[#666666] max-w-[339px]">
                {renderTitle().message}
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
