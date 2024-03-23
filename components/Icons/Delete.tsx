import React from "react"

type Props = {
  color?: string
}

function Delete({ color = "#F75555" }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.96003 1.98682H9.93325M1.98682 3.97342H13.9065M12.5821 3.97342L12.1177 10.9393C12.048 11.9844 12.0131 12.507 11.7874 12.9032C11.5887 13.2521 11.2889 13.5325 10.9277 13.7076C10.5173 13.9065 9.99357 13.9065 8.94613 13.9065H6.94715C5.89971 13.9065 5.37599 13.9065 4.96563 13.7076C4.60434 13.5325 4.30458 13.2521 4.10585 12.9032C3.88013 12.507 3.84529 11.9844 3.77561 10.9393L3.31122 3.97342M6.62223 6.95333V10.2643M9.27104 6.95333V10.2643"
        stroke={color}
        strokeWidth="1.58929"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Delete
