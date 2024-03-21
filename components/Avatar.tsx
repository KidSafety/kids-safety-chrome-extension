import React from "react"

function Avatar() {
  return (
    <svg
      width="99"
      height="99"
      viewBox="0 0 99 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_10782_2825)">
        <rect x="9" y="3" width="81" height="81" rx="40.5" fill="#F8F8F9" />
        <rect
          x="7.9875"
          y="1.9875"
          width="83.025"
          height="83.025"
          rx="41.5125"
          stroke="white"
          strokeWidth="2.025"
        />
        <path
          d="M63 58.6875C63 56.3325 63 55.155 62.7093 54.1968C62.0549 52.0395 60.3667 50.3513 58.2094 49.6969C57.2513 49.4062 56.0738 49.4062 53.7187 49.4062H45.2813C42.9262 49.4062 41.7487 49.4062 40.7906 49.6969C38.6333 50.3513 36.9451 52.0395 36.2907 54.1968C36 55.155 36 56.3325 36 58.6875M57.0937 35.9062C57.0937 40.1002 53.6939 43.5 49.5 43.5C45.3061 43.5 41.9062 40.1002 41.9062 35.9062C41.9062 31.7123 45.3061 28.3125 49.5 28.3125C53.6939 28.3125 57.0937 31.7123 57.0937 35.9062Z"
          stroke="#5E5E62"
          strokeWidth="3.375"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_10782_2825"
          x="0.900097"
          y="0.975098"
          width="97.1998"
          height="97.1998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1.0125"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_10782_2825"
          />
          <feOffset dy="2.025" />
          <feGaussianBlur stdDeviation="1.51875" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10782_2825"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.025"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_10782_2825"
          />
          <feOffset dy="6.075" />
          <feGaussianBlur stdDeviation="4.05" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_10782_2825"
            result="effect2_dropShadow_10782_2825"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_10782_2825"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Avatar
