import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { BASE_URL } from "~lib/env"

import LogoutIcon from "./Icons/LogoutIcon"

export default function LogoutBtn() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await fetch(`${BASE_URL}/api/v1/auth/logout`, {
      method: "POST",
      body: JSON.stringify({}),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        if (res.ok) return navigate("/welcome")
        console.error("Failed to logout", res.statusText)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setIsLoading(false))
  }
  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex justify-start items-center gap-3 px-5 py-2 rounded-[10px] mt-1 hover:bg-gray-300 w-full transition-all duration-300">
      <LogoutIcon /> <span className="text-lg">Logout</span>
    </button>
  )
}
