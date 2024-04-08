import { useState } from "react"

import UnlockedConfirmation from "~components/Models/UnlockedConfirmation"
import Header from "~components/Shared/Header"
import ManagementRow from "~components/Shared/ManagementRow"
import type { ICustomBlackList } from "~lib/types/blacklist"

interface IWebsiteManagementTableProps {
  blacklists: ICustomBlackList[]
}
export default function WebsiteManagementTable({
  blacklists
}: Readonly<IWebsiteManagementTableProps>) {
  const [unlockConfirmation, setUnlockConfirmation] = useState(false)
  return (
    <div className="w-full mt-6">
      <h2 className="text-[24px] font-semibold text-[#0B0B0C] mb-4">
        Website Mangement
      </h2>
      {/* Table */}
      <div className="bg-white pt-4 rounded-lg w-full overflow-hidden">
        {/* Header */}
        <Header
          headers={["Domain", "Category", "Last update", "Actions"]}
        />
        {/* Rows */}
        <div className="w-full">
          {blacklists?.map((r: ICustomBlackList, index: number) => {
            return (
              <ManagementRow
                key={index}
                url={r?.url}
                type={r?.category}
                timeStamp={r?.createdAt}
                isBorder={index !== blacklists?.length - 1}
                onUnlock={(id: string) => {
                  setUnlockConfirmation(true)
                }}
              />
            )
          })}
        </div>
      </div>
      {unlockConfirmation && (
        <UnlockedConfirmation
          onClose={() => {
            setUnlockConfirmation(false)
          }}
        />
      )}
    </div>
  )
}
