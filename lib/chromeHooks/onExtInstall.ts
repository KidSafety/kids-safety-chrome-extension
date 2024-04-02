import {
  isDevEnvironment,
  isIntOrProdEnvironment,
  isProdEnvironment
} from "~utils/envGateKeeper"

/**
 * @file onExtInstall.ts
 * @description Chrome extension install listener.
 *
 */
export default async function onExtInstall() {
  chrome.runtime.onInstalled.addListener(listenOnInstall)
}

async function listenOnInstall(msg: chrome.runtime.InstalledDetails) {
  if (isIntOrProdEnvironment()) {
  }
  if (isProdEnvironment()) {
    chrome.runtime.setUninstallURL(`${process.env.UNINSTALL_SURVEY_URL}`)
  }
  if (msg.reason === "install") {
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL("tabs/index.html")
    })
  }

  if (msg.reason === "update") {
    if (isDevEnvironment()) {
      chrome.tabs.create(
        {
          active: true,
          url: chrome.runtime.getURL("tabs/index.html")
        },
        cleanupOnUpdate
      )
    } else {
      await cleanupOnUpdate()
    }
  }
}

async function cleanupOnUpdate() {}
