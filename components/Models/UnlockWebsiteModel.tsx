import { useMutation } from "@tanstack/react-query"

import Alert from "~components/Icons/Alert"
import Cross from "~components/Icons/Cross"
import blackLinkService from "~lib/blacklink/BlackLinkService"
import whiteListService from "~lib/blacklink/WhiteListService"
import type { IDialogMode } from "~lib/types/blacklist"

interface IUnlockWebsiteModelProps {
  mode: IDialogMode
  url: string
  onClose: () => void
  onConfrim: () => void
}

function UnlockWebsiteModel({
  mode,
  url,
  onClose,
  onConfrim
}: Readonly<IUnlockWebsiteModelProps>) {
  const updateLinkMutation = useMutation({
    mutationFn: async (url: string) => {
      if (mode === "whitelist") {
        return whiteListService.addWhiteList(url)
      }
      return blackLinkService.removeCustomBlacklist(url)
    },
    onSuccess: () => {
      onConfrim()
    }
  })

  const handleUpdateLink = (url: string) => {
    updateLinkMutation.mutate(url)
  }

  const renderTitle = () => {
    let title = "Unlock"
    if (mode === "whitelist") {
      title = "Whitelist"
    }
    return `Are you sure you want to ${title} the`
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-full max-w-[519px]">
          {/*content*/}
          <div className="border-0 rounded-[10px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="w-full flex justify-end items-end p-4">
              <button onClick={onClose}>
                <Cross />
              </button>
            </div>
            {/* Body */}
            <div className="w-full flex justify-center items-center flex-col p-6 pt-2   ">
              <Alert />
              <h2 className="text-[20px] font-semibold text-[#333333] text-center mt-3 max-w-[360px]">
                {renderTitle()}
                <span className="text-[#1972F9] px-1">{url}</span> site?
              </h2>
            </div>
            <div className="flex justify-center items-center gap-4 px-6 pb-6">
              <button
                disabled={updateLinkMutation.isPending}
                onClick={onClose}
                className="w-[95px] h-[40px] flex justify-center items-center capitalize text-sm text-[#194494] border-[1px] border-[#194494] rounded-lg">
                Cancel
              </button>
              <button
                disabled={updateLinkMutation.isPending}
                onClick={() => handleUpdateLink(url)}
                className="w-[95px] h-[40px] flex justify-center items-center capitalize text-sm text-white bg-[#194494] border-[1px] border-[#194494] rounded-lg">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default UnlockWebsiteModel
