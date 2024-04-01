import { useState } from "react"

import "./style.css"

import { ClerkProvider } from "@clerk/clerk-react"

import KidAnalytics from "~components/KidAnalytics"
import ParentsAnalytics from "~components/ParentsAnalytics"
import SyncWithGoogle from "~components/SyncWithGoogle"
import { CLERK_PUBLISHABLE_KEY } from "~lib/env"

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
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Popup />
    </ClerkProvider>
  )
}

export default IndexPopup
