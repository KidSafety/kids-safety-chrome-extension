import * as EmailValidator from "email-validator"
import { useState } from "react"

import Cross from "~components/Icons/Cross"

interface IJoinFamilyModalProps {
  onClose: () => void
}
export default function JoinFamilyModal({
  onClose
}: Readonly<IJoinFamilyModalProps>) {
  const [email, setEmail] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const onJoin = () => {
    if (!email) {
      setErrorMsg("Please enter a valid email")
    } else if (!EmailValidator.validate(email)) {
      setErrorMsg("Please enter a valid email")
    } else {
      onClose()
    }
  }
  return (
    <>
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
              <h2 className="text-[20px] font-semibold text-black text-center mt-3">
                Please enter your parent's email to join
              </h2>
              <div className="w-full mt-4">
                <input
                  required
                  type="email"
                  placeholder="dad_email@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-[1px] border-[#BECAE0] text-center rounded-lg w-full h-[44px] px-4"
                />
              </div>
              {errorMsg && (
                <p className="mt-4 text-red-500 text-center">{errorMsg}</p>
              )}
              <button
                onClick={onJoin}
                className="bg-[#194494] mx-auto max-w-[339px] whitespace-nowrap w-full h-[42px] text-white text-[16px] leading-[24px] text-lg rounded-[10px] mt-8">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
