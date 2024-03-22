import React from "react"

type Props = {
  headers: string[]
  isCheckbox?: boolean
}

function Header({ headers, isCheckbox = true }: Props) {
  return (
    <div
      className={`w-full grid ${isCheckbox ? "grid-cols-[.5fr,3fr,2fr,2fr,2fr] py-4 px-2" : "grid-cols-[3fr,2fr,2fr,2fr] py-2 px-2"}`}>
      {isCheckbox && <div />}
      {headers?.map((h: string, index: number) => {
        return (
          <h2
            key={index}
            className="w-full capitalize text-[#999999] text-left text-sm">
            {h}
          </h2>
        )
      })}
    </div>
  )
}

export default Header
