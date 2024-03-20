import React, { Fragment } from "react"

import Avatar from "~components/Avatar"

interface props {
  onClose: () => void
  onSuccess: () => void
}

function AddChildModel({ onClose, onSuccess }: props) {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-full max-w-[519px]">
          {/*content*/}
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              onSuccess()
            }}
            className="border-0 rounded-[10px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="w-full rounded-[10px] border-b-[1px] text-center border-[#00000014] p-4">
              <p className="font-medium text-[18px] text-black capitalize text-left">
                Add New Child
              </p>
            </div>
            {/* Body */}
            <div className="w-full flex justify-center items-center flex-col p-6">
              {/* Avatar */}
              <Avatar />
              <button className="text-[20px] font-semibold text-[#1A1B1E] text-center mt-1">
                Add Picture
              </button>

              {/* I/O */}
              <div className="grid grid-cols-[1fr,2fr] gap-2 w-full mt-8">
                <p className="text-sm text-[#666666] capitalize h-full text-left flex justify-start items-center">
                  Name
                </p>
                <input
                  required
                  type="text"
                  className="bg-transparent border-[1px] border-[#BECAE0] rounded-lg w-full h-[44px] px-4"
                />
              </div>
              <div className="grid grid-cols-[1fr,2fr] gap-2 w-full mt-4">
                <p className="text-sm text-[#666666] capitalize h-full text-left flex justify-start items-center">
                  Age
                </p>
                <input
                  required
                  type="text"
                  className="bg-transparent border-[1px] border-[#BECAE0] rounded-lg w-full h-[44px] px-4"
                />
              </div>
              <div className="grid grid-cols-[1fr,2fr] gap-2 w-full mt-4">
                <p className="text-sm text-[#666666] capitalize h-full text-left flex justify-start items-center">
                  School
                </p>
                <input
                  required
                  type="text"
                  className="bg-transparent border-[1px] border-[#BECAE0] rounded-lg w-full h-[44px] px-4"
                />
              </div>
              <div className="grid grid-cols-[1fr,2fr] gap-2 w-full mt-4">
                <p className="text-sm text-[#666666] capitalize h-full text-left flex justify-start items-center">
                  Parent
                </p>
                <input
                  required
                  type="text"
                  className="bg-transparent border-[1px] border-[#BECAE0] rounded-lg w-full h-[44px] px-4"
                />
              </div>
            </div>
            {/* Footer */}
            <div className="flex justify-end items-center gap-4 px-6 pb-6">
              <button
                onClick={onClose}
                className="w-[95px] h-[40px] flex justify-center items-center capitalize text-sm text-[#194494] border-[1px] border-[#194494] rounded-lg">
                Cancel
              </button>
              <button
                type="submit"
                className="w-[95px] h-[40px] flex justify-center items-center capitalize text-sm text-white bg-[#194494] border-[1px] border-[#194494] rounded-lg">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  )
}

export default AddChildModel
