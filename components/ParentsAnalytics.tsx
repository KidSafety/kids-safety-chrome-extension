import { useState } from "react"

export default function ParentsAnalytics() {
  const [openPassword, setOpenPassword] = useState(false)
  const [passCode, setPassCode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const openParentPage = () => {
    setOpenPassword(false)
    setErrorMessage("")
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL("tabs/parents.html")
    })
  }

  const checkPassCode = () => {
    if (passCode === "1234") {
      openParentPage()
    } else {
      setErrorMessage("Incorrect passcode")
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 14
      }}>
      {openPassword ? (
        <div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <input
            className="p-3 w-full border-2 border-gray-400"
            type="password"
            placeholder="Parent passcode"
            value={passCode}
            onChange={(e) => setPassCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkPassCode()
            }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpenPassword(true)}
          className="p-3 bg-blue-500 text-white text-lg">
          Parents Dashboard
        </button>
      )}
    </div>
  )
}
