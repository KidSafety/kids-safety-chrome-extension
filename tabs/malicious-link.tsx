import "../style.css"

function MaliciousLinkPage() {
  const urlParams = new URLSearchParams(window.location.search)
  const maliciousLink = urlParams.get("maliciousLink")
  return (
    <div className="w-full h-screen bg-[#194494] flex justify-center items-center flex-col p-4">
      <svg
        width="76"
        height="87"
        viewBox="0 0 76 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_10710_138"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="76"
          height="87">
          <path
            d="M3.875 14.548L38.0171 4.5835L72.125 14.548V34.9813C72.1248 45.4533 68.8294 55.6597 62.7058 64.1547C56.5821 72.6496 47.9407 79.0023 38.0057 82.3127C28.0677 79.0027 19.4233 72.6492 13.2975 64.1524C7.17169 55.6556 3.87515 45.4466 3.875 34.9718V14.548Z"
            fill="white"
            stroke="white"
            stroke-width="7.58333"
            stroke-linejoin="round"
          />
          <path
            d="M20.9375 40.6042L34.2083 53.875L56.9583 31.125"
            stroke="black"
            stroke-width="7.58333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </mask>
        <g mask="url(#mask0_10710_138)">
          <path d="M-7.5 -3H83.5V88H-7.5V-3Z" fill="#F8BD00" />
        </g>
      </svg>
      <h1 className="text-[44.62px] leading-[66px] font-medium text-white mt-4">
        Malicious Link Detected
      </h1>
      <p className="text-[14px] text-center text-white max-w-[430px] font-light my-2">
        The link <span className="text-[#F8BD00]">www.google.com</span> has been
        detected as malicious and has been blocked. You can safely close this
        tab
      </p>
      <button className="bg-[#059669] whitespace-nowrap w-full h-[44px] text-white text-[16px] leading-[24px] text-lg rounded-[8px] mt-6 max-w-[343px]">
        Back to Safety
      </button>
    </div>
  )
}

export default MaliciousLinkPage
