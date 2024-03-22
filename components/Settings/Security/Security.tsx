import React, { Fragment, useState } from "react"

import ChangePassword from "./ChangePassword"
import Notifications from "./Notifications"
import PanelSwitcher from "./PanelSwitcher"

type Props = {}

function Security({}: Props) {
  const [panel, setPanel] = useState(0)
  return (
    <Fragment>
      <div className="w-full mt-6">
        <h2 className="text-[24px] font-semibold text-[#0B0B0C] mb-4">
          Settings
        </h2>
        <div className="bg-white w-full p-8 rounded-lg flex justify-center items-start flex-col gap-2">
          <PanelSwitcher panel={panel} setPanel={setPanel} />
          {panel === 0 && <ChangePassword />}
          {panel === 1 && <Notifications />}
        </div>
      </div>
    </Fragment>
  )
}

export default Security
