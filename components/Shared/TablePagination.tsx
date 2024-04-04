import ArrowLeft from "~components/Icons/ArrowLeft"
import ArrowRight from "~components/Icons/ArrowRight"
import { EventTypes } from "~constants/eventTypes"
import type { IPaginationData } from "~types"
import eventEmitter from "~utils/eventEmitter"

interface ITablePaginationProps {
  pagination: IPaginationData
}
function TablePagination({ pagination }: ITablePaginationProps) {
  const currentPage = Math.ceil(pagination.skip / pagination.limit) + 1
  const pages = Math.ceil(pagination.total / pagination.limit)
  const handleChangePage = (action: "next" | "prev") => {
    if (action === "next") {
      if (pagination.skip >= pagination.total) return
      pagination.skip += pagination.limit
    } else {
      if (pagination.skip === 0) return
      pagination.skip -= pagination.limit
    }
    eventEmitter.emit(EventTypes.REFRESH_WEBHISTORY, pagination)
  }

  return (
    <div className="flex w-full justify-between items-center mt-6">
      <div className="flex justify-normal items-center gap-4">
        <button
          onClick={() => handleChangePage("prev")}
          className="w-[28px] h-[28px] border-[1px] bg-white shadow-pagination border-[#D0D5DD] rounded-md flex justify-center items-center">
          <ArrowLeft />
        </button>
        <p className="text-sm text-[#666666]">
          Page <span className="text-[#1972F9]">{currentPage}</span> of {pages}
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
