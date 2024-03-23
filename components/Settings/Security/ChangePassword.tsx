import React, { useState } from "react"

import Eye from "~components/Icons/Eye"
import EyeCross from "~components/Icons/EyeCross"

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
            {!hidePasswords.current ? <Eye /> : <EyeCross />}
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
            {!hidePasswords.new ? <Eye /> : <EyeCross />}
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
            {!hidePasswords.confirmNew ? <Eye /> : <EyeCross />}
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
