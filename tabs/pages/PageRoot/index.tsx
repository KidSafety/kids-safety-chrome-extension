import "../../../style.css"

import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import SideNavigation from "~components/SideNavigation"
import TopNavigation from "~components/TopNavigation"

import DashboardPage from "../Dashboard/dashboard"
import FamilyMemberPage from "../FamilyMember/familyMember"
import SettingsPage from "../Settings/settings"

function PageRoot() {
  const [isCollapseNavigation, setIsCollapseNavigation] = useState(false)
  return (
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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/familyMember" element={<FamilyMemberPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default PageRoot
