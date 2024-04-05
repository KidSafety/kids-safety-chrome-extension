import Header from "~components/Shared/Header"
import MonitoringRow from "~components/Shared/MonitoringRow"
import type { IWebHistory } from "~lib/types/webhistory"

interface IMonitoringHistoryTableProps {
  webHistories: IWebHistory[]
}
export default function MonitoringHistoryTable({
  webHistories
}: Readonly<IMonitoringHistoryTableProps>) {
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
                isBorder={index !== webHistories?.length - 1}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
