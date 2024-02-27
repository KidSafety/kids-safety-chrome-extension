import { useState } from "react"

export default function KidAnalytics() {
  const [analytics, setAnalytics] = useState({
    blockSites: 30,
    harmfulSites: 10,
    timeSpent: 120
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <p className="text-center text-lg font-bold">Kid Analytics</p>
      <div>
        <p>Block sites: {analytics.blockSites} </p>
        <p>Harmful sites: {analytics.harmfulSites} </p>
        <p>Time spent: {analytics.timeSpent} minutes </p>
      </div>
    </div>
  )
}
