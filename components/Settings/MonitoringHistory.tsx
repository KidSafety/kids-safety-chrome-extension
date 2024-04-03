import { Fragment } from "react"

import TablePagination from "~components/Shared/TablePagination"

import MonitoringHistoryTable from "./MonitoringHistory"


function MonitoringHistory() {
  return (
    <Fragment>
      <MonitoringHistoryTable />
      <TablePagination />
    </Fragment>
  )
}

export default MonitoringHistory
