import { Fragment, useEffect, useState } from "react"

import Header from "~components/Shared/Header"
import MonitoringRow from "~components/Shared/MonitoringRow"
import TablePagination from "~components/Shared/TablePagination"
import type { IWebHistory } from "~lib/types/webhistory"
import webHistoryService from "~lib/webhistory/WebHistoryService"

type Props = {}

function MonitoringHistory({}: Props) {
  const [data, setData] = useState<IWebHistory[]>([])

  const fetchHistory = async () => {
    const res = await webHistoryService.fetchRemoteHistory()
    setData(res)
  }

  useEffect(() => {
    fetchHistory()
  }, [])

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
            headers={["Websites Url", "Category", " Date & Time", "Actions"]}
          />
          {/* Rows */}
          <div className="w-full">
            {data?.map((r: any, index: number) => {
              return (
                <MonitoringRow
                  key={r.id}
                  url={r?.url}
                  category={r?.category}
                  timeStamp={r?.lastVisitTime}
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
