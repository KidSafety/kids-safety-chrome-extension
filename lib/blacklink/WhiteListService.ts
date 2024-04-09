import { BASE_URL } from "~lib/env"

class WhiteListService {
  addWhiteList = async (url: string) => {
    return await fetch(`${BASE_URL}/api/v1/sitechecker/whitelist/add`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) return res.json()
      console.error("Failed to add blacklisted link", res.statusText)
      throw new Error("Failed to add blacklisted link")
    })
  }
}

const whiteListService = new WhiteListService()
export default whiteListService
