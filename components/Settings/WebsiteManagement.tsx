import React, { Fragment, useState } from "react"

import UnlockedConfirmation from "~components/Models/UnlockedConfirmation"
import UnlockWebsiteModel from "~components/Models/UnlockWebsiteModel"
import Header from "~components/Shared/Header"
import ManagementRow from "~components/Shared/ManagementRow"
import TablePagination from "~components/Shared/TablePagination"

type Props = {}

const data = [
  {
    url: "http:malaciouscontent.link.com",
    type: "Malicious Content",
    timeStamp: "01:00 hr"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Malicious Content",
    timeStamp: "01:00 hr"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Malicious Content",
    timeStamp: "01:00 hr"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Malicious Content",
    timeStamp: "01:00 hr"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Malicious Content",
    timeStamp: "01:00 hr"
  },
  {
    url: "http:malaciouscontent.link.com",
    type: "Malicious Content",
    timeStamp: "01:00 hr"
  }
]

function WebsiteManagement({}: Props) {
  const [unLockWebsite, setUnLockWebsite] = useState(false)
  const [unlockConfirmation, setUnlockConfirmation] = useState(false)
  return (
    <Fragment>
      <div className="w-full mt-6">
        <h2 className="text-[24px] font-semibold text-[#0B0B0C] mb-4">
          Website Management
        </h2>
        {/* Table */}
        <div className="bg-white pt-4 rounded-lg w-full overflow-hidden">
          {/* Header */}
          <Header
            headers={["Blocked Websites", "Type", "Time Usage", "Actions"]}
          />
          {/* Rows */}
          <div className="w-full">
            {data?.map((r: any, index: number) => {
              return (
                <ManagementRow
                  key={index}
                  url={r?.url}
                  type={r?.type}
                  timeStamp={r?.timeStamp}
                  isBorder={index !== data?.length - 1}
                  onUnlock={(id: string) => {
                    setUnLockWebsite(true)
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
      {/* Table Pagination */}
      <TablePagination />

      {/* Unlock website model */}
      {unLockWebsite && (
        <UnlockWebsiteModel
          onClose={() => setUnLockWebsite(false)}
          onSuccess={() => {
            setUnLockWebsite(false)
            setUnlockConfirmation(true)
          }}
        />
      )}
      {/* Black confirmation model */}
      {unlockConfirmation && (
        <UnlockedConfirmation
          onClose={() => {
            setUnlockConfirmation(false)
          }}
        />
      )}
    </Fragment>
  )
}

export default WebsiteManagement
