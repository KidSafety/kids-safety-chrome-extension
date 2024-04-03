import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import Header from "~components/Shared/Header"
import MonitoringRow from "~components/Shared/MonitoringRow"
import { EventTypes } from "~constants/eventTypes"
import type { IWebHistory } from "~lib/types/webhistory"
import webHistoryService from "~lib/webhistory/WebHistoryService"
import type { IQueryParams } from "~types"
import eventEmitter from "~utils/eventEmitter"

function MonitoringHistoryTable() {
  const [webHistories, setWebHistories] = useState<IWebHistory[]>([])
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    skip: 0,
    limit: 10
  })

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchWebHistory"],
    enabled: false,
    queryFn: () => {
      return webHistoryService.fetchRemoteHistory(queryParams)
    }
  })

  useEffect(() => {
    if (data && !isLoading && !error) setWebHistories(data)
  }, [data])

  useEffect(() => {
    refetch()
  }, [queryParams])

  const subscribe = () => {
    const token = eventEmitter.addListener(
      EventTypes.REFRESH_WEBHISTORY,
      (params: IQueryParams) => setQueryParams(params)
    )
    return token
  }

  useEffect(() => {
    const token = subscribe()
    return () => token.remove()
  }, [])

  return (
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
          {webHistories?.map((r: any, index: number) => {
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
  )
}

export default MonitoringHistoryTable
