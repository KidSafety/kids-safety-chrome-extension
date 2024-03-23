import React from "react"

import Delete from "~components/Icons/Delete"
import WarnGray from "~components/Icons/WarnGray"

type Props = {
  no: string | number
  url: string
  timeStamp: string
  isBorder: boolean
}

function BlockedSiteRow({ timeStamp, url, isBorder, no }: Props) {
  return (
    <div
      className={`w-full grid grid-cols-[3fr,2fr,2fr,2fr] px-3 ${isBorder && "border-b-[1px] border-[#D1E3FE]"}`}>
      <div className="flex justify-start item-center py-3">
        <p className="text-sm text-[#333333] text-left">{no}</p>
      </div>
      <div className="flex text-sm text-[#194494] justify-start item-center py-3">
        {url}
      </div>
      <div className="flex justify-start item-center py-3">
        <p className="text-sm text-[#333333] text-left">{timeStamp}</p>
      </div>
      <div className="flex justify-start item-center py-3 gap-3">
        <button>
          <Delete />
        </button>
        <button>
          <WarnGray />
        </button>
      </div>
    </div>
  )
}

export default BlockedSiteRow
