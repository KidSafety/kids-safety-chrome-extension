import React, { useState } from "react"

type Props = {}

function Notifications({}: Props) {
  const [isChecked, setIsChecked] = useState({
    webMonitoring: false,
    defaultAlert: false,
    historyBrowser: false,
    screeningTime: false
  })

  return (
    <div className="mt-6 w-full">
      <h3 className="text-[18px] text-[#333333] capitalize">
        Notifications Settings
      </h3>
      <p className="text-sm text-[#666666]">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="border-b-[1px] w-full my-4 border-[#EDECEF]" />
      <div className="flex justify-start items-center">
        <p className="text-sm text-[#666666] min-w-[300px]">Web Monitoring</p>
        <input
          checked={isChecked?.webMonitoring}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsChecked({
              ...isChecked,
              webMonitoring: e?.target?.checked
            })
          }
          type="checkbox"
          className="peer sr-only opacity-0"
          id="webMonitoring"
        />
        <label
          htmlFor="webMonitoring"
          className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-white ${isChecked?.webMonitoring ? "before:bg-white" : "before:bg-[#D7D7D7] border-[#CCCCCC] border-[1px]"} px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#194494] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#CCCCCC] peer-checked:peer-focus-visible:outline-[#194494]`}>
          <span className="sr-only">Enable</span>
        </label>
      </div>
      <div className="flex justify-start items-center mt-8">
        <p className="text-sm text-[#666666] min-w-[300px]">Default Alert</p>
        <input
          checked={isChecked?.defaultAlert}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsChecked({
              ...isChecked,
              defaultAlert: e?.target?.checked
            })
          }
          type="checkbox"
          className="peer sr-only opacity-0"
          id="defaultAlert"
        />
        <label
          htmlFor="defaultAlert"
          className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-white ${isChecked?.defaultAlert ? "before:bg-white" : "before:bg-[#D7D7D7] border-[#CCCCCC] border-[1px]"} px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#194494] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#CCCCCC] peer-checked:peer-focus-visible:outline-[#194494]`}>
          <span className="sr-only">Enable</span>
        </label>
      </div>
      <div className="flex justify-start items-center mt-8">
        <p className="text-sm text-[#666666] min-w-[300px]">History Browser</p>
        <input
          checked={isChecked?.historyBrowser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsChecked({
              ...isChecked,
              historyBrowser: e?.target?.checked
            })
          }
          type="checkbox"
          className="peer sr-only opacity-0"
          id="historyBrowser"
        />
        <label
          htmlFor="historyBrowser"
          className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-white ${isChecked?.historyBrowser ? "before:bg-white" : "before:bg-[#D7D7D7] border-[#CCCCCC] border-[1px]"} px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#194494] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#CCCCCC] peer-checked:peer-focus-visible:outline-[#194494]`}>
          <span className="sr-only">Enable</span>
        </label>
      </div>
      <div className="flex justify-start items-center mt-8">
        <p className="text-sm text-[#666666] min-w-[300px]">Screening Time</p>
        <input
          checked={isChecked?.screeningTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIsChecked({
              ...isChecked,
              screeningTime: e?.target?.checked
            })
          }
          type="checkbox"
          className="peer sr-only opacity-0"
          id="screeningTime"
        />
        <label
          htmlFor="screeningTime"
          className={`relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-white ${isChecked?.screeningTime ? "before:bg-white" : "before:bg-[#D7D7D7] border-[#CCCCCC] border-[1px]"} px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#194494] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#CCCCCC] peer-checked:peer-focus-visible:outline-[#194494]`}>
          <span className="sr-only">Enable</span>
        </label>
      </div>
    </div>
  )
}

export default Notifications
