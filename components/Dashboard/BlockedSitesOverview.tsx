import { ResponsivePie } from "@nivo/pie"
import React from "react"

type Props = {}

const data = [
  {
    id: "Adult Content",
    label: "Adult Content",
    value: 165,
    color: "hsl(32, 70%, 50%)"
  },
  {
    id: "Violence",
    label: "Violence",
    value: 148
  },
  {
    id: "c",
    label: "c",
    value: 142
  },
  {
    id: "Social Media",
    label: "Social Media",
    value: 148
  },
  {
    id: "scala",
    label: "scala",
    value: 356
  }
]

function BlockedSitesOverview({}: Props) {
  return (
    <div className="p-4 w-full bg-white rounded-[12px] border-[1px] border-[#F4F4F4]">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[16px] font-medium text-[#0B0B0C]">
          Blocked Sites Overview
        </h3>
        <label className="flex items-center text-[12px] text-small text-black dark:text-white md:text-[14px]">
          <select className="px-3 py-2 border-[1px] border-[#999999] text-[#666666] rounded-md dark:text-white">
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
      </div>
      <div className="w-full h-[350px]">
        <ResponsivePie
          data={data}
          margin={{ top: 0, right: 130, bottom: 0, left: 15 }}
          innerRadius={0.6}
          activeOuterRadiusOffset={8}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]]
          }}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={true}
          arcLabelsRadiusOffset={0.5}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]]
          }}
          arcLabel={(arc) => `${arc?.data?.value}%`}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          colors={["#71AAFF", "#F3C474", "#9BC9E5", "#CF9AC8"]}
          legends={[
            {
              anchor: "right",
              direction: "column",
              justify: false,
              translateX: 130,
              translateY: 0,
              itemsSpacing: 1,
              itemWidth: 97,
              itemHeight: 30,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000"
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </div>
  )
}

export default BlockedSitesOverview
