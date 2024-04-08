import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import TablePagination from "~components/Shared/TablePagination"
import { EventTypes } from "~constants/eventTypes"
import blackLinkService from "~lib/blacklink/BlackLinkService"
import type { ICustomBlackList } from "~lib/types/blacklist"
import type { IPaginationData } from "~types"
import eventEmitter from "~utils/eventEmitter"

import WebsiteManagementTable from "./WebsiteManagement/WebsiteManagementTable"

function WebsiteManagement() {
  const [customBlackList, setCustomBlackList] = useState<ICustomBlackList[]>([])

  const [pagination, setPagination] = useState<IPaginationData>({
    skip: 0,
    limit: 10,
    total: 0
  })

  const { data, refetch } = useQuery({
    queryKey: ["fetchCustomBlacklist", pagination],
    queryFn: () => {
      return blackLinkService.fetchCustomBlacklist({
        skip: pagination.skip,
        limit: pagination.limit
      })
    }
  })

  const subscribe = () => {
    const token = eventEmitter.addListener(
      EventTypes.REFRESH_CUSTOM_BLACKLIST,
      (data: IPaginationData) => {
        if (data) setPagination(data)
        else refetch()
      }
    )
    return token
  }

  useEffect(() => {
    const token = subscribe()
    return () => token.remove()
  }, [])

  useEffect(() => {
    if (data) {
      setCustomBlackList(data.sites)
      setPagination({
        ...pagination,
        total: data.total
      })
    }
  }, [data])

  return (
    <>
      <WebsiteManagementTable blacklists={customBlackList} />
      {Boolean(pagination?.limit) && (
        <TablePagination pagination={pagination} />
      )}
    </>
  )
}

export default WebsiteManagement
