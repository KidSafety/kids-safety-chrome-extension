import { BASE_URL } from "~lib/env"
import type { IPaginationData } from "~types"

class BlackLinkService {
  fetchCustomBlacklist = async (queryParams: IPaginationData) => {
    const params = new URLSearchParams()
    Object.entries(queryParams).forEach(([key, value]) => {
      params.append(key, value)
    })
    const url = `${BASE_URL}/api/v1/sitechecker/blacklist/custom?${params.toString()}`
    return await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.ok) return res.json()
      console.error("Failed to fetch blacklisted links", res.statusText)
      throw new Error("Failed to fetch blacklisted links")
    })
  }

  removeCustomBlacklist = async (url: string) => {
    return await fetch(
      `${BASE_URL}/api/v1/sitechecker/blacklist/custom?url=${url}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((res) => {
      if (res.ok) return res.json()
      console.error("Failed to fetch blacklisted links", res.statusText)
      throw new Error("Failed to fetch blacklisted links")
    })
  }

  isLinkBlacklisted = async (url: string) => {
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

  addBlackLink = async (url: string) => {
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
