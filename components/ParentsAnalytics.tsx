import { useState } from "react"
import { LuEye, LuEyeOff } from "react-icons/lu"

export default function ParentsAnalytics() {
  const [openPassword, setOpenPassword] = useState(false)
  const [passCode, setPassCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [hidePassword, setHidePassword] = useState(true)

  const openParentPage = () => {
    setOpenPassword(false)
    setErrorMessage("")
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL("tabs/index.html")
    })
  }

  const checkPassCode = () => {
    if (passCode === "12345678") {
      openParentPage()
    } else {
      setErrorMessage("Incorrect passcode")
    }
  }

  return (
    <div>
      {openPassword ? (
        <div>
          <label
            htmlFor="password"
            className="text-black text-[14px] font-medium">
            Enter passcode
          </label>
          <div className="relative w-full">
            <input
              className="w-full h-[48px] border-[1px] border-[#B4B4B4] rounded-[8px] mt-1 pl-3 pr-8"
              id="password"
              type={hidePassword ? "password" : "text"}
              placeholder="Parent password"
              value={passCode}
              onChange={(e) => setPassCode(e.target.value)}
              onFocus={() => setErrorMessage("")}
              onKeyDown={(e) => {
                if (e.key === "Enter") checkPassCode()
              }}
            />
            <button
              onClick={() => setHidePassword(!hidePassword)}
              className="absolute right-3 top-4">
              {hidePassword ? (
                <LuEyeOff color="#B4B4B4" size={18} />
              ) : (
                <LuEye color="#B4B4B4" size={18} />
              )}
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-1">{errorMessage}</p>}
          {passCode.length >= 8 && (
            <button
              onClick={() => checkPassCode()}
              className="bg-[#194494] whitespace-nowrap w-full h-[48px] text-white text-[16px] leading-[24px] text-lg rounded-[10px] mt-6">
              Continue
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => setOpenPassword(true)}
          className="bg-[#194494] whitespace-nowrap w-full h-[48px] text-white text-[16px] leading-[24px] text-lg rounded-[10px]">
          Parents Dashboard
        </button>
      )}
    </div>
  )
}
