import React, { Fragment } from "react"

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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.0003 11.9998L12.0003 19.9998M12.0003 11.9998L20.0003 19.9998M29.3337 15.9998C29.3337 23.3636 23.3641 29.3332 16.0003 29.3332C8.63653 29.3332 2.66699 23.3636 2.66699 15.9998C2.66699 8.63604 8.63653 2.6665 16.0003 2.6665C23.3641 2.6665 29.3337 8.63604 29.3337 15.9998Z"
                    stroke="#666666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
