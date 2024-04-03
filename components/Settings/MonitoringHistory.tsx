import TablePagination from "~components/Shared/TablePagination"

import MonitoringHistoryTable from "./MonitoringHistory/MonitoringHistoryTable"

function MonitoringHistory() {
  return (
    <>
      <MonitoringHistoryTable />
      <TablePagination />
    </>
  )
}

export default MonitoringHistory
