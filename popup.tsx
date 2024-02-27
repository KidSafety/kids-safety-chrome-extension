import KidAnalytics from "~components/KidAnalytics"
import ParentsAnalytics from "~components/ParentsAnalytics"

import "./style.css"

function IndexPopup() {
  return (
    <div
      style={{
        padding: 16,
        width: 250
      }}>
      <KidAnalytics />
      <ParentsAnalytics />
    </div>
  )
}

export default IndexPopup
