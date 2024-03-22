import { ResponsiveBar } from "@nivo/bar"
import React from "react"

type Props = {}

const data = [
  {
    day: "Mon",
    "Website visited": 132,
    "Blocked sites": 20
  },
  {
    day: "Tues",
    "Website visited": 100,
    "Blocked sites": 30
  },
  {
    day: "Wed",
    "Website visited": 200,
    "Blocked sites": 60
  },
  {
    day: "Thur",
    "Website visited": 195,
    "Blocked sites": 68
  },
  {
    day: "Fri",
    "Website visited": 206,
    "Blocked sites": 50
  },
  {
    day: "Sat",
    "Website visited": 160,
    "Blocked sites": 60
  },
  {
    day: "Sun",
    "Website visited": 100,
    "Blocked sites": 60
  }
]

function WebsitesOverview({}: Props) {
  return (
    <div className="p-4 w-full bg-white rounded-[12px] border-[1px] border-[#F4F4F4]">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[16px] font-medium text-[#0B0B0C]">
          Website Overview
        </h3>
        <label className="flex items-center text-[12px] text-small text-black dark:text-white md:text-[14px]">
          <select className="px-3 py-2 border-[1px] border-[#999999] text-[#666666] rounded-md dark:text-white">
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
      </div>
      {/* chart */}
      <div className="w-full h-[350px]">
        <ResponsiveBar
          data={data}
          keys={["Website visited", "Blocked sites"]}
          indexBy="day"
          margin={{ top: 20, right: 0, bottom: 60, left: 40 }}
          padding={0.25}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={[
            "#71AAFF", // Color for "Website visited"
            "#BDD96B" // Color for "Blocked sites"
          ]}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          borderRadius={4}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.3]]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 8,
            tickPadding: 6,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 15,
            truncateTickAt: 43
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 6,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0
          }}
          enableLabel={false}
          labelSkipWidth={14}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]]
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "row",
              justify: false,
              translateX: -280,
              translateY: 57,
              itemsSpacing: 50,
              itemWidth: 77,
              itemHeight: 19,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 16,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          role="application"
          ariaLabel="Bar chart"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in day: " + e.indexValue
          }
        />
      </div>
    </div>
  )
}

export default WebsitesOverview
