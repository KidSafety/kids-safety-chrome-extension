import { useState } from "react"

import Block from "./Icons/Block"
import Harmful from "./Icons/Harmful"
import TimeSpent from "./Icons/TimeSpent"

export default function KidAnalytics() {
  const [analytics, setAnalytics] = useState({
    blockSites: 30,
    harmfulSites: 10,
    timeSpent: 120
  })

  return (
    <div className="w-full">
      <h1 className="text-[20px] leading-[32px] text-black font-semibold w-full rounded-[10px] border-b-[1px] text-center border-[#00000014]">
        Kids Analytics
      </h1>
      <div className="w-full grid grid-cols-3 mt-6 mb-3">
        <div className="flex justify-start items-center gap-1">
          <Block />
          <p className="text-[14px] font-medium capitalize text-[#707070] mb-[3px]">
            Block sites: {analytics.blockSites}{" "}
          </p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <Harmful />
          <p className="text-[14px] font-medium capitalize text-[#707070] mb-[3px]">
            Harmful sites: {analytics.harmfulSites}
          </p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <TimeSpent />
          <p className="text-[14px] font-medium capitalize text-[#707070] whitespace-nowrap mb-[3px]">
            Time spent: {analytics.timeSpent} minutes
          </p>
        </div>
      </div>
    </div>
  )
}
