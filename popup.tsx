import { useState } from "react"

import "./style.css"


import KidAnalytics from "~components/KidAnalytics"
import ParentsAnalytics from "~components/ParentsAnalytics"
import SyncWithGoogle from "~components/SyncWithGoogle"

function Popup() {
  const [signIn, setSignIn] = useState(false)
  
  return (
    <>
      {signIn ? (
        <div className="min-w-[580px] rounded-[10px] w-full overflow-hidden p-6">
          <KidAnalytics />
          <ParentsAnalytics />
        </div>
      ) : (
        <SyncWithGoogle onSignIn={() => setSignIn(true)} />
      )}
    </>
  )
}

function IndexPopup() {
  return (
      <Popup />
  )
}

export default IndexPopup
