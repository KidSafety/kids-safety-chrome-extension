import { useMutation } from "@tanstack/react-query"
import { Fragment, useState } from "react"
import { toast } from "react-toastify"

import Add from "~components/Icons/Add"
import Filter from "~components/Icons/Filter"
import Search from "~components/Icons/Search"
import AddNewWebsiteModel from "~components/Models/AddNewWebsiteModel"
import MonitoringHistory from "~components/Settings/MonitoringHistory"
import Security from "~components/Settings/Security/Security"
import SettingsTabs from "~components/Settings/SettingsTabs"
import WebsiteManagement from "~components/Settings/WebsiteManagement"
import { EventTypes } from "~constants/eventTypes"
import blackLinkService from "~lib/blacklink/BlackLinkService"
import eventEmitter from "~utils/eventEmitter"

function SettingsPage() {
  const [tabs, setTabs] = useState(0)
  const [addWebsiteUrl, setAddWebsiteUrl] = useState(false)

  const addBlackLinkMutation = useMutation({
    mutationFn: async (url: string) => blackLinkService.addBlackLink(url),
    onSuccess: () => {
      setAddWebsiteUrl(false)
      eventEmitter.emit(EventTypes.REFRESH_WEBHISTORY)
      toast.success("Site added to blocked list")
    }
  })

  const handleAddBlackLink = (url: string) => {
    addBlackLinkMutation.mutate(url)
  }

  return (
    <Fragment>
      <div className="w-full min-h-[calc(100%-68px)] bg-[#EEF2F8] px-5 py-8">
        <div className="w-full flex justify-between items-center">
          <h1 className="capitalize text-[#0B0B0C] text-[30px] font-semibold">
            Parental Control Settings
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="relative w-full max-w-[300px] h-[40px]">
              <input
                type="text"
                className="border-[1px] border-[#A9C3EA] rounded-lg w-full h-full placeholder:text-[#AEB6CF] bg-transparent pl-8 pr-2"
                placeholder="Search"
              />
              <button className="absolute left-1 top-0 h-full flex justify-center items-center bg-transparent">
                <Search />
              </button>
            </div>
            <button className="border-[1px] border-[#A9C3EA] rounded-lg min-w-[40px] h-[40px] flex justify-center items-center">
              <Filter />
            </button>
            <button
              disabled={addBlackLinkMutation.isPending}
              onClick={() => setAddWebsiteUrl(true)}
              className="px-3 flex justify-center h-[40px] items-center whitespace-nowrap gap-2 rounded-lg border-[1px] border-[#194494] text-white text-sm bg-[#194494]">
              <Add /> Block Website
            </button>
          </div>
        </div>

        {/* Tabs */}
        <SettingsTabs tabs={tabs} setTabs={setTabs} />
        {tabs === 0 && <MonitoringHistory />}
        {tabs === 1 && <WebsiteManagement />}
        {tabs === 2 && <Security />}
      </div>

      {/* Add new website model */}
      {addWebsiteUrl && (
        <AddNewWebsiteModel
          onClose={() => setAddWebsiteUrl(false)}
          onSuccess={(url) => handleAddBlackLink(url)}
          isLoading={addBlackLinkMutation.isPending}
        />
      )}
    </Fragment>
  )
}

export default SettingsPage
