import dayjs from "dayjs"
import React from "react"

import EyeTick from "~components/Icons/EyeTick"
import WarnRed from "~components/Icons/WarnRed"

type Props = {
  url: string
  category: string
  timeStamp: string
  isBorder: boolean
}

function MonitoringRow({
  timeStamp,
  category,
  url,
  isBorder
}: Readonly<Props>) {
  return (
    <div
      className={`w-full grid grid-cols-[.5fr,3fr,2fr,2fr,2fr] px-3 ${isBorder && "border-b-[1px] border-[#D1E3FE]"}`}>
      <div className="flex justify-start item-center py-4">
        <input
          className="w-[20px] h-[20px] -mb-[5px] cursor-pointer bg-[#194494] text-[#194494] checked:bg-[#194494]"
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <div className="flex justify-start py-4 mr-4 overflow-x-scroll text-nowrap">
        <p className="text-blue-600">{url}</p>
      </div>

      <div className="flex justify-start item-center py-4">
        <p className="text-[16px] text-[#333333] text-left">{category}</p>
      </div>
      <div className="flex justify-start item-center py-4">
        <p className="text-[16px] text-[#333333] text-left">
          {dayjs(timeStamp).format("YYYY/MM/DD HH:mm:ss")}
        </p>
      </div>
      <div className="flex justify-start item-center py-4 gap-3">
        <button>
          <EyeTick />
        </button>
        <button>
          <WarnRed />
        </button>
      </div>
    </div>
  )
}

export default MonitoringRow
