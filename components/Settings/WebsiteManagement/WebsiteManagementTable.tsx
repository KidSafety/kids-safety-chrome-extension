import Header from "~components/Shared/Header"
import ManagementRow from "~components/Shared/ManagementRow"
import type { ICustomBlackList } from "~lib/types/blacklist"

interface IWebsiteManagementTableProps {
  blacklists: ICustomBlackList[]
  isFetching: boolean
}
export default function WebsiteManagementTable({
  blacklists,
  isFetching
}: Readonly<IWebsiteManagementTableProps>) {
  return (
    <div className="w-full mt-6">
      <h2 className="text-[24px] font-semibold text-[#0B0B0C] mb-4">
        Website Mangement
      </h2>
      {/* Table */}
      <div className="bg-white pt-4 rounded-lg w-full overflow-hidden">
        {/* Header */}
        <Header headers={["Domain", "Status", "Last update", "Actions"]} />
        {/* Rows */}
        {!isFetching && (
          <div className="w-full">
            {blacklists?.map((r: ICustomBlackList, index: number) => {
              return (
                <ManagementRow
                  key={r.url}
                  url={r?.url}
                  isBlocked={r?.isBlocked}
                  timeStamp={r?.createdAt}
                  isBorder={index !== blacklists?.length - 1}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
