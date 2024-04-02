import "../style.css"

import { useEffect, useState } from "react"
import { Route, MemoryRouter as Router, Routes } from "react-router-dom"

import authService from "~lib/auth"
import Welcome from "~tabs/pages/Welcome/Welcome"

import PageRoot from "./pages/PageRoot"

export default function NewTabRouter() {
  const [signIn, setSignIn] = useState(false)

  useEffect(() => {
    chrome.identity.getProfileUserInfo(function (userInfo) {
      if (userInfo) {
        authService.generateUser(userInfo).then(() => {
          setSignIn(true)
        })
      } else {
        setSignIn(false)
      }
    })
  }, [])

  const renderContent = () => {
    if (signIn) return <PageRoot />
    return <Welcome />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={renderContent()} />
        <Route path="/root/*" element={<PageRoot />} />
      </Routes>
    </Router>
  )
}
