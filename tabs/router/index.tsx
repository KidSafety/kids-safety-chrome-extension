import { Route, MemoryRouter as Router, Routes } from "react-router-dom"

import Welcome from "~tabs/pages/Welcome/Welcome"

import PageRoot from "../pages/PageRoot"

export default function NewTabRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Welcome />} />
        <Route path="/root/*" element={<PageRoot />} />
      </Routes>
    </Router>
  )
}
