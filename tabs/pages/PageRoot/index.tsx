import { Route, Routes } from "react-router-dom"

import { ClerkProvider } from "@clerk/clerk-react"
import { CLERK_PUBLISHABLE_KEY } from "~lib/env"
import DashboardPage from "../Dashboard/dashboard"
import FamilyMemberPage from "../FamilyMember/familyMember"
import SettingsPage from "../Settings/settings"

function PageRoot() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/familyMember" element={<FamilyMemberPage />} />
      </Routes>
    </ClerkProvider>
  )
}

export default PageRoot
