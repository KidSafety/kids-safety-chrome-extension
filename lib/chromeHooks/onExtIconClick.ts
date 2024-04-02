export default function onExtIconClick() {
  chrome.action.onClicked.addListener(async (msg) => {
    console.info("onClicked", msg)
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL("tabs/index.html")
    })
  })
}
