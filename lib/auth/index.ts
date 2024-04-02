import { BASE_URL } from "~lib/env"
import type { IUser } from "~lib/types/user"

export class AuthService {
  async generateUser(user: IUser) {
    return await fetch(`${BASE_URL}/api/v1/auth/generate`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (res) => {
      if (res.ok) return await res.json()
      const error = res.statusText
      throw new Error(`Error generating user ${JSON.stringify(error)}`)
    })
  }

  isLoggedIn(): boolean {
    return false
  }
}

const authService = new AuthService()
export default authService
