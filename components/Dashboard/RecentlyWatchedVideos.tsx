import videoImage from "data-base64:~assets/video.png"
import React from "react"

function RecentlyWatchedVideos() {
  return (
    <div className="p-4 w-full bg-white rounded-[12px] border-[1px] border-[#F4F4F4]">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[16px] font-medium text-[#0B0B0C]">
          Recently Watched Videos
        </h3>
        <button className="text-sm text-[#A0ABBB] font-medium">
          All Watched Videos
        </button>
      </div>
      <div className="w-full max-w-[420px]] overflow-x-auto flex justify-start items-center gap-2 mt-4 hideScroll">
        {[1, 2, 3, 4]?.map((item: any, index: number) => (
          <div key={index} className="min-w-[190px]">
            <img
              src={videoImage}
              alt="Video"
              className="w-full rounded-lg overflow-hidden h-[110px]"
            />
            <p className="text-[12px] text-[#0B0B0C] mt-2">
              Lorem ipsum dolor sit amet (Oficial Video)
            </p>
            <p className="text-[#989898] text-[10px] my-1">Lorerm Ipsum</p>
            <p className="text-[#989898] text-[9px]">10k views : 2 hours ago</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyWatchedVideos
