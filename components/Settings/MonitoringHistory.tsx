import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import TablePagination from "~components/Shared/TablePagination"
import { EventTypes } from "~constants/eventTypes"
import type { IWebHistory } from "~lib/types/webhistory"
import webHistoryService from "~lib/webhistory/WebHistoryService"
import type { IPaginationData } from "~types"
import eventEmitter from "~utils/eventEmitter"

import MonitoringHistoryTable from "./MonitoringHistory/MonitoringHistoryTable"

function MonitoringHistory() {
  const [webHistories, setWebHistories] = useState<IWebHistory[]>([])

  const [pagination, setPagination] = useState<IPaginationData>({
    skip: 0,
    limit: 10,
    total: 0
  })

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchWebHistory", pagination],
    queryFn: () => {
      return webHistoryService.fetchRemoteHistory({
        skip: pagination.skip,
        limit: pagination.limit
      })
    }
  })

  const subscribe = () => {
    const token = eventEmitter.addListener(
      EventTypes.REFRESH_WEBHISTORY,
      (data: IPaginationData) => setPagination(data)
    )
    return token
  }

  useEffect(() => {
    const token = subscribe()
    return () => token.remove()
  }, [])

  useEffect(() => {
    if (data) {
      setWebHistories(data.histories)
      setPagination({
        ...pagination,
        total: data.total
      })
    }
  }, [data])

  return (
    <>
      <MonitoringHistoryTable webHistories={webHistories} />
      <TablePagination pagination={pagination} />
    </>
  )
}

export default MonitoringHistory
