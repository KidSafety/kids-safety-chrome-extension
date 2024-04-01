import logo from "data-base64:~assets/logo.png"
import { Fragment } from "react"
import { Link, useLocation } from "react-router-dom"

import DashboardIcon from "./Icons/DashboardIcon"
import FamilyMemberIcon from "./Icons/FamilyMember"
import SettingIcon from "./Icons/Setting"
import ToggleIcon from "./Icons/ToggleIcon"

interface ISideNavigationProps {
  isCollapseNavigation: boolean
  toggleView: () => void
}

function SideNavigation({
  isCollapseNavigation,
  toggleView
}: Readonly<ISideNavigationProps>) {
  const location = useLocation()
  console.log("location::", location?.pathname === "/root/dashboard")
  return (
    <Fragment>
      {isCollapseNavigation ? (
        <div className="flex justify-start items-center flex-col min-h-screen h-full border-[1px] border-[#F4F4F4]">
          <button
            onClick={toggleView}
            className="w-full h-[68px] flex justify-center items-center">
            <ToggleIcon />
          </button>
          <div className="mt-8 w-[46px] p-[2px] rounded-[15px] overflow-hidden flex justify-center gap-2 items-center flex-col bg-[#F8F9FE]">
            <Link
              to={"/root/dashboard"}
              className={`w-full h-[46px] rounded-[15px] flex justify-center items-center ${location?.pathname === "/dashboard" ? "bg-white border-[1px] border-[#F2F2F7] shadow-buttonShadow" : "bg-[#F8F9FE] border-[1px] border-[#F8F9FE]"}`}>
              <DashboardIcon pathname={location?.pathname} />
            </Link>
            <Link
              to={"/root/settings"}
              className={`w-full h-[46px] rounded-[15px] flex justify-center items-center ${location?.pathname === "/settings" ? "bg-white border-[1px] border-[#F2F2F7] shadow-buttonShadow" : "bg-[#F8F9FE] border-[1px] border-[#F8F9FE]"}`}>
              <SettingIcon pathname={location?.pathname} />
            </Link>
            <Link
              to={"/root/familyMember"}
              className={`w-full h-[46px] rounded-[15px] flex justify-center items-center ${location?.pathname === "/familyMember" ? "bg-white border-[1px] border-[#F2F2F7] shadow-buttonShadow" : "bg-[#F8F9FE] border-[1px] border-[#F8F9FE]"}`}>
              <FamilyMemberIcon pathname={location?.pathname} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-4 flex justify-start items-center flex-col min-h-screen h-full border-[1px] border-[#F4F4F4]">
          {/* Logo */}
          <button onClick={toggleView}>
            <img src={logo} alt="Logo" className="w-[125px] cursor-pointer" />
          </button>
          {/* NavItems */}
          <div className="w-full mt-8 flex justify-center items-center flex-col gap-2">
            <Link
              to={"/root/dashboard"}
              className={`w-full h-[46px] rounded-lg overflow-hidden flex justify-start gap-2 text-sm items-center px-3 ${location?.pathname === "/dashboard" ? "text-white bg-[#194494]" : "text-[#666666] bg-white"}`}>
              <DashboardIcon pathname={location?.pathname} />
              Dashboard
            </Link>
            <Link
              to={"/root/settings"}
              className={`w-full h-[46px] capitalize rounded-lg overflow-hidden flex justify-start gap-2 text-sm items-center px-3 ${location?.pathname === "/settings" ? "text-white bg-[#194494]" : "text-[#666666] bg-white"}`}>
              <SettingIcon pathname={location?.pathname} />
              Settings
            </Link>
            <Link
              to={"/root/familyMember"}
              className={`w-full h-[46px] capitalize rounded-lg overflow-hidden flex justify-start gap-2 text-sm items-center px-3 ${location?.pathname === "/familyMember" ? "text-white bg-[#194494]" : "text-[#666666] bg-white"}`}>
              <FamilyMemberIcon pathname={location?.pathname} />
              Family Member
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default SideNavigation
