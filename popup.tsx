import KidAnalytics from "~components/KidAnalytics"
import ParentsAnalytics from "~components/ParentsAnalytics"

import "./style.css"

import { Fragment, useState } from "react"

import SyncWithGoogle from "~components/SyncWithGoogle"

function IndexPopup() {
  const [signIn, setSignIn] = useState(false)
  return (
    <Fragment>
      {signIn ? (
        <div className="min-w-[580px] rounded-[10px] w-full overflow-hidden p-6">
          <KidAnalytics />
          <ParentsAnalytics />
        </div>
      ) : (
        <SyncWithGoogle onSignIn={() => setSignIn(!signIn)} />
      )}
    </Fragment>
  )
}

export default IndexPopup
