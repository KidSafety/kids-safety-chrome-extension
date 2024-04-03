import React, { useState } from "react"

import ArrowLeft from "~components/Icons/ArrowLeft"
import ArrowRight from "~components/Icons/ArrowRight"
import type { IQueryParams } from "~types"
import eventEmitter from "~utils/eventEmitter"

function TablePagination() {
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    skip: 0,
    limit: 10
  })

  const handleChangePage = (action: "next" | "prev") => {
    eventEmitter.emit("changePage", action)
  }

  return (
    <div className="flex w-full justify-between items-center mt-6">
      <div className="flex justify-center items-center gap-2">
        <p className="text-sm text-[#666666]">Show</p>
        <label className="flex items-center text-[12px] text-small text-black dark:text-white md:text-[14px]">
          <select className="ml-2 px-4 py-2 border-[1px] border-[#E0E7ED] rounded-md text-black dark:text-white">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </label>
        <p className="text-sm text-[#666666]">entries of 30</p>
      </div>

      <div className="flex justify-normal items-center gap-4">
        <button
          onClick={() => handleChangePage("prev")}
          className="w-[28px] h-[28px] border-[1px] bg-white shadow-pagination border-[#D0D5DD] rounded-md flex justify-center items-center">
          <ArrowLeft />
        </button>
        <p className="text-sm text-[#666666]">
          Page <span className="text-[#1972F9]">1</span> of 10
        </p>
        <button
          onClick={() => handleChangePage("next")}
          className="w-[28px] h-[28px] border-[1px] bg-white shadow-pagination border-[#D0D5DD] rounded-md flex justify-center items-center">
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default TablePagination
