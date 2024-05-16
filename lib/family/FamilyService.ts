import { BASE_URL } from "~lib/env"

export class FamilyService {
  async joinByEmail(parentEmail: string) {
    return await fetch(`${BASE_URL}/api/v1/family/join`, {
      method: "POST",
      body: JSON.stringify({ parentEmail }),
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

  async removeFromFamily(userId: string, parentId: string) {
    return await fetch(`${BASE_URL}/api/v1/family/remove`, {
      method: "POST",
      body: JSON.stringify({
        userId,
        parentId
      }),
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

const familyService = new FamilyService()
export default familyService
