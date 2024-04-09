import { useMutation } from "@tanstack/react-query"
import dayjs from "dayjs"
import React from "react"
import { toast } from "react-toastify"

import blackLinkService from "~lib/blacklink/BlackLinkService"
import whiteListService from "~lib/blacklink/WhiteListService"

type IManagementRowProps = {
  url: string
  type: string
  timeStamp: string
  isBorder: boolean
  onUnlock: (url: string) => void
}

function ManagementRow({
  timeStamp,
  type,
  url,
  isBorder,
  onUnlock
}: Readonly<IManagementRowProps>) {
  const addWhiteListMutation = useMutation({
    mutationFn: async (url: string) => whiteListService.addWhiteList(url),
    onSuccess: () => {
      toast.success("Successfully added to whitelist")
    }
  })

  const handleWhiteList = (url: string) => {
    addWhiteListMutation.mutate(url)
  }

  return (
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
      <div className="flex justify-start item-center py-4">{url}</div>
      <div className="flex justify-start item-center py-4">
        <p className="text-[16px] text-[#333333] text-left">{type}</p>
      </div>
      <div className="flex justify-start item-center py-4">
        <p className="text-[16px] text-[#333333] text-left">
          {" "}
          {dayjs(timeStamp).format("YYYY/MM/DD HH:mm:ss")}
        </p>
      </div>
      <div className="flex justify-start item-center py-4 gap-3">
        <button
          disabled={addWhiteListMutation.isPending}
          onClick={() => onUnlock(url)}
          className="text-sm text-[#F75555]">
          Unblock
        </button>
        <button
          disabled={addWhiteListMutation.isPending}
          onClick={() => handleWhiteList(url)}
          className="text-sm text-blue-400">
          Whitelist
        </button>
      </div>
    </div>
  )
}

export default ManagementRow
