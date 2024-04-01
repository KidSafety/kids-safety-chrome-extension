import "../style.css"

import { useState } from "react"
import { Route, MemoryRouter as Router, Routes } from "react-router-dom"

import SideNavigation from "~components/SideNavigation"
import TopNavigation from "~components/TopNavigation"
import Welcome from "~tabs/pages/Welcome/Welcome"

import PageRoot from "./pages/PageRoot"

export default function NewTabRouter() {
  const [isCollapseNavigation, setIsCollapseNavigation] = useState(false)

  return (
    <Router>
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
    </Router>
  )
}
