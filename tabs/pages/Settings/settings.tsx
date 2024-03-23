import React, { Fragment, useState } from "react"

import AddNewWebsiteModel from "~components/Models/AddNewWebsiteModel"
import BlockConfirmationModel from "~components/Models/BlockConfirmationModel"
import MonitoringHistory from "~components/Settings/MonitoringHistory"
import Security from "~components/Settings/Security/Security"
import SettingsTabs from "~components/Settings/SettingsTabs"
import WebsiteManagement from "~components/Settings/WebsiteManagement"

function SettingsPage() {
  const [tabs, setTabs] = useState(0)
  const [addWebsiteUrl, setAddWebsiteUrl] = useState(false)
  const [blockConfirmation, setBlockConfirmation] = useState(false)
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="#AEB6CF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="#AEB6CF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="border-[1px] border-[#A9C3EA] rounded-lg min-w-[40px] h-[40px] flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6517 6.27228C16.6517 5.74377 16.8085 5.22713 17.1021 4.7877C17.3957 4.34826 17.813 4.00576 18.3013 3.80351C18.7896 3.60126 19.3269 3.54834 19.8452 3.65144C20.3636 3.75455 20.8397 4.00905 21.2134 4.38276C21.5871 4.75647 21.8416 5.23261 21.9448 5.75096C22.0479 6.26932 21.9949 6.8066 21.7927 7.29488C21.5904 7.78316 21.2479 8.2005 20.8085 8.49412C20.3691 8.78774 19.8524 8.94446 19.3239 8.94446C18.6152 8.94446 17.9355 8.66293 17.4344 8.1618C16.9333 7.66067 16.6517 6.98099 16.6517 6.27228ZM3.29083 7.16301H13.9796C14.2158 7.16301 14.4424 7.06916 14.6094 6.90212C14.7764 6.73508 14.8703 6.50852 14.8703 6.27228C14.8703 6.03605 14.7764 5.80949 14.6094 5.64244C14.4424 5.4754 14.2158 5.38155 13.9796 5.38155H3.29083C3.05459 5.38155 2.82803 5.4754 2.66099 5.64244C2.49394 5.80949 2.4001 6.03605 2.4001 6.27228C2.4001 6.50852 2.49394 6.73508 2.66099 6.90212C2.82803 7.06916 3.05459 7.16301 3.29083 7.16301ZM8.63519 9.83519C8.08388 9.83674 7.54654 10.0088 7.09685 10.3277C6.64715 10.6466 6.30711 11.0969 6.12334 11.6166H3.29083C3.05459 11.6166 2.82803 11.7105 2.66099 11.8775C2.49394 12.0446 2.4001 12.2711 2.4001 12.5074C2.4001 12.7436 2.49394 12.9702 2.66099 13.1372C2.82803 13.3043 3.05459 13.3981 3.29083 13.3981H6.12334C6.28675 13.8603 6.57414 14.2686 6.95407 14.5784C7.334 14.8882 7.79183 15.0875 8.27744 15.1545C8.76305 15.2215 9.25774 15.1536 9.70737 14.9583C10.157 14.763 10.5442 14.4477 10.8267 14.0471C11.1091 13.6464 11.276 13.1758 11.3089 12.6867C11.3417 12.1976 11.2395 11.7088 11.0132 11.274C10.7869 10.8391 10.4454 10.4748 10.026 10.2211C9.60655 9.96731 9.1254 9.83381 8.63519 9.83519ZM21.1054 11.6166H13.9796C13.7433 11.6166 13.5168 11.7105 13.3497 11.8775C13.1827 12.0446 13.0888 12.2711 13.0888 12.5074C13.0888 12.7436 13.1827 12.9702 13.3497 13.1372C13.5168 13.3043 13.7433 13.3981 13.9796 13.3981H21.1054C21.3416 13.3981 21.5682 13.3043 21.7352 13.1372C21.9023 12.9702 21.9961 12.7436 21.9961 12.5074C21.9961 12.2711 21.9023 12.0446 21.7352 11.8775C21.5682 11.7105 21.3416 11.6166 21.1054 11.6166ZM10.4166 17.8517H3.29083C3.05459 17.8517 2.82803 17.9456 2.66099 18.1126C2.49394 18.2797 2.4001 18.5062 2.4001 18.7425C2.4001 18.9787 2.49394 19.2053 2.66099 19.3723C2.82803 19.5393 3.05459 19.6332 3.29083 19.6332H10.4166C10.6529 19.6332 10.8794 19.5393 11.0465 19.3723C11.2135 19.2053 11.3074 18.9787 11.3074 18.7425C11.3074 18.5062 11.2135 18.2797 11.0465 18.1126C10.8794 17.9456 10.6529 17.8517 10.4166 17.8517ZM21.1054 17.8517H18.2729C18.0627 17.2574 17.6493 16.7565 17.1056 16.4376C16.5619 16.1186 15.9229 16.0022 15.3016 16.1088C14.6804 16.2154 14.1168 16.5382 13.7105 17.0201C13.3042 17.502 13.0813 18.1121 13.0813 18.7425C13.0813 19.3728 13.3042 19.9829 13.7105 20.4648C14.1168 20.9468 14.6804 21.2696 15.3016 21.3762C15.9229 21.4828 16.5619 21.3663 17.1056 21.0473C17.6493 20.7284 18.0627 20.2275 18.2729 19.6332H21.1054C21.3416 19.6332 21.5682 19.5393 21.7352 19.3723C21.9023 19.2053 21.9961 18.9787 21.9961 18.7425C21.9961 18.5062 21.9023 18.2797 21.7352 18.1126C21.5682 17.9456 21.3416 17.8517 21.1054 17.8517Z"
                  fill="#8799B5"
                />
              </svg>
            </button>
            <button
              onClick={() => setAddWebsiteUrl(true)}
              className="px-3 flex justify-center h-[40px] items-center whitespace-nowrap gap-2 rounded-lg border-[1px] border-[#194494] text-white text-sm bg-[#194494]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 4.1665V15.8332M4.16667 9.99984H15.8333"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add New Website
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
          onSuccess={() => {
            setAddWebsiteUrl(false)
            setBlockConfirmation(true)
          }}
        />
      )}
      {/* Black confirmation model */}
      {blockConfirmation && (
        <BlockConfirmationModel
          onClose={() => {
            setBlockConfirmation(false)
            setTabs(0)
          }}
        />
      )}
    </Fragment>
  )
}

export default SettingsPage
