import { Route, Routes } from "react-router-dom"
import DashboardPage from "../Dashboard/dashboard"
import FamilyMemberPage from "../FamilyMember/familyMember"
import SettingsPage from "../Settings/settings"


function PageRoot() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/familyMember" element={<FamilyMemberPage />} />
    </Routes>
  )
}

export default PageRoot
