import { useState } from "react"
import { useNavigate } from "react-router-dom"

import JoinFamilyModal from "~components/Models/JoinFamilyModal"
import SignInAsFamilyMember from "~components/Welcome/SignInAsFamilyMember"
import SignInWithGoogleIcon from "~components/Welcome/SignInWithGoogle"
import authService from "~lib/auth"

function WelcomePage() {
  const [showJoinFamilyModal, setShowJoinFamilyModal] = useState(false)
  const navigate = useNavigate()

  const handleContinue = () => {
    authService.getUser().then((user) => {
      if (user) navigate("/root/dashboard")
    })
  }

  const handleAsFamilyMember = () => {
    setShowJoinFamilyModal(true)
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                KidGuard <span className="text-blue-700">.</span>
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Your Shield{" "}
                  <span className="text-blue-700">Against Online Risks</span>{" "}
                  for Children
                </h1>
                <div className="w-20 h-2 bg-blue-700 my-4"></div>
                <p className="text-xl mb-10">
                  KidGuard acts as a vigilant guardian, empowering parents and
                  schools to protect young users from harmful online content.
                </p>
                <SignInWithGoogleIcon onClick={handleContinue} />
                <SignInAsFamilyMember onClick={handleAsFamilyMember} />
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1585314293966-b1d86e25636a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
          loading="lazy"
        />
      </div>
      {showJoinFamilyModal && (
        <JoinFamilyModal onClose={() => setShowJoinFamilyModal(false)} />
      )}
    </>
  )
}

export default WelcomePage
