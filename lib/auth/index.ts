import { BASE_URL } from "~lib/env"
import type { IUser } from "~lib/types/user"
import { getCurrentProfile } from "~utils/chromeUtils"

export class AuthService {
  async getUser() {
    const profile = await getCurrentProfile()
    if (!profile) return null
    const user = await this.generateUser(profile)
    return user
  }

  async generateUser(user: IUser) {
    return await fetch(`${BASE_URL}/api/v1/auth/generate`, {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (res) => {
      const json = await res.json()
      if (res.ok) return json
      if (json.message) throw new Error(json.message)
    })
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await this.getUser()
    return user !== null
  }

  async changePassword(currentPassword: string, newPassword: string) {
    return await fetch(`${BASE_URL}/api/v1/auth/change-password`, {
      method: "POST",
      body: JSON.stringify({ currentPassword, newPassword }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (res) => {
      const json = await res.json()
      if (res.ok) return json
      if (json.message) throw new Error(json.message)
    })
  }
}

const authService = new AuthService()
export default authService
