import debounce from "lodash/debounce"

import blackLinkService from "~lib/blacklink/BlackLinkService"
import { openTab } from "~utils/chromeUtils"

const DEBOUNCE_DELAY = 300

class BackgroundTrackingService {
  public trackEvent = async (
    tabId: number,
    changeInfo: chrome.tabs.TabChangeInfo,
    tab: chrome.tabs.Tab
  ) => {
    // console.log("BackgroundTrackingService.trackEvent", tabId, changeInfo, tab)
    const isMaliciousLink = await blackLinkService.isLinkBlacklisted(tab.url)
    if (!isMaliciousLink) return
    openTab(`tabs/malicious-link.html?maliciousLink=${tab.url}`)
    setTimeout(() => {
      chrome.tabs.remove(tabId)
    })
  }

  // Debounced version of trackEvent
  private debouncedTrackEvent = debounce(this.trackEvent, DEBOUNCE_DELAY)

  // Use this method to handle the debounced event
  public handleDebouncedTrackEvent = (
    tabId: number,
    changeInfo: chrome.tabs.TabChangeInfo,
    tab: chrome.tabs.Tab
  ) => {
    this.debouncedTrackEvent(tabId, changeInfo, tab)
  }
}

const backgroundTrackingService = new BackgroundTrackingService()
export default backgroundTrackingService
