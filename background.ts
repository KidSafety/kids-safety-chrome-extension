import onExtIconClick from "~lib/chromeHooks/onExtIconClick"
import onExtInstall from "~lib/chromeHooks/onExtInstall"
import backgroundTrackingService from "~lib/tracking/BackgroundTrackingService"
import webHistoryService from "~lib/webhistory/WebHistoryService"

async function boot() {
  onExtInstall()
  onExtIconClick()
}

boot().catch((e) => {
  console.error(e)
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  backgroundTrackingService.handleDebouncedTrackEvent(tabId, changeInfo, tab)
  webHistoryService.sync()
})
