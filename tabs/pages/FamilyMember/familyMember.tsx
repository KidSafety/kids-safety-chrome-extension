import hannah from "data-base64:~assets/Hannah Hopper.png"
import Idress from "data-base64:~assets/Idress Hopper.png"
import React, { Fragment } from "react"

import AddChildModel from "~components/Models/AddChildModel"
import ChildAddConfirmModel from "~components/Models/ChildAddConfirmModel"

const profiles = [
  {
    name: "Sarah Hopper",
    src: hannah
  },
  {
    name: "Sarah Hopper",
    src: Idress
  },
  {
    name: "Sarah Hopper",
    src: hannah
  }
]

function FamilyMemberPage() {
  const [addChildModel, setAddChildModel] = React.useState(false)
  const [addChildConfirmationModel, setAddChildConfirmationModel] =
    React.useState(false)
  return (
    <Fragment>
      <div className="w-full min-h-[calc(100%-68px)] bg-[#EEF2F8] px-5 py-8">
        <h1 className="capitalize text-[#0B0B0C] text-[30px] font-semibold">
          Family Member
        </h1>
        <div className="bg-white w-full rounded-lg p-16 flex justify-center items-center flex-col">
          <h2 className="text-[26px] font-semibold text-[#0B0B0C]">
            Manage your Child’s Profile
          </h2>
          <div className="w-full grid grid-cols-4 gap-8 mt-8 group">
            {profiles?.map((pro: any, index: number) => {
              return (
                <div key={index} className="relative w-full">
                  <img
                    src={pro?.src}
                    alt={pro?.name}
                    className="object-cover rounded-lg overflow-hidden w-full"
                  />
                  <h2 className="text-[20px] font-medium text-[#5A5A5A] text-center mt-3">
                    {pro?.name}
                  </h2>
                  {/* Actions Button */}
                  <div className="flex justify-center items-center gap-3 absolute top-3 right-3">
                    <button className="w-[23px] h-[23px] flex justify-center items-center bg-white rounded-full hover:bg-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.96003 1.98682H9.93325M1.98682 3.97342H13.9065M12.5821 3.97342L12.1177 10.9393C12.048 11.9844 12.0131 12.507 11.7874 12.9032C11.5887 13.2521 11.2889 13.5325 10.9277 13.7076C10.5173 13.9065 9.99357 13.9065 8.94613 13.9065H6.94715C5.89971 13.9065 5.37599 13.9065 4.96563 13.7076C4.60434 13.5325 4.30458 13.2521 4.10585 12.9032C3.88013 12.507 3.84529 11.9844 3.77561 10.9393L3.31122 3.97342M6.62223 6.95333V10.2643M9.27104 6.95333V10.2643"
                          stroke="#F75555"
                          strokeWidth="1.58929"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="w-[23px] h-[23px] flex justify-center items-center bg-white rounded-full hover:bg-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.91513 12.5818H3.31122V11.9715L9.31078 5.97194L9.92061 6.58177L3.91513 12.5818ZM4.56278 13.8068C4.50319 13.8731 4.4171 13.9062 4.33101 13.9062H2.31792C2.1325 13.9062 1.98682 13.7605 1.98682 13.5751V11.562C1.98682 11.4693 2.01993 11.3898 2.08615 11.3236L9.31078 4.09894L11.794 6.5822L11.7935 6.58272L4.56278 13.8068ZM10.0193 3.39039L12.5026 5.87365L13.7144 4.66182C13.9727 4.40356 13.9727 3.98637 13.7144 3.72811L12.1649 2.17856C11.9066 1.9203 11.4894 1.9203 11.2312 2.17856L10.0193 3.39039Z"
                          fill="#194494"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
            <button
              onClick={() => setAddChildModel(true)}
              className="relative w-full">
              <div className="flex w-full h-[159.95px] justify-center items-center">
                <svg
                  width="82"
                  height="82"
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M41 0.51709C30.3651 0.646129 20.2022 4.92817 12.6816 12.4487C5.16108 19.9693 0.879039 30.1322 0.75 40.7671C0.879039 51.402 5.16108 61.5649 12.6816 69.0855C20.2022 76.606 30.3651 80.8881 41 81.0171C51.6349 80.8881 61.7978 76.606 69.3184 69.0855C76.8389 61.5649 81.121 51.402 81.25 40.7671C81.121 30.1322 76.8389 19.9693 69.3184 12.4487C61.7978 4.92817 51.6349 0.646129 41 0.51709ZM64 43.6421H43.875V63.7671H38.125V43.6421H18V37.8921H38.125V17.7671H43.875V37.8921H64V43.6421Z"
                    fill="#A0ABBB"
                  />
                </svg>
              </div>
              <h2 className="text-[20px] font-semibold text-[#999999] text-center mt-3">
                Add Child
              </h2>
            </button>
          </div>
        </div>
      </div>

      {/* Add Child Model */}
      {addChildModel && (
        <AddChildModel
          onClose={() => setAddChildModel(false)}
          onSuccess={() => {
            setAddChildConfirmationModel(true)
            setAddChildModel(false)
          }}
        />
      )}

      {/* Added Confirmation */}
      {addChildConfirmationModel && (
        <ChildAddConfirmModel
          onClose={() => setAddChildConfirmationModel(false)}
        />
      )}
    </Fragment>
  )
}

export default FamilyMemberPage
