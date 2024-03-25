import { ClerkProvider } from "@clerk/clerk-react"
import { Route, MemoryRouter as Router, Routes } from "react-router-dom"

import Welcome from "~tabs/pages/Welcome/Welcome"

import "../style.css"

import { useState } from "react"

import SideNavigation from "~components/SideNavigation"
import TopNavigation from "~components/TopNavigation"
import { CLERK_PUBLISHABLE_KEY } from "~lib/env"

import DashboardPage from "./pages/Dashboard/dashboard"
import FamilyMemberPage from "./pages/FamilyMember/familyMember"
import SettingsPage from "./pages/Settings/settings"

export default function NewTabRouter() {
  const [isCollapseNavigation, setIsCollapseNavigation] = useState(false)

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Router>
        <div
          className={`w-full grid ${isCollapseNavigation ? "grid-cols-[80px,calc(100%-80px)]" : "grid-cols-[260px,calc(100%-260px)]"}`}>
          <SideNavigation
            isCollapseNavigation={isCollapseNavigation}
            toggleView={() => setIsCollapseNavigation(!isCollapseNavigation)}
          />
          <div>
            <TopNavigation />
            <Routes>
              <Route path="/*" element={<Welcome />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/familyMember" element={<FamilyMemberPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ClerkProvider>
  )
}
