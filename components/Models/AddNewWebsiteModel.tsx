import React, { Fragment } from "react"

import Cross from "~components/Icons/Cross"

interface props {
  onClose: () => void
  onSuccess: () => void
}

function AddNewWebsiteModel({ onClose, onSuccess }: props) {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-full max-w-[600px]">
          {/*content*/}
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              onSuccess()
            }}
            className="border-0 rounded-[10px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="w-full flex justify-between items-end p-4">
              <h3 className="font-medium text-[22px] text-[#333333] capitalize text-left">
                Add Website to Blocked List
              </h3>
              <button onClick={onClose}>
                <Cross />
              </button>
            </div>
            {/* Body */}
            <div className="w-full flex justify-center items-start flex-col p-6 pt-2">
              <label
                htmlFor="websiteUrl"
                className="text-[#333333] text-sm font-medium text-left">
                Add Website Link Url <span className="text-[#F75555]">*</span>
              </label>
              <input
                required
                className="w-full h-[44px] border-[1px] border-[#BECAE0] rounded-lg px-2 placeholder:text-[#BBBBBB] mt-1"
                type="text"
                placeholder="Enter website url"
                id="websiteUrl"
                name="websiteUrl"
              />
            </div>
            {/* footer */}
            <div className="w-full flex justify-end items-center px-6 pb-6">
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

export default AddNewWebsiteModel
