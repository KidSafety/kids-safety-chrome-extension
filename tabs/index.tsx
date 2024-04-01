import "../style.css"

import { ClerkProvider } from "@clerk/clerk-react"
import { useState } from "react"
import { Route, MemoryRouter as Router, Routes } from "react-router-dom"

import SideNavigation from "~components/SideNavigation"
import TopNavigation from "~components/TopNavigation"
import { CLERK_PUBLISHABLE_KEY } from "~lib/env"
import Welcome from "~tabs/pages/Welcome/Welcome"

import PageRoot from "./pages/PageRoot"

export default function NewTabRouter() {
  const [isCollapseNavigation, setIsCollapseNavigation] = useState(false)

  return (
    <Router>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <div
          className={`w-full grid ${
            isCollapseNavigation
              ? "grid-cols-[80px,calc(100%-80px)]"
              : "grid-cols-[260px,calc(100%-260px)]"
          }`}>
          <SideNavigation
            isCollapseNavigation={isCollapseNavigation}
            toggleView={() => setIsCollapseNavigation(!isCollapseNavigation)}
          />
          <div>
            <TopNavigation />
            <Routes>
              <Route path="/*" element={<Welcome />} />
              <Route path="/root/*" element={<PageRoot />} />
            </Routes>
          </div>
        </div>
      </ClerkProvider>
    </Router>
  )
}
