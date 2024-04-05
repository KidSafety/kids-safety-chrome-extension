import { Fragment } from "react"

import BlockedSiteOverviewTable from "~components/Dashboard/BlockedSiteOverviewTable"
import BlockedSitesOverview from "~components/Dashboard/BlockedSitesOverview"
import RecentlyWatchedVideos from "~components/Dashboard/RecentlyWatchedVideos"
import WebsitesOverview from "~components/Dashboard/WebsitesOverview"

function DashboardPage() {
  return (
    <div className="w-full min-h-[calc(100%-68px)] bg-[#EEF2F8] px-5 py-8">
      <h1 className="capitalize text-[#0B0B0C] text-[30px] font-semibold">
        Dashboard Overview
      </h1>
      <div className="mt-8 w-full grid grid-cols-[calc(100%-444px),420px] gap-6">
        <WebsitesOverview />
        <BlockedSitesOverview />
      </div>
      <div className="mt-6 w-full grid grid-cols-[calc(100%-444px),420px] gap-6">
        <BlockedSiteOverviewTable />
        <RecentlyWatchedVideos />
      </div>
    </div>
  )
}

export default DashboardPage
