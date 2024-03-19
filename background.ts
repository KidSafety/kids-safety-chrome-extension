import backgroundTrackingService from "~lib/tracking/BackgroundTrackingService"

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  backgroundTrackingService.handleDebouncedTrackEvent(tabId, changeInfo, tab)
})