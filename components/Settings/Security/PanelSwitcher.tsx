import React from "react"

type Props = {
  panel: number
  setPanel: React.Dispatch<React.SetStateAction<number>>
}

function PanelSwitcher({ panel, setPanel }: Props) {
  return (
    <div className="h-[48px] p-1 flex justify-center items-center border-[1px] border-[#EDECEF] rounded-lg">
      <button
        onClick={() => setPanel(0)}
        className={`px-4 h-full rounded-md whitespace-normal ${panel === 0 ? "bg-[#E8F1FF] text-[#1972F9] " : "text-[#666666] bg-white"} text-sm capitalize font-medium`}>
        Change Password
      </button>
      <button
        onClick={() => setPanel(1)}
        className={`px-4 h-full rounded-md whitespace-normal ${panel === 1 ? "bg-[#E8F1FF] text-[#1972F9] " : "text-[#666666] bg-white"} text-sm capitalize font-medium`}>
        Notifications
      </button>
    </div>
  )
}

export default PanelSwitcher
