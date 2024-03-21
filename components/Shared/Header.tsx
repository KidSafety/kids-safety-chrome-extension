import React from "react"

type Props = {
  headers: string[]
}

function Header({ headers }: Props) {
  return (
    <div className="w-full grid grid-cols-[.5fr,3fr,2fr,2fr,2fr] py-4 px-2">
      <div />
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
