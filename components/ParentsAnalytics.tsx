import { useState } from "react"

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
              className="absolute right-3 top-5">
              {hidePassword ? (
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
