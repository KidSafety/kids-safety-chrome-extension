import React, { useState } from "react"

type Props = {}

function ChangePassword({}: Props) {
  const [hidePasswords, setHidePasswords] = useState({
    current: true,
    new: true,
    confirmNew: true
  })
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      }}
      className="mt-6 w-full">
      <h3 className="text-[18px] text-[#333333] capitalize">Change Password</h3>
      <p className="text-sm text-[#666666]">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="border-b-[1px] w-full my-4 border-[#EDECEF]" />
      <div className="flex justify-start items-center">
        <label
          className="text-sm text-[#666666] min-w-[300px]"
          htmlFor="currentPassword">
          Current Password
        </label>
        <div className="relative h-[48px]">
          <input
            required
            id="currentPassword"
            name="currentPassword"
            type={hidePasswords?.current ? "password" : "text"}
            className="w-[280px] h-full rounded-md border-[1px] border-[#BECAE0] pl-3 pr-8"
          />
          <button
            type="button"
            onClick={() => {
              setHidePasswords({
                ...hidePasswords,
                current: !hidePasswords?.current
              })
            }}
            className="absolute flex justify-center items-center top-4 right-3">
            {!hidePasswords.current ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="#B4B4B4"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="#B4B4B4"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center mt-8">
        <label
          className="text-sm text-[#666666] min-w-[300px]"
          htmlFor="newPassword">
          New Password
        </label>
        <div className="relative h-[48px]">
          <input
            required
            id="newPassword"
            name="newPassword"
            type={hidePasswords?.new ? "password" : "text"}
            className="w-[280px] h-full rounded-md border-[1px] border-[#BECAE0] pl-3 pr-8"
          />
          <button
            type="button"
            onClick={() => {
              setHidePasswords({
                ...hidePasswords,
                new: !hidePasswords?.new
              })
            }}
            className="absolute flex justify-center items-center top-4 right-3">
            {!hidePasswords.new ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="#B4B4B4"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="#B4B4B4"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center mt-8">
        <label
          className="text-sm text-[#666666] min-w-[300px]"
          htmlFor="confirmNewPassword">
          Confirm Password
        </label>
        <div className="relative h-[48px]">
          <input
            required
            id="confirmNewPassword"
            name="confirmNewPassword"
            type={hidePasswords?.confirmNew ? "password" : "text"}
            className="w-[280px] h-full rounded-md border-[1px] border-[#BECAE0] pl-3 pr-8"
          />
          <button
            type="button"
            onClick={() => {
              setHidePasswords({
                ...hidePasswords,
                confirmNew: !hidePasswords?.confirmNew
              })
            }}
            className="absolute flex justify-center items-center top-4 right-3">
            {!hidePasswords.confirmNew ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="#B4B4B4"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="#B4B4B4"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 mt-8">
        <button
          type="submit"
          className="px-4 h-[40px] flex justify-center items-center capitalize text-[16px] font-semibold text-white bg-[#194494] border-[1px] border-[#194494] rounded-lg">
          Save Changes
        </button>
        <button
          type="button"
          className="px-4 h-[40px] flex justify-center items-center capitalize text-[16px] font-semibold text-[#194494] bg-white border-[1px] border-[#194494] rounded-lg">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ChangePassword
