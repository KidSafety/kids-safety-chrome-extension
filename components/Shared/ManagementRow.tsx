import { useMutation } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useState } from "react"
import { toast } from "react-toastify"

import UnlockedConfirmation from "~components/Models/UnlockedConfirmation"
import UnlockWebsiteModel from "~components/Models/UnlockWebsiteModel"
import whiteListService from "~lib/blacklink/WhiteListService"
import type { IDialogMode } from "~lib/types/blacklist"

type IManagementRowProps = {
  url: string
  isBlocked: boolean
  timeStamp: string
  isBorder: boolean
}

function ManagementRow({
  timeStamp,
  isBlocked,
  url,
  isBorder
}: Readonly<IManagementRowProps>) {
  const [mode, setMode] = useState<IDialogMode>("unlock")
  const [openModel, setOpenModel] = useState(false)
  const [selectedUrl, setSelectedUrl] = useState("")
  const [unlockConfirmation, setUnlockConfirmation] = useState(false)

  const addWhiteListMutation = useMutation({
    mutationFn: async (url: string) => whiteListService.addWhiteList(url),
    onSuccess: () => {
      toast.success("Successfully added to whitelist")
    }
  })

  const handleUnlock = (url: string) => {
    setMode("unlock")
    setSelectedUrl(url)
    setOpenModel(true)
  }

  const handleBlock = (url: string) => {
    setMode("block")
    setSelectedUrl(url)
    setOpenModel(true)
  }

  const handleWhiteList = (url: string) => {
    setMode("whitelist")
    setSelectedUrl(url)
    setOpenModel(true)
    setSelectedUrl(url)
  }

  return (
    <>
      <div
        className={`w-full grid grid-cols-[.5fr,3fr,2fr,2fr,2fr] px-3 ${isBorder && "border-b-[1px] border-[#D1E3FE]"}`}>
        <div className="flex justify-start item-center py-4">
          <input
            className="w-[20px] h-[20px] -mb-[5px] cursor-pointer bg-[#194494] text-[#194494] checked:bg-[#194494]"
            type="checkbox"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-start py-4 mr-4 overflow-x-scroll text-nowrap">
          <p className="text-blue-600">{url}</p>
        </div>
        <div className="flex justify-start item-center py-4">
          <p className="text-[16px] text-[#333333] text-left">
            {isBlocked ? "Blocked" : "Whitelisted"}
          </p>
        </div>
        <div className="flex justify-start item-center py-4">
          <p className="text-[16px] text-[#333333] text-left">
            {" "}
            {dayjs(timeStamp).format("YYYY/MM/DD HH:mm:ss")}
          </p>
        </div>
        <div className="flex justify-start item-center py-4 gap-3">
          {isBlocked && (
            <button
              disabled={addWhiteListMutation.isPending}
              onClick={() => handleUnlock(url)}
              className="text-sm text-[#F75555]">
              Unblock
            </button>
          )}

          {!isBlocked && (
            <button
              disabled={addWhiteListMutation.isPending}
              onClick={() => handleBlock(url)}
              className="text-sm text-[#F75555]">
              Block
            </button>
          )}

          <button
            disabled={addWhiteListMutation.isPending}
            onClick={() => handleWhiteList(url)}
            className="text-sm text-blue-400">
            Whitelist
          </button>
        </div>
      </div>
      {openModel && (
        <UnlockWebsiteModel
          mode={mode}
          url={selectedUrl}
          onClose={() => {
            setOpenModel(false)
          }}
          onConfrim={() => {
            setUnlockConfirmation(true)
            setOpenModel(false)
          }}
        />
      )}
      {unlockConfirmation && (
        <UnlockedConfirmation
          mode={mode}
          onClose={() => {
            setUnlockConfirmation(false)
          }}
        />
      )}
    </>
  )
}

export default ManagementRow
