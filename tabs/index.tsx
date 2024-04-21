import "../style.css"

import { useEffect, useState } from "react"
import { Route, MemoryRouter as Router, Routes } from "react-router-dom"

import authService from "~lib/auth"
import TanstackProvider from "~providers/TanstackProvider"
import Welcome from "~tabs/pages/Welcome/Welcome"

import PageRoot from "./pages/PageRoot"

export default function NewTabRouter() {
  const [signIn, setSignIn] = useState(false)

  // useEffect(() => {
  //   authService.getUser().then((user) => {
  //     if (user) {
  //       setSignIn(true)
  //     } else {
  //       setSignIn(false)
  //     }
  //   })
  // }, [])

  const renderContent = () => {
    if (signIn) return <PageRoot />
    return <Welcome />
  }

  return (
    <TanstackProvider>
      <Router>
        <Routes>
          <Route path="/" element={renderContent()} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/root/*" element={<PageRoot />} />
        </Routes>
      </Router>
    </TanstackProvider>
  )
}
