import React from "react"

type Props = {
  tabs: number
  setTabs: React.Dispatch<React.SetStateAction<number>>
}

function SettingsTabs({ tabs, setTabs }: Props) {
  return (
    <div className="w-full border-b-[1px] border-[#D7D7D7] flex justify-start items-center gap-4">
      <button
        onClick={() => setTabs(0)}
        className={`border-b-[1px] -mb-[1px] ${tabs === 0 ? "border-[#194494] font-semibold  text-[#194494]" : "border-[#D7D7D7] text-[#666666]"} h-[48px] px-2 whitespace-nowrap flex justify-center items-center gap-2 text-[18px]`}>
        History Monitoring
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.93154 1.15784L6.61654 5.76884C6.71876 5.86997 6.85675 5.92669 7.00054 5.92669C7.14433 5.92669 7.28232 5.86997 7.38454 5.76884L12.0695 1.15884C12.1724 1.05777 12.3108 1.00113 12.455 1.00113C12.5992 1.00113 12.7377 1.05777 12.8405 1.15884C12.8912 1.20822 12.9314 1.26724 12.9589 1.33241C12.9864 1.39759 13.0006 1.46761 13.0006 1.53834C13.0006 1.60908 12.9864 1.6791 12.9589 1.74427C12.9314 1.80945 12.8912 1.86847 12.8405 1.91784L8.15654 6.52784C7.84802 6.83077 7.43292 7.00049 7.00054 7.00049C6.56816 7.00049 6.15306 6.83077 5.84454 6.52784L1.16054 1.91784C1.10974 1.86845 1.06936 1.80937 1.04178 1.7441C1.01421 1.67883 1 1.6087 1 1.53784C1 1.46699 1.01421 1.39685 1.04178 1.33158C1.06936 1.26631 1.10974 1.20724 1.16054 1.15784C1.2634 1.05677 1.40183 1.00013 1.54604 1.00013C1.69025 1.00013 1.82869 1.05677 1.93154 1.15784Z"
            stroke={tabs === 0 ? "#194494" : "#D7D7D7"}
          />
        </svg>
      </button>
      <button
        onClick={() => setTabs(1)}
        className={`border-b-[1px] -mb-[1px] ${tabs === 1 ? "border-[#194494] font-semibold  text-[#194494]" : "border-[#D7D7D7] text-[#666666]"} h-[48px] px-2 whitespace-nowrap flex justify-center items-center gap-2 text-[18px]`}>
        Website Management
      </button>
      <button
        onClick={() => setTabs(2)}
        className={`border-b-[1px] -mb-[1px] ${tabs === 2 ? "border-[#194494] font-semibold  text-[#194494]" : "border-[#D7D7D7] text-[#666666]"} h-[48px] px-2 whitespace-nowrap flex justify-center items-center gap-2 text-[18px]`}>
        Security Settings
      </button>
    </div>
  )
}

export default SettingsTabs
