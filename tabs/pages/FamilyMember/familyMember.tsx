import hannah from "data-base64:~assets/Hannah Hopper.png"
import Idress from "data-base64:~assets/Idress Hopper.png"
import React, { Fragment } from "react"

import Delete from "~components/Icons/Delete"
import Edit from "~components/Icons/Edit"
import Plus from "~components/Icons/Plus"
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
                      <Delete />
                    </button>
                    <button className="w-[23px] h-[23px] flex justify-center items-center bg-white rounded-full hover:bg-gray-300">
                      <Edit />
                    </button>
                  </div>
                </div>
              )
            })}
            <button
              onClick={() => setAddChildModel(true)}
              className="relative w-full">
              <div className="flex w-full h-[159.95px] justify-center items-center">
                <Plus />
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
