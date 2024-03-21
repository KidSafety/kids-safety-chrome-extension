import logo from "data-base64:~assets/logo.png"
import React, { Fragment } from "react"
import { Link, useLocation } from "react-router-dom"

interface props {
  isCollapseNavigation: boolean
  toggleView: () => void
}

function SideNavigation({ isCollapseNavigation, toggleView }: props) {
  const location = useLocation()
  return (
    <Fragment>
      {isCollapseNavigation ? (
        <div className="flex justify-start items-center flex-col min-h-screen h-full border-[1px] border-[#F4F4F4]">
          <button
            onClick={toggleView}
            className="w-full h-[68px] flex justify-center items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 10H17.5"
                stroke="#D0D1D2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 5H17.5"
                stroke="#D0D1D2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 15H17.5"
                stroke="#D0D1D2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="mt-8 w-[46px] p-[2px] rounded-[15px] overflow-hidden flex justify-center gap-2 items-center flex-col bg-[#F8F9FE]">
            <Link
              to={"/dashboard"}
              className={`w-full h-[46px] rounded-[15px] flex justify-center items-center ${location?.pathname === "/dashboard" ? "bg-white border-[1px] border-[#F2F2F7] shadow-buttonShadow" : "bg-[#F8F9FE] border-[1px] border-[#F8F9FE]"}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.78121 3H3.09371C2.49061 3 2 3.49061 2 4.09371V6.90621C2 7.50943 2.49061 8.00004 3.09371 8.00004H7.78121C8.38443 8.00004 8.87504 7.50943 8.87504 6.90621V4.09371C8.87504 3.49061 8.38443 3 7.78121 3ZM7.78121 9.24996H3.09371C2.49061 9.24996 2 9.74057 2 10.3438V16.9063C2 17.5094 2.49061 18 3.09371 18H7.78121C8.38443 18 8.87504 17.5094 8.87504 16.9063V10.3438C8.87504 9.74057 8.38443 9.24996 7.78121 9.24996ZM15.9063 13H11.2188C10.6156 13 10.125 13.4906 10.125 14.0938V16.9063C10.125 17.5094 10.6156 18 11.2188 18H15.9063C16.5094 18 17 17.5094 17 16.9063V14.0938C17 13.4906 16.5094 13 15.9063 13ZM15.9063 3H11.2188C10.6156 3 10.125 3.49061 10.125 4.09371V10.6562C10.125 11.2594 10.6156 11.75 11.2188 11.75H15.9063C16.5094 11.75 17 11.2594 17 10.6562V4.09371C17 3.49061 16.5094 3 15.9063 3Z"
                  fill={
                    location?.pathname === "/dashboard" ? "#194494" : "#CCCCCC"
                  }
                />
              </svg>
            </Link>
            <Link
              to={"/settings"}
              className={`w-full h-[46px] rounded-[15px] flex justify-center items-center ${location?.pathname === "/settings" ? "bg-white border-[1px] border-[#F2F2F7] shadow-buttonShadow" : "bg-[#F8F9FE] border-[1px] border-[#F8F9FE]"}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.105 8.01789C15.8132 7.97551 15.5348 7.86786 15.2904 7.70295C15.046 7.53804 14.842 7.32013 14.6935 7.06544C14.545 6.81074 14.4559 6.52583 14.4328 6.23192C14.4097 5.93801 14.4532 5.64267 14.56 5.36789C14.6279 5.18826 14.6379 4.99187 14.5886 4.80626C14.5393 4.62065 14.4331 4.45512 14.285 4.33289C13.631 3.78373 12.8866 3.35232 12.085 3.05789C11.9025 2.99009 11.7032 2.98161 11.5155 3.03368C11.3279 3.08576 11.1615 3.19571 11.04 3.34789C10.8571 3.58172 10.6234 3.77084 10.3566 3.9009C10.0898 4.03096 9.79684 4.09856 9.50001 4.09856C9.20317 4.09856 8.91023 4.03096 8.6434 3.9009C8.37657 3.77084 8.14287 3.58172 7.96001 3.34789C7.83852 3.19571 7.6721 3.08576 7.48446 3.03368C7.29683 2.98161 7.09755 2.99009 6.91501 3.05789C6.17484 3.32972 5.4828 3.71793 4.86501 4.20789C4.70928 4.33118 4.59711 4.50108 4.54493 4.69272C4.49274 4.88436 4.50329 5.08768 4.57501 5.27289C4.69039 5.55494 4.73806 5.8601 4.71419 6.16389C4.69033 6.46769 4.59561 6.76166 4.43761 7.02223C4.27961 7.28281 4.06275 7.50272 3.80441 7.66434C3.54607 7.82596 3.25344 7.92479 2.95001 7.95289C2.75301 7.97395 2.56799 8.05771 2.42217 8.19183C2.27635 8.32595 2.17744 8.50334 2.14001 8.69789C2.04691 9.15874 2.00001 9.62773 2.00001 10.0979C1.99933 10.4915 2.0311 10.8845 2.09501 11.2729C2.12682 11.4737 2.22388 11.6584 2.3712 11.7985C2.51852 11.9386 2.70788 12.0262 2.91001 12.0479C3.22011 12.077 3.51872 12.1799 3.78086 12.3481C4.043 12.5163 4.26104 12.7449 4.41672 13.0146C4.57241 13.2844 4.66121 13.5875 4.6757 13.8986C4.69019 14.2098 4.62995 14.5198 4.50001 14.8029C4.41497 14.987 4.39388 15.1943 4.44008 15.3917C4.48628 15.5892 4.59712 15.7656 4.75501 15.8929C5.40507 16.4321 6.14229 16.8565 6.93501 17.1479C7.03638 17.183 7.14274 17.2016 7.25001 17.2029C7.39709 17.2026 7.54196 17.167 7.67245 17.0991C7.80295 17.0313 7.91527 16.9331 8.00001 16.8129C8.17821 16.5532 8.4171 16.341 8.69592 16.1946C8.97475 16.0482 9.28509 15.9721 9.60001 15.9729C9.90513 15.9733 10.206 16.0449 10.4785 16.182C10.7511 16.3192 10.9879 16.5181 11.17 16.7629C11.2912 16.9257 11.4628 17.044 11.6581 17.0991C11.8535 17.1543 12.0616 17.1433 12.25 17.0679C12.9748 16.7762 13.6497 16.373 14.25 15.8729C14.4008 15.7482 14.5082 15.5789 14.5567 15.3893C14.6052 15.1998 14.5924 14.9997 14.52 14.8179C14.4024 14.5395 14.3511 14.2375 14.3702 13.9359C14.3893 13.6343 14.4783 13.3412 14.63 13.0799C14.7818 12.8185 14.9922 12.596 15.2447 12.4299C15.4973 12.2639 15.7849 12.1587 16.085 12.1229C16.2796 12.096 16.4606 12.0078 16.6017 11.8712C16.7428 11.7345 16.8368 11.5565 16.87 11.3629C16.9503 10.9458 16.9938 10.5225 17 10.0979C17.0001 9.64996 16.9582 9.20301 16.875 8.76289C16.8412 8.57354 16.7487 8.39964 16.6104 8.2659C16.4722 8.13216 16.2954 8.04538 16.105 8.01789ZM12 10.0979C12 10.5923 11.8534 11.0757 11.5787 11.4868C11.304 11.8979 10.9135 12.2184 10.4567 12.4076C9.9999 12.5968 9.49723 12.6463 9.01228 12.5498C8.52733 12.4534 8.08187 12.2153 7.73224 11.8657C7.38261 11.516 7.14451 11.0706 7.04804 10.5856C6.95158 10.1007 7.00109 9.598 7.19031 9.14118C7.37953 8.68437 7.69996 8.29392 8.11108 8.01922C8.5222 7.74451 9.00555 7.59789 9.50001 7.59789C10.163 7.59789 10.7989 7.86128 11.2678 8.33012C11.7366 8.79896 12 9.43485 12 10.0979Z"
                  fill={
                    location?.pathname === "/settings" ? "#194494" : "#CCCCCC"
                  }
                />
              </svg>
            </Link>
            <Link
              to={"/familyMember"}
              className={`w-full h-[46px] rounded-[15px] flex justify-center items-center ${location?.pathname === "/familyMember" ? "bg-white border-[1px] border-[#F2F2F7] shadow-buttonShadow" : "bg-[#F8F9FE] border-[1px] border-[#F8F9FE]"}`}>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.28687 5.64921C5.69254 6.09005 4.9727 6.32907 4.23273 6.33127C3.46259 6.33127 2.75603 6.07301 2.17793 5.64921C1.68128 6.06308 1.18596 6.65575 0.780695 7.38615C-0.161612 9.08336 -0.265577 10.8243 0.548926 11.2759C0.91181 11.4825 1.29456 11.3275 1.68923 10.9474C1.61534 11.357 1.57833 11.7723 1.57864 12.1884C1.57864 14.1339 2.33355 15.706 3.26261 15.706C3.82283 15.706 4.10029 15.1332 4.23339 14.2571C4.36583 15.1272 4.64395 15.706 5.2002 15.706C6.12529 15.706 6.88616 14.1333 6.88616 12.1884C6.88616 11.7514 6.8451 11.3342 6.77491 10.9481C7.17223 11.3289 7.55365 11.4865 7.91786 11.2772C8.73038 10.8256 8.62509 9.08535 7.68344 7.38748C7.2795 6.65641 6.78285 6.0644 6.28621 5.65053L6.28687 5.64921ZM4.23207 5.66907C4.6043 5.66894 4.97287 5.5955 5.31672 5.45293C5.66057 5.31036 5.97298 5.10146 6.2361 4.83815C6.49922 4.57485 6.7079 4.2623 6.85023 3.91835C6.99255 3.5744 7.06574 3.20578 7.06561 2.83354C7.06548 2.46131 6.99203 2.09274 6.84947 1.74889C6.7069 1.40504 6.498 1.09263 6.23469 0.829514C5.97139 0.566396 5.65884 0.357715 5.31489 0.215386C4.97094 0.073058 4.60232 -0.000130273 4.23008 1.74069e-07C3.47814 0.000263628 2.7571 0.299224 2.22558 0.831113C1.69407 1.363 1.39561 2.08425 1.39588 2.83619C1.39614 3.58813 1.6951 4.30917 2.22699 4.84069C2.75888 5.37221 3.48013 5.67066 4.23207 5.6704V5.66907ZM11.2957 9.29129C12.2943 9.29129 13.1049 8.48076 13.1049 7.48084C13.1049 6.48093 12.293 5.66907 11.2951 5.66907C10.8146 5.66925 10.3539 5.86019 10.0141 6.19992C9.67441 6.53966 9.48347 7.00039 9.48329 7.48084C9.48365 7.9613 9.67475 8.42196 10.0146 8.76157C10.3545 9.10118 10.8153 9.29129 11.2957 9.29129ZM13.5008 10.3886C13.2426 9.9217 12.9261 9.54293 12.6082 9.27805C12.2374 9.54955 11.7871 9.7151 11.2951 9.7151C10.8024 9.7151 10.3508 9.54955 9.98193 9.27805C9.66407 9.54293 9.34754 9.9217 9.08796 10.3886C8.48536 11.4732 8.41914 12.5857 8.93963 12.8744C9.1714 13.0069 9.41641 12.9076 9.66805 12.6652C9.622 12.9269 9.59896 13.1921 9.59918 13.4578C9.59918 14.7028 10.0813 15.7073 10.6753 15.7073C11.0328 15.7073 11.2116 15.3411 11.2964 14.7816C11.3812 15.3378 11.5586 15.7067 11.9149 15.7067C12.5062 15.7067 12.9923 14.7014 12.9923 13.4578C12.9923 13.1797 12.9658 12.9122 12.9208 12.6659C13.1744 12.9089 13.4187 13.0102 13.6518 12.8758C14.1697 12.5884 14.1021 11.4752 13.5008 10.3905V10.3886Z"
                  fill={
                    location?.pathname === "/familyMember"
                      ? "#194494"
                      : "#CCCCCC"
                  }
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-4 flex justify-start items-center flex-col min-h-screen h-full border-[1px] border-[#F4F4F4]">
          {/* Logo */}
          <img
            onClick={toggleView}
            src={logo}
            alt="Logo"
            className="w-[125px] cursor-pointer"
          />
          {/* NavItems */}
          <div className="w-full mt-8 flex justify-center items-center flex-col gap-2">
            <Link
              to={"/dashboard"}
              className={`w-full h-[46px] rounded-lg overflow-hidden flex justify-start gap-2 text-sm items-center px-3 ${location?.pathname === "/dashboard" ? "text-white bg-[#194494]" : "text-[#666666] bg-white"}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.78121 3H3.09371C2.49061 3 2 3.49061 2 4.09371V6.90621C2 7.50943 2.49061 8.00004 3.09371 8.00004H7.78121C8.38443 8.00004 8.87504 7.50943 8.87504 6.90621V4.09371C8.87504 3.49061 8.38443 3 7.78121 3ZM7.78121 9.24996H3.09371C2.49061 9.24996 2 9.74057 2 10.3438V16.9063C2 17.5094 2.49061 18 3.09371 18H7.78121C8.38443 18 8.87504 17.5094 8.87504 16.9063V10.3438C8.87504 9.74057 8.38443 9.24996 7.78121 9.24996ZM15.9063 13H11.2188C10.6156 13 10.125 13.4906 10.125 14.0938V16.9063C10.125 17.5094 10.6156 18 11.2188 18H15.9063C16.5094 18 17 17.5094 17 16.9063V14.0938C17 13.4906 16.5094 13 15.9063 13ZM15.9063 3H11.2188C10.6156 3 10.125 3.49061 10.125 4.09371V10.6562C10.125 11.2594 10.6156 11.75 11.2188 11.75H15.9063C16.5094 11.75 17 11.2594 17 10.6562V4.09371C17 3.49061 16.5094 3 15.9063 3Z"
                  fill={
                    location?.pathname === "/dashboard" ? "#FFFFFF" : "#999999"
                  }
                />
              </svg>
              Dashboard
            </Link>
            <Link
              to={"/settings"}
              className={`w-full h-[46px] capitalize rounded-lg overflow-hidden flex justify-start gap-2 text-sm items-center px-3 ${location?.pathname === "/settings" ? "text-white bg-[#194494]" : "text-[#666666] bg-white"}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.105 8.01789C15.8132 7.97551 15.5348 7.86786 15.2904 7.70295C15.046 7.53804 14.842 7.32013 14.6935 7.06544C14.545 6.81074 14.4559 6.52583 14.4328 6.23192C14.4097 5.93801 14.4532 5.64267 14.56 5.36789C14.6279 5.18826 14.6379 4.99187 14.5886 4.80626C14.5393 4.62065 14.4331 4.45512 14.285 4.33289C13.631 3.78373 12.8866 3.35232 12.085 3.05789C11.9025 2.99009 11.7032 2.98161 11.5155 3.03368C11.3279 3.08576 11.1615 3.19571 11.04 3.34789C10.8571 3.58172 10.6234 3.77084 10.3566 3.9009C10.0898 4.03096 9.79684 4.09856 9.50001 4.09856C9.20317 4.09856 8.91023 4.03096 8.6434 3.9009C8.37657 3.77084 8.14287 3.58172 7.96001 3.34789C7.83852 3.19571 7.6721 3.08576 7.48446 3.03368C7.29683 2.98161 7.09755 2.99009 6.91501 3.05789C6.17484 3.32972 5.4828 3.71793 4.86501 4.20789C4.70928 4.33118 4.59711 4.50108 4.54493 4.69272C4.49274 4.88436 4.50329 5.08768 4.57501 5.27289C4.69039 5.55494 4.73806 5.8601 4.71419 6.16389C4.69033 6.46769 4.59561 6.76166 4.43761 7.02223C4.27961 7.28281 4.06275 7.50272 3.80441 7.66434C3.54607 7.82596 3.25344 7.92479 2.95001 7.95289C2.75301 7.97395 2.56799 8.05771 2.42217 8.19183C2.27635 8.32595 2.17744 8.50334 2.14001 8.69789C2.04691 9.15874 2.00001 9.62773 2.00001 10.0979C1.99933 10.4915 2.0311 10.8845 2.09501 11.2729C2.12682 11.4737 2.22388 11.6584 2.3712 11.7985C2.51852 11.9386 2.70788 12.0262 2.91001 12.0479C3.22011 12.077 3.51872 12.1799 3.78086 12.3481C4.043 12.5163 4.26104 12.7449 4.41672 13.0146C4.57241 13.2844 4.66121 13.5875 4.6757 13.8986C4.69019 14.2098 4.62995 14.5198 4.50001 14.8029C4.41497 14.987 4.39388 15.1943 4.44008 15.3917C4.48628 15.5892 4.59712 15.7656 4.75501 15.8929C5.40507 16.4321 6.14229 16.8565 6.93501 17.1479C7.03638 17.183 7.14274 17.2016 7.25001 17.2029C7.39709 17.2026 7.54196 17.167 7.67245 17.0991C7.80295 17.0313 7.91527 16.9331 8.00001 16.8129C8.17821 16.5532 8.4171 16.341 8.69592 16.1946C8.97475 16.0482 9.28509 15.9721 9.60001 15.9729C9.90513 15.9733 10.206 16.0449 10.4785 16.182C10.7511 16.3192 10.9879 16.5181 11.17 16.7629C11.2912 16.9257 11.4628 17.044 11.6581 17.0991C11.8535 17.1543 12.0616 17.1433 12.25 17.0679C12.9748 16.7762 13.6497 16.373 14.25 15.8729C14.4008 15.7482 14.5082 15.5789 14.5567 15.3893C14.6052 15.1998 14.5924 14.9997 14.52 14.8179C14.4024 14.5395 14.3511 14.2375 14.3702 13.9359C14.3893 13.6343 14.4783 13.3412 14.63 13.0799C14.7818 12.8185 14.9922 12.596 15.2447 12.4299C15.4973 12.2639 15.7849 12.1587 16.085 12.1229C16.2796 12.096 16.4606 12.0078 16.6017 11.8712C16.7428 11.7345 16.8368 11.5565 16.87 11.3629C16.9503 10.9458 16.9938 10.5225 17 10.0979C17.0001 9.64996 16.9582 9.20301 16.875 8.76289C16.8412 8.57354 16.7487 8.39964 16.6104 8.2659C16.4722 8.13216 16.2954 8.04538 16.105 8.01789ZM12 10.0979C12 10.5923 11.8534 11.0757 11.5787 11.4868C11.304 11.8979 10.9135 12.2184 10.4567 12.4076C9.9999 12.5968 9.49723 12.6463 9.01228 12.5498C8.52733 12.4534 8.08187 12.2153 7.73224 11.8657C7.38261 11.516 7.14451 11.0706 7.04804 10.5856C6.95158 10.1007 7.00109 9.598 7.19031 9.14118C7.37953 8.68437 7.69996 8.29392 8.11108 8.01922C8.5222 7.74451 9.00555 7.59789 9.50001 7.59789C10.163 7.59789 10.7989 7.86128 11.2678 8.33012C11.7366 8.79896 12 9.43485 12 10.0979Z"
                  fill={
                    location?.pathname === "/settings" ? "#FFFFFF" : "#999999"
                  }
                />
              </svg>
              Settings
            </Link>
            <Link
              to={"/familyMember"}
              className={`w-full h-[46px] capitalize rounded-lg overflow-hidden flex justify-start gap-2 text-sm items-center px-3 ${location?.pathname === "/familyMember" ? "text-white bg-[#194494]" : "text-[#666666] bg-white"}`}>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.28687 5.64921C5.69254 6.09005 4.9727 6.32907 4.23273 6.33127C3.46259 6.33127 2.75603 6.07301 2.17793 5.64921C1.68128 6.06308 1.18596 6.65575 0.780695 7.38615C-0.161612 9.08336 -0.265577 10.8243 0.548926 11.2759C0.91181 11.4825 1.29456 11.3275 1.68923 10.9474C1.61534 11.357 1.57833 11.7723 1.57864 12.1884C1.57864 14.1339 2.33355 15.706 3.26261 15.706C3.82283 15.706 4.10029 15.1332 4.23339 14.2571C4.36583 15.1272 4.64395 15.706 5.2002 15.706C6.12529 15.706 6.88616 14.1333 6.88616 12.1884C6.88616 11.7514 6.8451 11.3342 6.77491 10.9481C7.17223 11.3289 7.55365 11.4865 7.91786 11.2772C8.73038 10.8256 8.62509 9.08535 7.68344 7.38748C7.2795 6.65641 6.78285 6.0644 6.28621 5.65053L6.28687 5.64921ZM4.23207 5.66907C4.6043 5.66894 4.97287 5.5955 5.31672 5.45293C5.66057 5.31036 5.97298 5.10146 6.2361 4.83815C6.49922 4.57485 6.7079 4.2623 6.85023 3.91835C6.99255 3.5744 7.06574 3.20578 7.06561 2.83354C7.06548 2.46131 6.99203 2.09274 6.84947 1.74889C6.7069 1.40504 6.498 1.09263 6.23469 0.829514C5.97139 0.566396 5.65884 0.357715 5.31489 0.215386C4.97094 0.073058 4.60232 -0.000130273 4.23008 1.74069e-07C3.47814 0.000263628 2.7571 0.299224 2.22558 0.831113C1.69407 1.363 1.39561 2.08425 1.39588 2.83619C1.39614 3.58813 1.6951 4.30917 2.22699 4.84069C2.75888 5.37221 3.48013 5.67066 4.23207 5.6704V5.66907ZM11.2957 9.29129C12.2943 9.29129 13.1049 8.48076 13.1049 7.48084C13.1049 6.48093 12.293 5.66907 11.2951 5.66907C10.8146 5.66925 10.3539 5.86019 10.0141 6.19992C9.67441 6.53966 9.48347 7.00039 9.48329 7.48084C9.48365 7.9613 9.67475 8.42196 10.0146 8.76157C10.3545 9.10118 10.8153 9.29129 11.2957 9.29129ZM13.5008 10.3886C13.2426 9.9217 12.9261 9.54293 12.6082 9.27805C12.2374 9.54955 11.7871 9.7151 11.2951 9.7151C10.8024 9.7151 10.3508 9.54955 9.98193 9.27805C9.66407 9.54293 9.34754 9.9217 9.08796 10.3886C8.48536 11.4732 8.41914 12.5857 8.93963 12.8744C9.1714 13.0069 9.41641 12.9076 9.66805 12.6652C9.622 12.9269 9.59896 13.1921 9.59918 13.4578C9.59918 14.7028 10.0813 15.7073 10.6753 15.7073C11.0328 15.7073 11.2116 15.3411 11.2964 14.7816C11.3812 15.3378 11.5586 15.7067 11.9149 15.7067C12.5062 15.7067 12.9923 14.7014 12.9923 13.4578C12.9923 13.1797 12.9658 12.9122 12.9208 12.6659C13.1744 12.9089 13.4187 13.0102 13.6518 12.8758C14.1697 12.5884 14.1021 11.4752 13.5008 10.3905V10.3886Z"
                  fill={
                    location?.pathname === "/familyMember"
                      ? "#FFFFFF"
                      : "#999999"
                  }
                />
              </svg>
              Family Member
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default SideNavigation
