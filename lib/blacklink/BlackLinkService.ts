import { BASE_URL } from "~lib/env"

class BlackLinkService {
  blackLinks: [] = []
  constructor() {}

  public fetchBlackLinks = async () => {}

  public isLinkBlacklisted = async (url: string) => {
    return await fetch(`${BASE_URL}/api/v1/sitechecker/isBlocked`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) return res.json()
      console.error("Failed to fetch blacklisted links", res.statusText)
      throw new Error("Failed to fetch blacklisted links")
    })
  }

  public addBlackLink = async (url: string) => {
    return await fetch(`${BASE_URL}/api/v1/sitechecker/blacklist/add`, {
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

const blackLinkService = new BlackLinkService()
export default blackLinkService
