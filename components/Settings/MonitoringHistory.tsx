import React, { Fragment } from "react"

import Header from "~components/Shared/Header"
import MonitoringRow from "~components/Shared/MonitoringRow"
import TablePagination from "~components/Shared/TablePagination"

type Props = {}

const data = [
  {
    url: "http:malaciouscontent.link.com",
    type: "Youtube",
    timeStamp: "02/10/2024 02:00pm"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Youtube",
    timeStamp: "02/10/2024 02:00pm"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Youtube",
    timeStamp: "02/10/2024 02:00pm"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Youtube",
    timeStamp: "02/10/2024 02:00pm"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Youtube",
    timeStamp: "02/10/2024 02:00pm"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Youtube",
    timeStamp: "02/10/2024 02:00pm"
  }
]

function MonitoringHistory({}: Props) {
  return (
    <Fragment>
      <div className="w-full mt-6">
        <h2 className="text-[24px] font-semibold text-[#0B0B0C] mb-4">
          History Monitoring
        </h2>
        {/* Table */}
        <div className="bg-white pt-4 rounded-lg w-full overflow-hidden">
          {/* Header */}
          <Header
            headers={["Websites Url", "Type", " Date & Time", "Actions"]}
          />
          {/* Rows */}
          <div className="w-full">
            {data?.map((r: any, index: number) => {
              return (
                <MonitoringRow
                  key={index}
                  url={r?.url}
                  type={r?.type}
                  timeStamp={r?.timeStamp}
                  isBorder={index !== data?.length - 1}
                />
              )
            })}
          </div>
        </div>
      </div>
      {/* Table Pagination */}
      <TablePagination />
    </Fragment>
  )
}

export default MonitoringHistory
