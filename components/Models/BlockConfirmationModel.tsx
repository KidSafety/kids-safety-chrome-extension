import React, { Fragment } from "react"

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
            <div className="w-full flex justify-center items-center flex-col p-6 pt-2   ">
              <svg
                width="71"
                height="70"
                viewBox="0 0 71 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="35" r="35" fill="#27AE60" />
                <path
                  d="M49.9735 24.146L30.0737 44.0458L21.0283 35.0004"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
