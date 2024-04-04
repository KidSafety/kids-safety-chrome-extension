import authService from "~lib/auth"
import { BASE_URL } from "~lib/env"
import type { IPaginationData } from "~types"

class WebHistoryService {
  public sync = async () => {
    const isLoggedIn = authService.isLoggedIn()
    if (!isLoggedIn) return
    const history = await this.getHistory()
    fetch(`${BASE_URL}/api/v1/webhistory/sync`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(history),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  /**
   * Get the history of the user
   * Currenly it returns the last 100 history items
   * @returns Promise<chrome.history.HistoryItem[]>
   */
  getHistory = async (): Promise<chrome.history.HistoryItem[]> => {
    // Todo: base on user's plan, we can change the maxResults
    // For free users, we can limit the maxResults to 100
    // For premium users, we can limit the maxResults to 1000, max 2000
    // For enterprise users, we can limit the maxResults to 5000
    const maxResults = 100
    return new Promise((resolve, reject) => {
      chrome.history.search({ text: "", maxResults }, (results) => {
        resolve(results)
      })
    })
  }

  fetchRemoteHistory = async (queryParams: IPaginationData) => {
    const params = new URLSearchParams()
    Object.entries(queryParams).forEach(([key, value]) => {
      params.append(key, value)
    })
    const url = `${BASE_URL}/api/v1/webhistory/list?${params.toString()}`

    return fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) return res.json()
      console.error("Failed to fetch remote history", res.statusText)
    })
  }
}

const webHistoryService = new WebHistoryService()
export default webHistoryService
