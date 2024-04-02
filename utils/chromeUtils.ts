export async function fuzzySearchTabs(
  searchStr: string
): Promise<chrome.tabs.Tab[]> {
  return new Promise((res) => {
    chrome.tabs.query({}, (tabs) => {
      const matchingTabs = tabs.filter((tab) => {
        return tab.url && tab.url.includes(searchStr)
      })
      res(matchingTabs)
    })
  })
}

export const openTab = async (url: string, checkExisted = true) => {
  if (checkExisted) {
    const tabs = await fuzzySearchTabs(url)
    if (tabs.length > 0) {
      if (tabs[0]?.id) chrome.tabs.update(tabs[0].id, { active: true })
    } else {
      chrome.tabs.create({ active: true, url })
    }
  } else {
    chrome.tabs.create({ active: true, url })
  }
}

export const getCurrentProfile =
  async (): Promise<chrome.identity.UserInfo> => {
    return new Promise((res) => {
      chrome.identity.getProfileUserInfo(function (userInfo) {
        res(userInfo)
      })
    })
  }
