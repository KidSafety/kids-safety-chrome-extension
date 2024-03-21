import React, { Fragment } from "react"

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
                <circle cx="35.5" cy="35" r="35" fill="#FFA51F" />
                <path
                  d="M18.7217 51.282C18.0282 51.282 17.5157 50.9805 17.184 50.3775C16.8523 49.7745 16.8523 49.1715 17.184 48.5684L33.9179 19.6233C34.2496 19.0203 34.7772 18.7188 35.5008 18.7188C36.2245 18.7188 36.7521 19.0203 37.0838 19.6233L53.8177 48.5684C54.1494 49.1715 54.1494 49.7745 53.8177 50.3775C53.486 50.9805 52.9735 51.282 52.28 51.282H18.7217ZM35.5008 31.3823C34.9883 31.3823 34.5589 31.5553 34.2128 31.9015C33.8654 32.2488 33.6918 32.6788 33.6918 33.1913V38.6185C33.6918 39.1311 33.8654 39.5605 34.2128 39.9066C34.5589 40.2539 34.9883 40.4276 35.5008 40.4276C36.0134 40.4276 36.4434 40.2539 36.7907 39.9066C37.1368 39.5605 37.3099 39.1311 37.3099 38.6185V33.1913C37.3099 32.6788 37.1368 32.2488 36.7907 31.9015C36.4434 31.5553 36.0134 31.3823 35.5008 31.3823ZM35.5008 45.8548C36.0134 45.8548 36.4434 45.6812 36.7907 45.3338C37.1368 44.9877 37.3099 44.5583 37.3099 44.0458C37.3099 43.5332 37.1368 43.1038 36.7907 42.7577C36.4434 42.4104 36.0134 42.2367 35.5008 42.2367C34.9883 42.2367 34.5589 42.4104 34.2128 42.7577C33.8654 43.1038 33.6918 43.5332 33.6918 44.0458C33.6918 44.5583 33.8654 44.9877 34.2128 45.3338C34.5589 45.6812 34.9883 45.8548 35.5008 45.8548ZM21.8423 47.6639H49.1593L35.5008 24.146L21.8423 47.6639Z"
                  fill="white"
                />
              </svg>

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
