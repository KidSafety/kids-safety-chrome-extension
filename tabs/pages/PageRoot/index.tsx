import { Route, Routes } from "react-router-dom"

import Welcome from "../Welcome/Welcome"

function PageRoot() {
  return (
    <Routes>
      <Route path="/*" element={<Welcome />} />
    </Routes>
  )
}

export default PageRoot
