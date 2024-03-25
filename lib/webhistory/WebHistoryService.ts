import { BASE_URL } from "~lib/env"

class WebHistoryService {
  public sync = async () => {
    console.log("WebHistoryService.sync")
    const history = await this.getHistory()
    console.log("WebHistoryService.sync results", history)
    fetch(`${BASE_URL}/api/v1/webhistory/sync`, {
      method: "POST",
      body: JSON.stringify(history),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  public getHistory = async () => {
    return new Promise((resolve, reject) => {
      chrome.history.search({ text: "" }, (results) => {
        resolve(results)
      })
    })
  }
}

const webHistoryService = new WebHistoryService()
export default webHistoryService
