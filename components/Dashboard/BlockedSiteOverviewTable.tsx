import React from "react"
import Header from "~components/Shared/Header"
import BlockedSiteRow from "./BlockedSiteRow"

type Props = {}

function BlockedSiteOverviewTable({}: Props) {
  return (
    <div className="p-4 w-full bg-white rounded-[12px] border-[1px] border-[#F4F4F4]">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[16px] font-medium text-[#0B0B0C]">
          Blocked Sites Overview
        </h3>
        <button className="text-sm text-[#1972F9] font-medium">View All</button>
      </div>
      <div className="w-full mt-4">
        {/* Header */}
        <Header
          headers={["No.", "Website Url", "Time Usage", "Actions"]}
          isCheckbox={false}
        />
        {/* Rows */}
        <div className="w-full">
          {[1, 2, 3, 4]?.map((r: any, index: number) => {
            return (
              <BlockedSiteRow
                no={index}
                key={index}
                url={"http:link.com"}
                timeStamp={"00.30 mins"}
                isBorder={false}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlockedSiteOverviewTable
